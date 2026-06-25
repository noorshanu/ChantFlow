# Builds Android from a short drive letter to avoid Windows MAX_PATH (260 chars).
# Required for React Native New Architecture native builds on Windows.

$ErrorActionPreference = "Stop"

$projectPath = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$driveLetter = "R:"
$gradleHome = "C:\gradle"

function Test-SubstDrive {
  param([string]$Drive)

  $substOutput = cmd /c subst 2>$null
  return $substOutput -match [regex]::Escape($Drive)
}

if (-not (Test-Path $gradleHome)) {
  New-Item -ItemType Directory -Path $gradleHome -Force | Out-Null
  Write-Host "Created short Gradle home: $gradleHome" -ForegroundColor Cyan
}

$env:GRADLE_USER_HOME = $gradleHome

if (-not (Test-SubstDrive -Drive $driveLetter)) {
  Write-Host "Mapping $driveLetter -> $projectPath" -ForegroundColor Cyan
  subst $driveLetter $projectPath
} else {
  Write-Host "$driveLetter already mapped (using existing subst)" -ForegroundColor Yellow
}

$shortRoot = "$driveLetter\"
Set-Location $shortRoot

Write-Host "Building from $shortRoot (GRADLE_USER_HOME=$gradleHome)..." -ForegroundColor Green

node scripts/materialize-native-modules.js
pnpm clean:android
pnpm android

Write-Host ""
Write-Host "Keep using these for Windows Android builds:" -ForegroundColor Cyan
Write-Host "  cd R:\"
Write-Host "  pnpm android"
Write-Host ""
Write-Host "Remove drive mapping later with: subst $driveLetter /d" -ForegroundColor DarkGray
