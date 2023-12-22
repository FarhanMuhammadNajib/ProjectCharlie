# Gunakan Nginx sebagai base image
FROM nginx:alpine

# Hapus file konfigurasi default Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Salin file konfigurasi Nginx Anda
COPY nginx.conf /etc/nginx/conf.d

# Salin semua file dari repository GitHub Anda ke dalam direktori /usr/share/nginx/html
COPY . /usr/share/nginx/html
