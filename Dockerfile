# Use the official Ubuntu base image
FROM node:20 AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build


FROM ubuntu:22.04
RUN apt-get update && \
    apt-get install -y nginx
COPY nginx/default /etc/nginx/sites-available/default
COPY letsencrypt/ /etc/letsencrypt/
COPY --from=builder /usr/src/app/build /var/www/html
EXPOSE 80 443
# Start Nginx in the foreground
ENTRYPOINT ["nginx", "-g", "daemon off;"]
