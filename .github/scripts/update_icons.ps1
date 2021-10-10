Push-Location ../images/icons
$dirs = Get-ChildItem | ForEach-Object $_ { $_.Name }

$dirs | ForEach-Object $_ {
  Push-Location $_

  $uri = Get-Content .ref -TotalCount 1
  wget -N $uri

  Pop-Location
}

Pop-Location