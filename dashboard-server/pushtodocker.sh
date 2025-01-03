#!/usr/bin/env bash

IMAGENAME="ghcr.io/openconext/openconext-dashboard/dashboard-server"
VERSION=13.0.0

mvn clean install -DskipTests
docker build --tag ${IMAGENAME}:${VERSION} -f docker/Dockerfile .

# Push to registry
docker tag ${IMAGENAME}:${VERSION} $(hostname -f)/${IMAGENAME}:${VERSION}
docker push $(hostname -f)/${IMAGENAME}:${VERSION}
