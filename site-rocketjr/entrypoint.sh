#!/bin/sh
set -e

# Carregar variáveis de ambiente
export DATABASE_URL="${DATABASE_URL:-file:./prisma/dev.db}"
export NEXTAUTH_URL="${NEXTAUTH_URL:-http://localhost:3000}"
export NEXTAUTH_SECRET="${NEXTAUTH_SECRET:-rocketfogueteelonmusk2023}"
export ADMIN_EMAIL="${ADMIN_EMAIL:-admin@rocketjr.com}"
export ADMIN_PASSWORD="${ADMIN_PASSWORD:-foguetinhos2023}"

echo "Inicializando banco de dados..."
node scripts/init-db.js || echo "⚠️ Aviso: init-db falhou"

sleep 1

echo "✅ Iniciando aplicação..."
exec npm start
