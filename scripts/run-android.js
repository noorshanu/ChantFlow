const { spawnSync } = require('child_process');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const passthroughArgs = process.argv.slice(2);

if (process.platform === 'win32') {
  const scriptPath = path.join(__dirname, 'run-android.ps1');
  const result = spawnSync(
    'powershell',
    ['-ExecutionPolicy', 'Bypass', '-File', scriptPath, ...passthroughArgs],
    { stdio: 'inherit', cwd: projectRoot },
  );

  process.exit(result.status ?? 1);
}

const result = spawnSync('npx', ['react-native', 'run-android', ...passthroughArgs], {
  stdio: 'inherit',
  cwd: projectRoot,
  shell: true,
});

process.exit(result.status ?? 1);
