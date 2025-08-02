# Use Node.js 18 como base
FROM node:18-alpine AS build

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Instalar dependências
RUN pnpm install

# Copiar código fonte
COPY . .

# Build da aplicação
RUN pnpm run build

# Usar nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copiar arquivos buildados para nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuração customizada do nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Expor porta 8080 (padrão do Google Cloud Run)
EXPOSE 8080

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]

