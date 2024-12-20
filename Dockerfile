# 使用 Nginx 作为基础镜像
FROM nginx:stable-perl

# 复制构建后的文件到 Nginx 的默认静态文件目录
COPY dist /usr/share/nginx/html

# 暴露 Nginx 的默认端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]