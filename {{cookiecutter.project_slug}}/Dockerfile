FROM busybox
COPY site/build /www
ENTRYPOINT busybox httpd -f -h /www
