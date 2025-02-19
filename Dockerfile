FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
COPY . ./

RUN npm install

EXPOSE 3000
CMD ["sh", "-c", "npm start"]