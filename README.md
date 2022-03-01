# flask-reactize

[![PyPI version](https://badge.fury.io/py/flask-reactize.svg)](https://badge.fury.io/py/flask-reactize)

## Purpose

Developing a ReactJS application requires to use nodejs as back end server.
What if you want to consume external APIs: how are you going to handle cross origin calls?
What if you want to secure your application and APIs easily?

In modern days, as we are now, [React JS](https://reactjs.org/) offers many nice functionalities to develop an application easily, from any IDE.

In development mode, [React JS](https://reactjs.org/) requires [NodeJS](https://nodejs.org/en/) as a back end server. [NodeJS](https://nodejs.org/en/) maintains a connection between your development environment and your browser where the application is loaded so that:

* it refreshes automatically when an update is made,
* it sends in real time any error, warning that may have, in both the console and the developers toolbar of your browser of choice.

For production, you can compile your [React JS](https://reactjs.org/) application into static assets - you can then use any technology to serve those static files.

However, if your [React JS](https://reactjs.org/) calls external APIs (whether there are customs, or public) you will face security issues.

In addition, if your APIs require to be logged in, this is not going to be easy to implement.

## What does *flask-reactize* do?

*flask-reactize* is a boostrap to serve any [React JS](https://reactjs.org/) via a Python back-end, using [Flask](https://flask.palletsprojects.com/en/2.0.x/) as web framework. 

Your back-end web server can be anything: [Flask](https://flask.palletsprojects.com/en/2.0.x/) itself (Although not recommended for production), [Uvicorn](https://www.uvicorn.org/), [Gunicorn](https://gunicorn.org/) etc.

In a nutshell, *flask-reactize* is a proxy for your [React JS](https://reactjs.org/) application and for your APIs.

### Features list

* It has a development mode: a nodejs server is transparently started by the Python back-end,
* It supports production mode: this back-end can also serve your static assets,
* It supports hot reload while developing: changing the Python code or the React code will trigger a browser refresh,
* It supports proxying multiple APIs via a specific route name.

## What you will find in this repo

* Under *src/flask-reactize* you will find the Python module (also available via [PyPi](https://pypi.org/project/flask-reactize/)). [More info](./src/flask-reactize/README.md)
* Under *sample/* you will find a simple demo site built with [React JS](https://reactjs.org/) using *flask-reactize*. [More info on how to use it](./sample/README.md).
* Two *DockerFile* for Python 3.8 and Python 3.10. To run them, 

## Sample site: the short way using Docker

You want to try out quickly *flask-reactize*, follow the steps below:

1. Ensure you have [vscode](https://code.visualstudio.com/) installed because you are going to use [DevContainers](https://code.visualstudio.com/docs/remote/containers) to have all prerequisites without any hassle. It is free and great!
2. Once [vscode](https://code.visualstudio.com/) is installed, install the extension [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack).
3. Install [docker](https://www.docker.com/) if you do not already have it.

You are now ready!

In your favorite terminal (on Windows, [WSL](https://docs.microsoft.com/en-us/windows/wsl/about)) run the following commands:

```bash
# Clone the project
/> cd "wherever you want to work"
/> git clone https://github.com/jchomarat/flask-reactize
/> cd flask-reactize

# Open vscode
/> code .
```

Once in [vscode](https://code.visualstudio.com/), open the Palette (Ctrl+Shift+P / Cmd+Shift+P) and select the action *Remote-Containers: Reopen in container*. You can now grab a coffee while the container builds.

When the container is built, your [vscode](https://code.visualstudio.com/) is fully operational. If you open the terminal built in [vscode](https://code.visualstudio.com/), you will be prompted directly inside the container, as a "dummy" user called *alex*.

You can now build the *flask-reactize* image. In the terminal (the one in vscode), run the following commands:


```bash
/> make docker-build-sample-py38 # for python 3.8
# or
/> make docker-build-sample-py310 # for python 3.10
# 'make' allows to call bash scripts/commands easily via actions

# When the command above has executed, run
/> make docker-run-sample
```

> If running the commands above result in an access is denied for the file `/var/run/docker.sock`, ensure that your user is the owner of this file. If it is not the case, run

```bash
# Assume your dev container's user is alex
/> sudo chown alex:alex /var/run/docker.sock
```

You can now open your browser and load the url [http://localhost:8080](http://localhost:8080)

## Sample site: the long way

Ok, you want to do everything by yourself, no worries I got you covered!

**Please note** that you need to be on a *nix system for that, whether you are on Linux, Mac or Windows with [WSL](https://docs.microsoft.com/en-us/windows/wsl/about)

Instructions to follow can be found [here](./src/flask-reactize/README.md)!

## Deploy to Azure

Either way, both methods can be deployed to Azure

1. Using [Web App for Containers](https://docs.microsoft.com/en-us/azure/app-service/quickstart-custom-container?tabs=dotnet&pivots=container-linux),
2. Using a [Web App](https://docs.microsoft.com/en-US/azure/app-service/quickstart-python?tabs=flask%2Cwindows%2Cazure-portal%2Cterminal-bash%2Cvscode-deploy%2Cdeploy-instructions-azportal%2Cdeploy-instructions-zip-azcli),
3. Using [Azure Kubernetes Service](https://azure.microsoft.com/en-us/services/kubernetes-service/#overview) in a multi-scalable containers scenario.
