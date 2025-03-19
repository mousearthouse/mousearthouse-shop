FROM node:22-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install --only-prod

COPY . .

EXPOSE 4173

RUN npm run build

FROM nginx:alpine

# Копируем собранные файлы из этапа сборки
COPY --from=builder /app/dist /usr/share/nginx/html

# Открываем порт 80 для Nginx
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
