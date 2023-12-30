#!/bin/bash

# Generate modules
nest generate module auth
nest generate module gaming
nest generate module inventory
nest generate module user
nest generate module admin

# Generate controllers for each module
nest generate controller auth --no-spec
nest generate controller gaming --no-spec
nest generate controller inventory --no-spec
nest generate controller user --no-spec
nest generate controller admin --no-spec

# Generate services for each module
nest generate service auth --no-spec
nest generate service gaming --no-spec
nest generate service inventory --no-spec
nest generate service user --no-spec
nest generate service admin --no-spec

# Generate entities for relevant modules (assuming using TypeORM)
nest generate entity admin --no-spec
nest generate entity user --no-spec
nest generate entity gaming --no-spec
nest generate entity inventory --no-spec
