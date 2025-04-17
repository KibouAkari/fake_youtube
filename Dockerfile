# Use Nginx as a base
FROM nginx:alpine

# Copy static HTML files to the nginx folder
COPY html/ /usr/share/nginx/html

# Using own nginx configuration
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Port 80 exposed
EXPOSE 80


