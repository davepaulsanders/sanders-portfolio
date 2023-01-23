# stage1 as builder
FROM node:alpine

WORKDIR /app
# copy the package.json to install dependencies
COPY package.json package-lock.json ./
# Install the dependencies and make the folder
RUN npm install

RUN npm install pm2 -g

COPY . .


CMD ["npm", "run", "dev"]