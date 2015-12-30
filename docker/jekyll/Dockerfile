FROM ruby

RUN gem install jekyll

RUN apt-get update && apt-get install -y \
    nodejs \
    nodejs-dev \
    npm

RUN npm install --global foundation-cli