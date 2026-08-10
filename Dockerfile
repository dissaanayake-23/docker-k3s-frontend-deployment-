FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js

RUN chmod 644 /usr/share/nginx/html/index.html \
    /usr/share/nginx/html/style.css \
    /usr/share/nginx/html/script.js

EXPOSE 80

