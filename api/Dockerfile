FROM node:11

RUN mkdir /app
COPY . /app
WORKDIR /app
RUN rm -Rf /app/node_modules && npm install
EXPOSE 3000
ENTRYPOINT /app/node_modules/sequelize-cli/lib/sequelize db:migrate \
    && /app/node_modules/sequelize-cli/lib/sequelize db:seed:all \
    && npm run start
