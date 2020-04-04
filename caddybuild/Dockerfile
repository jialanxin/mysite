FROM ubuntu as build
WORKDIR /app
RUN apt update \
    && apt install -y curl \
    && curl -L -o caddy2.tar.gz https://github.com/caddyserver/caddy/releases/download/v2.0.0-rc.1/caddy_2.0.0-rc.1_Linux_x86_64.tar.gz \
    && tar xf caddy2.tar.gz

FROM alpine as prod
WORKDIR /app
COPY --from=0 /app/caddy .
COPY ./conf ./conf
COPY ./dist ./dist
RUN mv caddy /usr/bin  
CMD ["caddy","run","--config","./conf/Caddyfile","--adapter","caddyfile"]
