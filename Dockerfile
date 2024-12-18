FROM nginx
RUN echo 'alias ll="ls -l"' >> ~/.bashrc
RUN apt-get update
# 安装vim
RUN apt-get install -y bash vim
# 安装ping
RUN apt-get install -y iputils-ping
# 安装并配置语言工具包，防止中文乱码
RUN apt-get install -y locales
RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LC_ALL en_US.UTF-8

# 安装 net-tools 包，它包含了 netstat 工具
RUN apt-get install -y net-tools

# 将 vue 打包后的 dist 目录复制到 Nginx 的静态资源目录
COPY ./dist /www/wwwroot/sunwenqiang

# 移除 Nginx 配置文件中的默认配置
RUN rm /etc/nginx/conf.d/default.conf
# 复制自定义的 Nginx 配置文件到容器
COPY ./nginx_dev.conf /etc/nginx/conf.d
# 暴露 Nginx 的 80 端口
EXPOSE 80