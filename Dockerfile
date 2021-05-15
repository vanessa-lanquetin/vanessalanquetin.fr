FROM alpine:3.12 as builder
RUN apk --no-cache add gcc g++ make python3 nodejs npm
WORKDIR /vanessalanquetin
COPY . .
ARG VUE_APP_SERVER_URL
ENV VUE_APP_SERVER_URL=$VUE_APP_SERVER_URL
ARG VUE_APP_SERVER_PORT
ENV VUE_APP_SERVER_PORT=$VUE_APP_SERVER_PORT
RUN npm i
RUN npm run build
RUN cd server && npm i 

FROM alpine:3.12
RUN apk --no-cache add nodejs
WORKDIR /vanessalanquetin
COPY --from=builder /vanessalanquetin/server .
CMD ["node", "server.js"]
