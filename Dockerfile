FROM node:lts

WORKDIR /app
COPY . /app/

RUN npm i

RUN npm run build

EXPOSE 8080 3000

CMD ["npm", "run", "preview"]
