## Setup

### For Development Environment

1. Build Image
   `docker build -f Dockerfile.dev -t dsinecos/debug-config-docker .`

2. Run container
   `docker run -it -v /usr/app/node_modules -v $(pwd):/usr/app -p 3000:3000 --name=debug-config-docker dsinecos/debug-config-docker`

3. Run container in debug mode
   `docker run -it -v /usr/app/node_modules -v $(pwd):/usr/app -p 3000:3000 -p 9229:9229 --name=debug-config-docker dsinecos/debug-config-docker`

4. Run a shell process inside the container
   - Open another terminal
   - `docker exec -it debug-config-docker sh`

### Run tests

1. Run a shell process inside the container
   - Open another terminal
   - `docker exec -it debug-config-docker npm run tests`
