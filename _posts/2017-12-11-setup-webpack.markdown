---
layout: post
title:  "JS tutorial #3 - setup webpack!"
date:   2017-12-11 10:46:00
tags: ['dev', 'tutorial', 'intermediate js']
comments: true
---

As you start to feel more comfortable with JavaScript, you probably want to start looking into setting up your development environment. You'll want to be able to manage dependencies and make use of tools that allow you to build faster and better. This should definitely include automating common transformations to your (preprocessed) code such as minifying (compression code from the original size to the smallest size) and compiling (TypeScript to JavaScript).

[Webpack](https://webpack.js.org/concepts/) is a powerful tool that compiles your JavaScript modules. There are many [loaders](https://webpack.js.org/concepts/#loaders) available to make transformations to your code such as compiling Sass to CSS or transpiling your JavaScript files using Babel. 

#### Overview

In this tutorial, we will go through setting up your development and producation configuration files for a project that uses Sass and ES2015+. 

* Install/Use Yarn for dependency management
* Install Webpack + Loaders
* Create configurations files
* Serve web app locally
* Create production build

_Note: You can learn more about the Webpack core concepts and configurations by checking out the <a href="https://webpack.js.org/concepts/" rel="noopener">Webpack docs</a> or taking the excellent <a href="https://webpack.academy/p/web-fundamentals" rel="noopener">Web Fundamentals course</a> provided by Sean Larkin._

#### Dependency Management: Yarn

Yarn is a tool that you will be using to manage the different packages on your project such as Webpack and its' loaders. While you could just use NPM, I do have a preference towards Yarn lately. For example, it allows me to create a project **offline** and still be able to install npm packages as long as I've installed them in the past. Also, when working with others, the **lockfile format** helps ensure that if your packages are working in the project, they work the same on everyone elses' systems.

There are [different forms of installing Yarn](https://yarnpkg.com/en/docs/install) depending on your operating system. Once you have it installed, you can just run <span class="code-inline">yarn init</span> in your project. You'll answer a few questions related to your project and then it'll be saved to your <span class="code-inline">package.json</span> file. 


#### Install Webpack + Loaders

We will be using several packages to setup our webpack configuration and I'll explain what each does as we add it. For now, just run the command (below) to add Webpack and useful loaders and plugins to our "simpler-starter" project.

`$ yarn add webpack sass-loader css-loader babel-loader babel-core extract-text-webpack-plugin html-webpack-plugin node-sass rimraf style-loader uglifyjs-webpack-plugin webpack-dev-server compression-webpack-plugin -D`

So, now, we have our project dependencies all installed and locked onto our project.

#### App Structure

```
  - /simple-starter

  -- /src
  
  --- /styles

  --- /scripts
  
  --- index.html

  -- package.json
```





#### Create development build configuration

(Uglify for ES5, babel-minify or uglify-es for ES2015)


## >> webpack-dev-server

### >>> setting up scripts (build, start:dev, prod)

#### Create production build configuration

## >> loaders (uglifying, minifying, etc)

# > LINK TO simple-web-starter REPO