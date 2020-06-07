FROM debian:9.5-slim

LABEL "com.github.actions.name"="Deploy to AWS CDN"
LABEL "com.github.actions.description"="Deploys the specified files to the CDN based on the tag version"
LABEL "com.github.actions.icon"="upload"
LABEL "com.github.actions.color"="green"
LABEL "repository"="https://github.com/MrNikunjPatel/math-random-nikunj.git"

RUN apt update && apt install git -y && apt install awscli -y

ADD entry.sh /entry.sh

ENTRYPOINT ["/entry.sh"]