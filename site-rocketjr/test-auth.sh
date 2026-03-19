#!/bin/sh

# Script para testar a autenticação

echo "Testando endpoint de autenticação..."

RESPONSE=$(curl -s -X POST http://localhost:3000/api/auth/callback/credentials \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@rocketjr.com",
    "password": "foguetinhos2023"
  }')

echo "Resposta do servidor:"
echo "$RESPONSE"
