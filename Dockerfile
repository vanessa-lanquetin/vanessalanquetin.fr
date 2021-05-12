FROM alpine:3.12 as builder
RUN apk --no-cache add gcc g++ make python3 nodejs npm
WORKDIR /vanessalanquetin
COPY . .
RUN npm i
RUN npm run build
RUN rm -rf node_modules
RUN npm i --production

FROM alpine:3.12
RUN apk --no-cache add nodejs
WORKDIR /vanessalanquetin
COPY --from=builder /vanessalanquetin/dist ./dist
COPY --from=builder /vanessalanquetin/server.js .
COPY --from=builder /vanessalanquetin/node_modules ./node_modules
CMD ["node", "server.js"]
