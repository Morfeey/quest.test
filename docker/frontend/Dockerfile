FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /front

RUN npm install -g @vue/cli
RUN npm update -g @vue/cli
RUN vue add vuetify

#RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]