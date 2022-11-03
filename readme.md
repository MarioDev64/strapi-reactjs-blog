1. [**frontend**](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate/tree/master/frontend): Next.js application
2. [**backend**](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate/tree/master/backend): Dockerized Strapi application

- [Overview](#overview)
- [Requirements](#requirements)
- [Packages](#packages)
  - [1. **Frontend**: React.js application](#1-frontend-reactjs-application)
  - [2. **Backend**: Strapi application](#2-backend-strapi-application)
- [Installation](#installation)
  - [1. **Clone the application**](#1-clone-the-application)
  - [2. **Install necessary dependencies for the frontend application**](#2-install-necessary-dependencies-for-the-frontend-application)
  - [3. **Start the frontend application**](#3-start-the-frontend-application)
  - [4. **Go inside the directory of the backend package on another terminal window**](#4-go-inside-the-directory-of-the-backend-package-on-another-terminal-window)
  - [Frontend application](#frontend-application)
  - [Backend application](#backend-application)

## Overview

This blog is built using the following technologies:

1. [Chakra UI](https://chakra-ui.com/)
2. [Emotion](https://emotion.sh/)
3. [GraphQL](https://graphql.org/)
4. [Apollo](https://www.apollographql.com/)

It supports GraphQL Query and Mutation out of the box.

## Requirements
1. [Node.js](https://nodejs.org/)
2. [npm](https://www.npmjs.com/)

## Packages

### 1. [**Frontend**](https://github.com/MarioDev64/strapi-reactjs-blog/tree/main/frontend): React.js application

This application is the primary user-facing application. Once it’s up and running (see Development section), it’s available on http://localhost:3000/.

### 2. [**Backend**](https://github.com/MarioDev64/strapi-reactjs-blog/tree/main/backend): Strapi application

[Strapi](https://strapi.io/) is the leading open-source headless CMS. It’s 100% Javascript, fully customizable and developer-first.

## Installation

### 1. **Clone the application**

```sh
git clone https://github.com/MarioDev64/strapi-reactjs-blog
```

### 2. **Install necessary dependencies for the frontend application**

```sh
cd frontend && yarn install
```

### 3. **Start the frontend application**

From the frontend directory, we can run the following command to start our React.js frontend application:

```sh
yarn start
```

The above command will start the frontend application on [http://localhost:3000/](http://localhost:3000).

### 4. **Go inside the directory of the backend package on another terminal window and install necessary dependencies**

```sh
cd backend && yarn install
```

### 4. **Start the backend applicationw**

```sh
yarn develop
```

The above command will start the backend application on [http://localhost:1337/](http://localhost:1337).

### 5. **Configure Strapi**

a. Allow permissions for necessary operations on the [Feed] content-type for Public users.
![a](https://user-images.githubusercontent.com/18682719/199849622-2336de70-8034-42e2-ac84-826668d50c8a.png)

b. Allow permissions for necessary operations on the [Category] content-type for Public users.
![b](https://user-images.githubusercontent.com/18682719/199849860-fdf4d3fb-6708-4417-9d7b-b7f1066e85a4.png)

## Thanks for read.
We're still working on it.
