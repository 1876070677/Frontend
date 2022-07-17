FROM node:14.15.4
WORKDIR /app
COPY package*.json /app/
RUN npm install -g npm@8.13.2
RUN npm install
COPY . /app
CMD ["npm", "start"]
EXPOSE 3007