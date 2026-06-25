const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

const NATIVE_MODULES = [
  'react-native-gesture-handler',
  'react-native-screens',
  'react-native-svg',
  'react-native-safe-area-context',
  'react-native-linear-gradient',
];

const isWindows = process.platform === 'win32';

const runPowerShell = command => {
  return execSync(`powershell -NoProfile -Command "${command}"`, {
    encoding: 'utf8',
  }).trim();
};

const isReparsePoint = modulePath => {
  if (!fs.existsSync(modulePath)) {
    return false;
  }

  const attributes = runPowerShell(`(Get-Item '${modulePath}').Attributes`);
  return attributes.includes('ReparsePoint');
};

const getJunctionTarget = modulePath => {
  return runPowerShell(`(Get-Item '${modulePath}').Target`);
};

const removeJunction = modulePath => {
  execSync(`cmd /c rmdir "${modulePath}"`, { stdio: 'inherit', shell: true });
};

const copyDirectory = (sourcePath, destinationPath) => {
  fs.rmSync(destinationPath, { recursive: true, force: true });

  try {
    execSync(
      `robocopy "${sourcePath}" "${destinationPath}" /E /NFL /NDL /NJH /NJS /NP`,
      { stdio: 'inherit', shell: true },
    );
  } catch (error) {
    const exitCode = error.status;

    // Robocopy uses 0-7 for successful copy results.
    if (typeof exitCode !== 'number' || exitCode > 7) {
      throw error;
    }
  }
};

const materializeModule = moduleName => {
  const modulePath = path.join(projectRoot, 'node_modules', moduleName);

  if (!isReparsePoint(modulePath)) {
    return;
  }

  const sourcePath = getJunctionTarget(modulePath);
  const tempPath = path.join(projectRoot, 'node_modules', `.${moduleName}-materialize`);

  console.log(`Materializing ${moduleName} for Windows native builds...`);

  copyDirectory(sourcePath, tempPath);
  removeJunction(modulePath);
  fs.renameSync(tempPath, modulePath);
};

if (isWindows) {
  NATIVE_MODULES.forEach(materializeModule);
  console.log('Native modules materialized.');
}
