FROM node:16.13.2-alpine
WORKDIR "/usr/src/app"
COPY package.json ./
RUN npm install -g npm@8.13.2
RUN npm install
COPY ./ ./
CMD ["npm", "start"]