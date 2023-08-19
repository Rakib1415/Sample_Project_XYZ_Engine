FROM node:18-alpine3.17 as build

WORKDIR /usr/src/react_app

COPY package.json package-lock.json ./

RUN npm install --silent

COPY . .

EXPOSE 3000

CMD [ "npm","run", "dev" ]