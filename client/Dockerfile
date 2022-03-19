FROM node as client

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install

COPY . .
EXPOSE 3000
ENV NODE_PATH=./build
RUN npm run build