# stage1 as builder
FROM node:alpine

WORKDIR /app

RUN npm install pm2 -g

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "pm2-runtime", "npm", "--", "start" ]