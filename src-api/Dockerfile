FROM node:22

RUN mkdir /code
WORKDIR /code

COPY package.json package-lock.json /code/
RUN npm install

EXPOSE 8000
