FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
RUN rm -rf node_modules

COPY . .
EXPOSE 4000
CMD  ["npm", "run", "dev"]