#### What is this

This is example for simple and small catalog application

#### Project structure

 - /api - api for catalog (categories and items)
 - /admin - app (based on reac-admin framework)
 - /nginx - config for nginx (used as frontend for docker-compose environment)
 - /docker-compose.yml - docker-compose configuration for run

#### How to run / look

1. Checkout repository.
   For run will required `docker` and `docker-compose`. Install it (how it should be done for your OS - search for tutorials).
   This was run on Ubuntu 18.04 (with installed requirements as described in official tutorials).
2. Run services on local node.
```bash
$ docker-compose up -d
```
3. In your browser open url http://localhost/
4. Login and use.

**NB:**
  - Please be sure that in your local node http port (80) does not used by any another application / service.

#### Credentials

Default credentials for login:

 - username: admin@example.com
 - password: 12345

#### Tests / testing

Not now. But used framerowks definitely has it.

#### Production builds

Not now. Current `docker-compose.yml` file runs development environments (with babel / nodemon / and so on).
But really cool DevOps engineers could be able to create Kubernetes deployments in couple hours.

#### Used technologies / frameworks

 - postgresql (latest image v11)
 - Node.js (v11 used in docker images)
 - Express framework (v4.17) for api
 - react && create-react-app && react-admin for admin application
 - as depends of react-admin in the project was used @material-ui/core package (see https://marmelab.com/react-admin/ for docs)

#### License

 - MIT

#### Copyright

(c) 2019 Pavel Minakov <p.a.minakov@gmail.com>