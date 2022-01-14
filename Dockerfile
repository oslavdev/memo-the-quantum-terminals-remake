#Build
FROM node:lts-alpine as build 

WORKDIR /app

COPY package.json .
COPY yarn.lock . 

RUN yarn install 

COPY . .

RUN NODE_ENV=production yarn run build

# Production
FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf 

COPY --from=build /app/build /usr/share/nginx/html 
