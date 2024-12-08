# Use the official Node.js 18 LTS as the base image
FROM node:18-alpine

# Set the working directory in the container
# WORKDIR /usr/src/app
WORKDIR ./app

# Copy the application code into the container
COPY . .

# Expose the port the application runs on
EXPOSE 3000

# Define the command to run your app
CMD ["node", "index.js"]
