# Deploy no Google Cloud - Portas Automáticas

Este guia explica como fazer o deploy do site de Portas Automáticas no Google Cloud Run.

## 📋 Pré-requisitos

1. **Conta Google Cloud**: Crie uma conta em [cloud.google.com](https://cloud.google.com)
2. **Projeto Google Cloud**: Crie um novo projeto no console
3. **Google Cloud CLI**: Instale em [cloud.google.com/sdk](https://cloud.google.com/sdk/docs/install)
4. **Docker**: Instale em [docker.com](https://docs.docker.com/get-docker/)

## 🚀 Deploy Automático (Recomendado)

### Passo 1: Configurar Google Cloud CLI
```bash
# Fazer login
gcloud auth login

# Configurar projeto (substitua SEU_PROJECT_ID)
gcloud config set project SEU_PROJECT_ID

# Configurar região padrão
gcloud config set run/region us-central1
```

### Passo 2: Executar Deploy
```bash
# Dar permissão de execução ao script
chmod +x deploy.sh

# Executar deploy
./deploy.sh
```

O script irá:
- Habilitar APIs necessárias
- Construir a imagem Docker
- Fazer upload para Container Registry
- Fazer deploy no Cloud Run
- Retornar a URL pública do site

## 🔧 Deploy Manual

### Passo 1: Habilitar APIs
```bash
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

### Passo 2: Build e Push da Imagem
```bash
# Definir variáveis
PROJECT_ID=$(gcloud config get-value project)
IMAGE_NAME="gcr.io/$PROJECT_ID/portas-automaticas"

# Build da imagem
docker build -t $IMAGE_NAME .

# Push para Container Registry
docker push $IMAGE_NAME
```

### Passo 3: Deploy no Cloud Run
```bash
gcloud run deploy portas-automaticas \
    --image $IMAGE_NAME \
    --region us-central1 \
    --platform managed \
    --allow-unauthenticated \
    --port 8080 \
    --memory 512Mi \
    --cpu 1 \
    --max-instances 10
```

## 🔄 Deploy Contínuo com Cloud Build

### Configurar repositório Git
1. Conecte seu repositório ao Google Cloud Source Repositories
2. Configure trigger no Cloud Build usando o arquivo `cloudbuild.yaml`

### Trigger automático
```bash
gcloud builds triggers create github \
    --repo-name=portas-automaticas \
    --repo-owner=SEU_USUARIO \
    --branch-pattern="^main$" \
    --build-config=cloudbuild.yaml
```

## 🌐 Configurar Domínio Customizado

### No Console Google Cloud:
1. Acesse [Cloud Run Console](https://console.cloud.google.com/run)
2. Clique no serviço `portas-automaticas`
3. Vá em "Manage Custom Domains"
4. Adicione seu domínio
5. Configure DNS conforme instruções

### Via CLI:
```bash
gcloud run domain-mappings create \
    --service portas-automaticas \
    --domain seu-dominio.com \
    --region us-central1
```

## 📊 Monitoramento

### Logs
```bash
# Ver logs em tempo real
gcloud run services logs tail portas-automaticas --region=us-central1

# Ver logs específicos
gcloud run services logs read portas-automaticas --region=us-central1 --limit=50
```

### Métricas
- Acesse [Cloud Monitoring](https://console.cloud.google.com/monitoring)
- Configure alertas para CPU, memória e latência

## 🔧 Configurações Avançadas

### Variáveis de Ambiente
```bash
gcloud run services update portas-automaticas \
    --set-env-vars="NODE_ENV=production" \
    --region=us-central1
```

### Escalonamento
```bash
gcloud run services update portas-automaticas \
    --min-instances=1 \
    --max-instances=20 \
    --concurrency=100 \
    --region=us-central1
```

### Recursos
```bash
gcloud run services update portas-automaticas \
    --memory=1Gi \
    --cpu=2 \
    --region=us-central1
```

## 💰 Estimativa de Custos

### Cloud Run (Pay-per-use):
- **Requests**: $0.40 por 1 milhão de requests
- **CPU**: $0.00002400 por vCPU-segundo
- **Memory**: $0.00000250 por GiB-segundo
- **Free Tier**: 2 milhões de requests/mês

### Exemplo mensal (10.000 visitantes):
- Requests: ~100.000 = **Gratuito**
- CPU/Memory: ~$2-5
- **Total estimado: $2-5/mês**

## 🛠️ Troubleshooting

### Erro de permissões
```bash
# Configurar autenticação Docker
gcloud auth configure-docker
```

### Erro de build
```bash
# Limpar cache Docker
docker system prune -a

# Rebuild sem cache
docker build --no-cache -t IMAGE_NAME .
```

### Erro de deploy
```bash
# Verificar status do serviço
gcloud run services describe portas-automaticas --region=us-central1

# Ver logs de erro
gcloud run services logs read portas-automaticas --region=us-central1
```

## 📞 Suporte

- **Documentação**: [cloud.google.com/run/docs](https://cloud.google.com/run/docs)
- **Stack Overflow**: Tag `google-cloud-run`
- **GitHub Issues**: Para problemas específicos do código

## 🔄 Atualizações

Para atualizar o site:
1. Faça as alterações no código
2. Execute `./deploy.sh` novamente
3. O Cloud Run automaticamente fará o deploy da nova versão

---

**Desenvolvido com ❤️ para Portas Automáticas**

