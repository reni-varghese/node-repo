FROM node:20

COPY  *.* .


CMD ["node","app.js"]