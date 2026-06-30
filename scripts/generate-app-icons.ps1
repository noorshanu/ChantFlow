# Generates Android + iOS launcher icons from src/app/assets/images/logo.png

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$logoPath = Join-Path $projectRoot "src\app\assets\images\logo.png"

if (-not (Test-Path $logoPath)) {
  Write-Host "Logo not found: $logoPath" -ForegroundColor Red
  exit 1
}

$source = [System.Drawing.Image]::FromFile($logoPath)

function Save-Icon {
  param(
    [string]$DestinationPath,
    [int]$Size
  )

  $bitmap = New-Object System.Drawing.Bitmap $Size, $Size
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.DrawImage($source, 0, 0, $Size, $Size)
  $bitmap.Save($DestinationPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $graphics.Dispose()
  $bitmap.Dispose()
}

$androidSizes = @{
  "mipmap-mdpi"    = 48
  "mipmap-hdpi"    = 72
  "mipmap-xhdpi"   = 96
  "mipmap-xxhdpi"  = 144
  "mipmap-xxxhdpi" = 192
}

Write-Host "Generating Android launcher icons..." -ForegroundColor Cyan

foreach ($folder in $androidSizes.Keys) {
  $size = $androidSizes[$folder]
  $resDir = Join-Path $projectRoot "android\app\src\main\res\$folder"

  Save-Icon (Join-Path $resDir "ic_launcher.png") $size
  Save-Icon (Join-Path $resDir "ic_launcher_round.png") $size
  Write-Host "  $folder ($size px)" -ForegroundColor DarkGray
}

$iosIcons = @(
  @{ File = "Icon-20@2x.png"; Size = 40 },
  @{ File = "Icon-20@3x.png"; Size = 60 },
  @{ File = "Icon-29@2x.png"; Size = 58 },
  @{ File = "Icon-29@3x.png"; Size = 87 },
  @{ File = "Icon-40@2x.png"; Size = 80 },
  @{ File = "Icon-40@3x.png"; Size = 120 },
  @{ File = "Icon-60@2x.png"; Size = 120 },
  @{ File = "Icon-60@3x.png"; Size = 180 },
  @{ File = "Icon-1024.png"; Size = 1024 }
)

$iosDir = Join-Path $projectRoot "ios\ChantFlow\Images.xcassets\AppIcon.appiconset"

Write-Host "Generating iOS app icons..." -ForegroundColor Cyan

foreach ($icon in $iosIcons) {
  Save-Icon (Join-Path $iosDir $icon.File) $icon.Size
  Write-Host "  $($icon.File) ($($icon.Size) px)" -ForegroundColor DarkGray
}

$source.Dispose()

$contentsJson = @'
{
  "images": [
    { "filename": "Icon-20@2x.png", "idiom": "iphone", "scale": "2x", "size": "20x20" },
    { "filename": "Icon-20@3x.png", "idiom": "iphone", "scale": "3x", "size": "20x20" },
    { "filename": "Icon-29@2x.png", "idiom": "iphone", "scale": "2x", "size": "29x29" },
    { "filename": "Icon-29@3x.png", "idiom": "iphone", "scale": "3x", "size": "29x29" },
    { "filename": "Icon-40@2x.png", "idiom": "iphone", "scale": "2x", "size": "40x40" },
    { "filename": "Icon-40@3x.png", "idiom": "iphone", "scale": "3x", "size": "40x40" },
    { "filename": "Icon-60@2x.png", "idiom": "iphone", "scale": "2x", "size": "60x60" },
    { "filename": "Icon-60@3x.png", "idiom": "iphone", "scale": "3x", "size": "60x60" },
    { "filename": "Icon-1024.png", "idiom": "ios-marketing", "scale": "1x", "size": "1024x1024" }
  ],
  "info": { "author": "xcode", "version": 1 }
}
'@

Set-Content -Path (Join-Path $iosDir "Contents.json") -Value $contentsJson -Encoding UTF8

Write-Host ""
Write-Host "App icons generated from logo.png" -ForegroundColor Green
Write-Host "Rebuild the app to see the new launcher icon." -ForegroundColor Yellow
