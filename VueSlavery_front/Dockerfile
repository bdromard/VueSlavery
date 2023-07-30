FROM alpine AS base 
WORKDIR /front
COPY . .
RUN apk add --update npm
RUN npm install
EXPOSE 5173 
CMD ["npm", "run", "dev"]
