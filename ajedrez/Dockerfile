FROM ubuntu:focal-20221130
RUN  echo "8" > entrada && echo "29" >> entrada
RUN apt-get update && apt-get install -y openjdk-8-jdk < entrada
RUN apt-get install -y supervisor
COPY ./supervisor.conf /etc/supervisor/conf.d
COPY ./serverajedrez.jar /root/serverajedrez.jar
COPY ./www /root/www
WORKDIR /root
EXPOSE 7777
CMD /bin/supervisord -n






