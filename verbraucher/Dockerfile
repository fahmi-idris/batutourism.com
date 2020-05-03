# Download base image nodejs
FROM node:12.16.1 as build

# Set environment variables
ENV APPDIR /code

RUN mkdir -p ${APPDIR}
WORKDIR ${APPDIR}
ADD . ${APPDIR}
COPY package.json package-lock.json ./

RUN npm install

FROM node:12.16.1-alpine3.9

ENV APPDIR /code
ENV NODE_ENV="production"
ENV PATH="./node_modules/.bin:$PATH"

# Set the working directory for the new image
RUN mkdir -p ${APPDIR}
WORKDIR ${APPDIR}

# Copy files from the base image over to our new image's working directory
COPY --from=build /code .

# Start the server for Next.js using Node.js
EXPOSE 3001
CMD [ "npm", "start" ]
