FROM nginx:1.27-alpine

COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY projects/ordio/index.html projects/ordio/styles.css projects/ordio/script.js /usr/share/nginx/html/ordio/

EXPOSE 8080
