# ChantFlow Windows Android dev setup helper.
# Run in PowerShell (Admin required only for long-path step).

$projectRoot = Split-Path -Parent $PSScriptRoot
$projectRootLength = $projectRoot.Length

Write-Host "Project path: $projectRoot ($projectRootLength chars)" -ForegroundColor Cyan

if ($projectRootLength -gt 30) {
  Write-Host ""
  Write-Host "WARNING: Project path is long. React Native New Architecture native builds" -ForegroundColor Yellow
  Write-Host "often fail on Windows when paths exceed 260 characters." -ForegroundColor Yellow
  Write-Host ""
  Write-Host "Recommended fixes (pick one):" -ForegroundColor Green
  Write-Host "  1. Move/clone repo to a short path: C:\cf\ChantFlow"
  Write-Host "  2. Use a drive subst (temporary short path):"
  Write-Host "     subst R: `"$projectRoot`""
  Write-Host "     cd R:\"
  Write-Host "  3. Enable Windows long paths (Admin PowerShell, then reboot):"
  Write-Host "     New-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem' -Name 'LongPathsEnabled' -Value 1 -PropertyType DWORD -Force"
}

$longPathsKey = "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem"
$longPathsEnabled = (Get-ItemProperty -Path $longPathsKey -Name LongPathsEnabled -ErrorAction SilentlyContinue).LongPathsEnabled

Write-Host ""
if ($longPathsEnabled -eq 1) {
  Write-Host "Windows long paths: ENABLED" -ForegroundColor Green
} else {
  Write-Host "Windows long paths: DISABLED (recommended to enable for RN on Windows)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Windows Android build (REQUIRED on Windows):" -ForegroundColor Cyan
Write-Host "  pnpm android:win"
Write-Host ""
Write-Host "Why: React Native New Architecture C++ paths exceed 260 chars in"
Write-Host "     C:\Users\...\Documents\GitHub\ChantFlow. The script maps R:\ and"
Write-Host "     uses C:\gradle for Gradle cache."
Write-Host ""
Write-Host "Manual steps:" -ForegroundColor Cyan
Write-Host "  subst R: `"$projectRoot`""
Write-Host "  `$env:GRADLE_USER_HOME = 'C:\gradle'"
Write-Host "  cd R:\"
Write-Host "  pnpm clean:android"
Write-Host "  pnpm android"
Write-Host ""
Write-Host "Metro (any path):" -ForegroundColor Cyan
Write-Host "  pnpm start -- --reset-cache"
