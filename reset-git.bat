@echo off
echo Eliminando configuracion Git existente...
if exist ".git" (
    rmdir /s /q .git
    echo Directorio .git eliminado.
) else (
    echo No se encontro directorio .git.
)
echo Eliminando archivos de configuracion Git...
if exist ".gitattributes" del .gitattributes
if exist ".gitignore" del .gitignore
echo Configuracion Git eliminada.
pause