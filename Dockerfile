FROM node:16.13.2-alpine
WORKDIR /app
COPY package*.json /app/
RUN npm install -g npm@8.13.2
RUN npm install
COPY . /app
CMD ["npm", "start"]