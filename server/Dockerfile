FROM node:22.4-alpine3.19

RUN npm install -g cypress

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "start"]