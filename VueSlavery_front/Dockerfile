FROM alpine AS base 
WORKDIR /front
COPY . .
RUN apk add --update npm
RUN npm install
EXPOSE 5173 
USER 950:950
CMD ["npm", "run", "dev"]
