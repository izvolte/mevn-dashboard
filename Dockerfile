FROM node:14

RUN npm install --global yarn --force

WORKDIR /usr/src/dashboard

COPY package.json /usr/src/dashboard/

RUN yarn

ENV PORT=3000
ENV HOST=0.0.0.0
ENV NUXT_APP_BASE_URL=http://localhost:3001/api/v1/

COPY . .
EXPOSE 3000
CMD yarn build && yarn start
