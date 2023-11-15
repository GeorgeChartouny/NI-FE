FROM node:17-alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
# RUN npm ci
RUN npm run build
ENV NODE_ENV production
EXPOSE 3000
# CMD [ "npx", "serve", "build" ]
CMD ["npm", "start"]

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]