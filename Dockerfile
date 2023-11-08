# Use a Node.js version compatible with your next package requirements
FROM node:18-alpine

# Create app directory and set permissions
RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app

# Copy project files into the app directory
COPY --chown=node:node . .

# Switch to non-root user 'node'
USER node

# Install app dependencies using npm
RUN npm ci --only=production

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD [ "npm", "start" ]
