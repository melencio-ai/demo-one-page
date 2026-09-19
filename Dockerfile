FROM nginx:1.27-alpine

COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY index.html styles.css script.js /usr/share/nginx/html/one-page-demo/

EXPOSE 8080
