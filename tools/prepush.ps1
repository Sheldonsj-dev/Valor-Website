$ErrorActionPreference = 'Stop'

# only one PostCSS config
$dups = Get-ChildItem -Force -Name `
  ".postcssrc", ".postcssrc.json", ".postcssrc.cjs", `
  "postcss.config", "postcss.config.json" | Where-Object { $_ -ne "postcss.config.cjs" }
if ($dups) { throw "Remove duplicate PostCSS configs: $($dups -join ', ')" }

function Test-Bom([string]$path) {
  if (-not (Test-Path $path)) { return }
  $b = [IO.File]::ReadAllBytes((Resolve-Path $path))
  if ($b.Length -ge 3 -and $b[0] -eq 0xEF -and $b[1] -eq 0xBB -and $b[2] -eq 0xBF) {
    throw "BOM detected in $path. Save as UTF-8 without BOM."
  }
}

"postcss.config.cjs","tailwind.config.cjs","vite.config.ts" | ForEach-Object { Test-Bom $_ }

npm ci
npm run build

Copy-Item -Force dist/index.html dist/404.html

$idx = Get-Content dist/index.html -Raw
if ($idx -match "/src/") { throw "dist/index.html still references /src/" }
if ($idx -notmatch "\./assets/") { throw "Expected ./assets in dist/index.html" }

Write-Host "Pre-push checks passed" -ForegroundColor Green