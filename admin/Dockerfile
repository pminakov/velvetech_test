FROM node:11

RUN mkdir /app
COPY . /app
WORKDIR /app
RUN rm -Rf /app/node_modules && npm install -g yarn && yarn install
EXPOSE 3000
ENTRYPOINT npm run start