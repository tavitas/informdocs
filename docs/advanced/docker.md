---
id: docker
title: Docker
sidebar_label: Docker
---

import useBaseUrl from '@docusaurus/useBaseUrl';

https://www.docker.com

Both the Inform Data Portals and the Indicator Reporting Tool rely on docker to containerize the [application stack](setup#docker4drupal) (nginx, php, mysql etc.)

## What is Docker?

> Linked from https://herewecode.io/blog/a-beginners-guide-to-docker-how-to-create-your-first-docker-application/

Docker is free software that allows users to create independent and isolated environments to launch and deploy its applications. These environments are then called **containers**. Developers can then run these containers on any machine.

It may look like a virtual machine at first but the functionality is not the same.

Unlike Docker, a virtual machine will include a complete operating system. It will work independently and act like a computer.

Docker will only share the resources of the host machine in order to run its environments.

<img alt="Docker vs Virtual Machines" src={useBaseUrl('img/advanced/docker-vs-virtual-machines.png')} />

_Docker VS Virtual machines (Copyright to [Docker](https://www.docker.com/blog/containers-replacing-virtual-machines/) blog)_

#### Installation

> The below documentation is borrowed from the official docs installing the Docker Engine-Community (docker-ce) on Ubuntu 16.04 LTS https://docs.docker.com/install/linux/docker-ce/ubuntu/

#### 1. Update packages

```bash
sudo apt-get update
```

#### 2. Install packages to allow apt to use a repository over HTTPS:

```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

#### 3. Add Docker's official GPG key:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

#### 4. Use the following command to set up the stable repository

```bash
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

#### 5. Install Docker

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

#### 6. Test Installation

```bash
sudo docker run hello-world
```

### Terminology

#### Images

The file system and configuration of our application which are used to create containers

#### Containers

Running instances of Docker images — containers run the actual applications. A container includes an application and all of its dependencies. It shares the kernel with other containers, and runs as an isolated process in user space on the host OS

#### Docker Daemon

The background service running on the host that manages building, running and distributing Docker containers.

#### Docker client

The command line tool that allows the user to interact with the Docker daemon.

#### Docker Store

A registry of Docker images, where you can find trusted and enterprise ready containers, plugins, and Docker editions. You'll be using this later in this tutorial.

## Docker-Compose

Docker-Compose is a tool provided by Docker to manage several containers at the same time for the same application. This tool offers the same features as Docker but allows you to have more complex applications.

#### Installation

> https://docs.docker.com/compose/install/

#### 1. Run this command to download the current stable release of Docker Compose:

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

#### 2. Apply executable permissions to the binary:

```bash
sudo chmod +x /usr/local/bin/docker-compose
```

> Note: If the command docker-compose fails after installation, check your path. You can also create a symbolic link to /usr/bin or any other directory in your path.

```bash
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

#### 3. Test the installation

```bash
docker-compose --version
```
