FROM mcr.microsoft.com/devcontainers/ruby:3.3

RUN mkdir /workspace
WORKDIR /workspace


# Use a base image with Python
# FROM postgres:15.2-alpine

RUN mkdir /workspace
WORKDIR /workspace

# Copy application files
COPY README.md .
