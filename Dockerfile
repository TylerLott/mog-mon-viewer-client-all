FROM node:16-alpine3.11 as build-deps
ENV NODE_ENV=production
WORKDIR /app
COPY ./viewer-client/package.json ./viewer-client/package-lock.json ./
RUN npm install
COPY ./viewer-client ./
RUN npm run build

FROM node:16-alpine3.11
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build-deps /app/build /build
COPY ./viewer-client-server/package*.json ./
RUN npm install
COPY ./viewer-client-server/index.js ./
EXPOSE 80
CMD ["npm", "start"] 