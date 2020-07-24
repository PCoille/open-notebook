FROM nginx:stable

COPY ./dist/open-notebook /usr/share/nginx/html
