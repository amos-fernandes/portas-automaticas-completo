#!/bin/bash

# Script para deploy no Google Cloud Run
# Certifique-se de ter o gcloud CLI instalado e configurado

set -e

# Configurações
PROJECT_ID="seu-projeto-id"
SERVICE_NAME="portas-automaticas"
REGION="us-central1"
IMAGE_NAME="gcr.io/$PROJECT_ID/$SERVICE_NAME"

echo "🚀 Iniciando deploy do site Portas Automáticas..."

# Verificar se o gcloud está configurado
if ! command -v gcloud &> /dev/null; then
    echo "❌ Google Cloud CLI não encontrado. Instale em: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Verificar se o projeto está configurado
CURRENT_PROJECT=$(gcloud config get-value project 2>/dev/null)
if [ -z "$CURRENT_PROJECT" ]; then
    echo "❌ Projeto do Google Cloud não configurado. Execute: gcloud config set project SEU_PROJECT_ID"
    exit 1
fi

PROJECT_ID=$CURRENT_PROJECT
IMAGE_NAME="gcr.io/$PROJECT_ID/$SERVICE_NAME"

echo "📋 Projeto: $PROJECT_ID"
echo "🏷️  Imagem: $IMAGE_NAME"

# Habilitar APIs necessárias
echo "🔧 Habilitando APIs necessárias..."
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com

# Build da imagem Docker
echo "🔨 Construindo imagem Docker..."
docker build -t $IMAGE_NAME .

# Push da imagem para Container Registry
echo "📤 Enviando imagem para Container Registry..."
docker push $IMAGE_NAME

# Deploy no Cloud Run
echo "🚀 Fazendo deploy no Cloud Run..."
gcloud run deploy $SERVICE_NAME \
    --image $IMAGE_NAME \
    --region $REGION \
    --platform managed \
    --allow-unauthenticated \
    --port 8080 \
    --memory 512Mi \
    --cpu 1 \
    --max-instances 10

# Obter URL do serviço
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --region=$REGION --format='value(status.url)')

echo ""
echo "✅ Deploy concluído com sucesso!"
echo "🌐 URL do site: $SERVICE_URL"
echo ""
echo "📝 Para atualizar o site:"
echo "   1. Faça as alterações no código"
echo "   2. Execute novamente: ./deploy.sh"
echo ""
echo "🔧 Para configurar domínio customizado:"
echo "   1. Acesse: https://console.cloud.google.com/run"
echo "   2. Clique no serviço '$SERVICE_NAME'"
echo "   3. Vá em 'Manage Custom Domains'"

