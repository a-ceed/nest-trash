# Используйте официальный образ Node.js в качестве базового образа
FROM node:20-alpine
# Установите рабочую директорию внутри контейнера
WORKDIR /app
# Установите зависимости
COPY package.json .
COPY package-lock.json .
RUN npm install --production
# Скопируйте исходный код приложения в контейнер
COPY . .
# Скопируйте папку frontend в контейнер
COPY frontend /app/frontend
# Откройте порт, который будет слушать ваше приложение
EXPOSE 3000
# Запустите команду для запуска вашего приложения
CMD ["npm", "run", "start:prod"]
