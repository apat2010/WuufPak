FROM node:14-alpine

# RUN mkdir -p /src/app

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install
Copy . .


CMD [ "npm", "start" ]