FROM alpine AS base 
WORKDIR /back
COPY . .
RUN apk add --update npm
RUN npm install
RUN npm install -g nodemon
EXPOSE 5174 
CMD ["nodemon", "server.js"]
