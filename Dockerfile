FROM nginx:stable

COPY ./dist/open-notebook /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
