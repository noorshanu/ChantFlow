param(
  [Parameter(ValueFromRemainingArguments = $true)]
  [string[]]$RNArgs
)

$ErrorActionPreference = "Stop"

$projectPath = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path.TrimEnd('\')
$driveLetter = "R:"
$gradleHome = "C:\gradle"

function Get-SubstTarget {
  param([string]$Drive)

  $line = cmd /c "subst $Drive" 2>$null
  if ($line -match '=>\s*(.+)') {
    return $matches[1].Trim().TrimEnd('\')
  }

  return $null
}

$substTarget = Get-SubstTarget -Drive $driveLetter
$currentPath = (Get-Location).Path.TrimEnd('\')

if ($substTarget) {
  if ($substTarget -ine $projectPath) {
    Write-Host "ERROR: $driveLetter is mapped to a different folder:" -ForegroundColor Red
    Write-Host "  $substTarget" -ForegroundColor Red
    Write-Host "Remove it with: subst $driveLetter /d" -ForegroundColor Yellow
    exit 1
  }

  if (-not $currentPath.StartsWith($driveLetter, [StringComparison]::OrdinalIgnoreCase)) {
    Write-Host "$driveLetter is mapped to this project." -ForegroundColor Cyan
    Write-Host "Building from $driveLetter\ (avoids mixed C:/R: Gradle paths)..." -ForegroundColor Cyan
    Set-Location "$driveLetter\"
  }

  if (-not $env:GRADLE_USER_HOME) {
    if (-not (Test-Path $gradleHome)) {
      New-Item -ItemType Directory -Path $gradleHome -Force | Out-Null
    }
    $env:GRADLE_USER_HOME = $gradleHome
  }
} else {
  Set-Location $projectPath

  if ($projectPath.Length -gt 40) {
    Write-Host "WARNING: Project path is long ($($projectPath.Length) chars)." -ForegroundColor Yellow
    Write-Host "On Windows, prefer: npm run android:win" -ForegroundColor Yellow
    Write-Host ""
  }
}

npx react-native run-android @RNArgs
exit $LASTEXITCODE
