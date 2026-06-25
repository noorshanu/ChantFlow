const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const androidDir = path.join(projectRoot, 'android');

const removeIfExists = targetPath => {
  if (fs.existsSync(targetPath)) {
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
};

const nativeModules = [
  'react-native-gesture-handler',
  'react-native-screens',
  'react-native-svg',
  'react-native-safe-area-context',
  'react-native-linear-gradient',
];

nativeModules.forEach(moduleName => {
  removeIfExists(
    path.join(projectRoot, 'node_modules', moduleName, 'android', 'build'),
  );
});

removeIfExists(path.join(androidDir, 'app', 'build'));
removeIfExists(path.join(androidDir, 'build'));
removeIfExists(path.join(androidDir, '.gradle'));

const gradlew = process.platform === 'win32' ? 'gradlew.bat' : './gradlew';

execSync(`${gradlew} clean`, {
  cwd: androidDir,
  stdio: 'inherit',
  shell: true,
});

console.log('Android build caches cleaned.');
