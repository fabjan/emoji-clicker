#
# BUILDING
#
FROM node:16.3.0-alpine3.13 as builder

WORKDIR /app

#
# DEPS
#
COPY package.json yarn.lock ./
RUN yarn

#
# SOURCES
#
COPY public ./public
COPY tsconfig.json ./
COPY src ./src

ARG baseurl=http://localhost:5000/v1
ENV REACT_APP_BASEURL=$baseurl

RUN yarn build

#
# RUNTIME
#
FROM nginx:1.21-alpine
RUN rm -rf /etc/nginx/conf.d/*
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
