FROM node:20

WORKDIR /app

ARG NODE_ENV=production

COPY package*.json ./

RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --omit=dev; \
    fi

COPY . .

CMD ["node", "src/main.js"]
