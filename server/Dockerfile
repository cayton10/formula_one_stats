FROM node as dev_server

WORKDIR /usr/app/src
COPY package*.json ./
RUN npm i

COPY . .
EXPOSE 4000
ENV NODE_PATH=./dist
#RUN npm run build

