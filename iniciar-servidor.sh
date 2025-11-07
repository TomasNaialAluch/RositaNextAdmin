#!/bin/bash
# Servidor HTTP Simple para Rosita Admin
# Ejecuta este archivo para iniciar un servidor local

echo "Iniciando servidor HTTP en http://localhost:8000"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo ""

# Intenta usar Python 3 primero
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m http.server 8000
elif command -v node &> /dev/null; then
    npx http-server -p 8000
elif command -v php &> /dev/null; then
    php -S localhost:8000
else
    echo "Error: No se encontró Python, Node.js ni PHP instalado."
    echo "Por favor instala uno de estos programas para poder ejecutar el servidor."
fi

