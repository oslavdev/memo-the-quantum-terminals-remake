FROM node:12-alpine

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm i 

COPY . .

RUN ls

EXPOSE 8080

# Run in development mode
CMD ["npm", "run", "dev"]