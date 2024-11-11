#!/usr/bin/env bash

IMAGENAME="ghcr.io/openconext/openconext-dashboard/dashboard-gui"
VERSION=12.3.18.1

mvn clean install
docker build --tag ${IMAGENAME}:${VERSION} -f docker/Dockerfile .

# Push to registry
docker tag ${IMAGENAME}:${VERSION} $(hostname -f)/${IMAGENAME}:${VERSION}
docker push $(hostname -f)/${IMAGENAME}:${VERSION}
