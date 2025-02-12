module.exports = {
  apps: [{
    name: 'nestjs-app',
    script: 'dist/main.js',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      DATABASE_HOST: 'postgres',
      DATABASE_PORT: 5432,
      DATABASE_USER: 'root',
      DATABASE_PASSWORD: 'mario123',
      DATABASE_NAME: 'UNAM-BD'
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }]
};