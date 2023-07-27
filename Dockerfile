FROM alpine:3.14 as builder
RUN apk --no-cache add gcc g++ make python3 nodejs npm
WORKDIR /vanessalanquetin
COPY . .
ARG VITE_APP_SERVER_URL
ENV VITE_APP_SERVER_URL=$VITE_APP_SERVER_URL
ARG VITE_APP_SERVER_PORT
ENV VITE_APP_SERVER_PORT=$VITE_APP_SERVER_PORT
RUN npm i
RUN npm run build
RUN cd server && npm i 

FROM alpine:3.14
RUN apk --no-cache add nodejs
WORKDIR /vanessalanquetin
COPY --from=builder /vanessalanquetin/server .
CMD ["node", "server.js"]
