FROM node:14-alpine
 
# create the working directory (folder) for our application, this is where our files will live
WORKDIR /app

COPY cert.pem ./

COPY key.pem ./
 
# copy root package.json and package-lock.json to the working directory
COPY package*.json ./
 
# copy client package.json and package-lock.json to the working directory
COPY client/package*.json client/
 
# install client dependencies required for prod
RUN npm run install-client --omit=dev
 
# copy server package.json and package-lock.json to the working directory
COPY server/package*.json server/
 
# install server dependencies required for prod
RUN npm run install-server --omit=dev
 
# copy the entire client folder
COPY client/ client/
 
# build frontend client
RUN npm run build --prefix client
 
# copy the entire server folder
COPY server/ server/
 
# set user to node (default set to root which leaves our app more exposed)
USER node
 
# what to do when this docker container starts up
CMD ["npm", "start", "--prefix", "server"]
 
# expose port we're using to the internet
EXPOSE 8000
