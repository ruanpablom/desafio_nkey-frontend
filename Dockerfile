FROM node:12

WORKDIR /home/node/server

COPY . .

RUN npm install

RUN npm install -g serve

RUN npm run build

CMD serve -s build