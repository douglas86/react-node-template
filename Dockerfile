FROM node:22.4-alpine3.19

WORKDIR /app

RUN npm i -g concurrently

COPY client/package.json client/
COPY server/package.json server/
COPY server/prisma server/prisma/

RUN cd client && npm install
RUN cd server && npm install
RUN cd server && npx prisma migrate dev

COPY . .

CMD ["npm", "start"]