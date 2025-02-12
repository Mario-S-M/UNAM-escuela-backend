FROM node:23-alpine

# Instalar PM2 globalmente
RUN npm install -g pm2

WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación
RUN npm run build

EXPOSE 3000

# Usar PM2 Runtime
CMD ["pm2-runtime", "ecosystem.config.js"]