FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
RUN rm -rf node_modules

COPY . .
EXPOSE 3008
CMD  ["npm", "run", "dev"]