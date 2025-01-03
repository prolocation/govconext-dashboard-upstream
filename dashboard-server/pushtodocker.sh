#!/usr/bin/env bash

IMAGENAME="ghcr.io/openconext/openconext-invite/dashboard-server"

mvn clean install -DskipTests
docker build --tag ${IMAGENAME} -f docker/Dockerfile .
