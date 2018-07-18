# Venue Local Proxy

## About

This is the code leveraged for the reverse proxy configuration of venue server/client so as to avoid any CORS requirements. Note that it is not part of the build process so changes must be build and pushed to docker hub locally. In short, we do not expect this configuration to change much in the near future. As we begin to roll out the microservices, this code may be abstracted into its own build process.

# Usage

In some cases, you may want to change some of the configuration. For example you may have something else running locally on port 80.

To build:

```
docker build -t venue-local-proxy .
```

You can then run the proxy as such (keeping in mind the port mapping if you changed it):
```
docker run -p 80:80 --net="host" venue-local-proxy
```