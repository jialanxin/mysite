FROM ubuntu as build
WORKDIR /app
RUN apt update \
    && apt install -y curl \
    && curl -L -o caddy2 https://github.com/caddyserver/caddy/releases/download/v2.0.0-beta10/caddy2_beta10_linux_amd64 \
    && chmod +x caddy2

FROM alpine as prod
WORKDIR /app
COPY --from=0 /app/caddy2 .
COPY ./conf .
COPY ./dist .
RUN mv caddy2 /usr/bin  
CMD ["caddy2","run","--config","./conf/Caddyfile","--adapter","caddyfile"]
