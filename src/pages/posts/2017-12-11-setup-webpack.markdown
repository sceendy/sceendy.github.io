---
title: "JS tutorial #3 - setup webpack"
date: 2017-12-11 10:46:00
tags: ['dev', 'tutorial', 'javascript']
comments: true
---

Okay, so you've checked out my last two tutorials to learn JavaScript. As you start to feel more comfortable with JavaScript, you probably want to start looking into setting up your development environment. 

 A good place to start is by looking into tools that allow you to build faster and better. A key part of that is automating common transformations to your (preprocessed) code such as minifying (compressing code from the original size to the smallest size) and compiling (i.e. TypeScript to JavaScript).

[Webpack](https://webpack.js.org/concepts/) is a powerful tool that compiles the JavaScript modules in your projects. There are plenty of [loaders](https://webpack.js.org/concepts/#loaders) available to make common transformations to your code such as compiling Sass to CSS or transpiling your JavaScript files using Babel. 

#### Overview

In this tutorial, we will go through setting a base/starting point for projects that uses Sass and ES2015+. Grab the code from my [simple-starter project repo](https://github.com/sceendy/simple-starter).


* Add dependency management
* Install Webpack + loaders
* Write configurations files
* Serve web app locally

Start by adding a new folder called **simple-starter** and go ahead and jump into it: <span class="code-inline">$ mkdir simple-starter</span>.

#### Dependency Management: Yarn

To get started, we are going to want to be able to manage the different loaders we will be installing. You may have heard of <a href="https://www.npmjs.com/" rel="noopener" title="NPM official website" target="_blank">NPM </a> as it's the largest software registry in the world. For this tutorial, I want to introduce you to a newer package manager that installs over npm and replaces it in your terminal.

<a href="https://yarnpkg.com/en/" rel="noopener" title="Yarn official website" target="_blank">Yarn</a> is a newer package manager that you can use similar to NPM to manage things on your project such as Webpack and its' loaders. While you could just use NPM, I do have a preference towards Yarn lately. 

For example, it allows me to create a project **offline** and still be able to install npm packages as long as I've installed them in the past. Also, when working with others, the **lockfile format** helps ensure that if the packages are working in your local project, they work the same on everyone elses' systems.

There are [different forms of installing Yarn](https://yarnpkg.com/en/docs/install) depending on your operating system. Once you have it installed, you can just run <span class="code-inline">yarn init</span> in your project. You'll answer a few questions related to your project and then it'll generate your **package.json** file. This file contains information about your project including dependencies and scripts which we will add later.

#### Install Webpack + Loaders

There are several packages needed to setup our webpack configuration and I'll explain what each does as we add it. For now, just run the command (below) to add Webpack and useful loaders and plugins to our "simpler-starter" project.

```
$ yarn add webpack sass-loader css-loader babel-loader babel-core extract-text-webpack-plugin html-webpack-plugin node-sass rimraf style-loader uglifyjs-webpack-plugin webpack-dev-server compression-webpack-plugin -D
```

So, now, we have our project dependencies all installed and locked onto our project.

#### App Structure

Next, we want to create a basic file structure for our app. The root directory, **simple-starter**, will store all the source code in a folder called **src** that contains styles and JavaScript. Create a **scss** folder where you can add your **_styles.scss** file. For your JavaScript, create a **js** folder that holds an **index.js** file. Then, create an index page for our markup <span class="code-inline">index.html</span>. 

We also need to add two configuration files for WebPack. The first one will be used as default and named **webpack.config.js**. For our production configuration, we need a file called **webpack.prod.config.js** that will contain tasks such as minifying our files for production.

So, it should look like this by now:

```
  - /simple-starter

  -- /src
  
  --- /js

  ---- index.js

  --- /scss
  
  ---- _styles.scss
  
  --- index.html
  
  -- webpack.config.js

  -- webpack.prod.config.js

  -- package.json
```

#### Development build configuration

By default, when you run webpack, it reads the **webpack.config.js** file. This is where we will add our configurations.

There are a few basic modules we need to make accessible to the file first. The **path** module is super useful as it makes it easy to work with files and directory paths. You also need to add **webpack** to make use of some of its' plugins. Finally, you'll want to include the **html-webpack-plugin** to create the HTML files you will serve your webpack bundles.

```` js
/* webpack.config.js, Lines 1-3 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
````

This file will be used for both the dev and prod enviornments. Environment variables are supported for Node projects out of the box and come in handy here so that we can set certain configuration properties according to which environment we need. Line 5 checks to see if you included <span class="code-inline">NODE_ENV</span> and if you did it, it uses the variable; if not, the default value is <span class="code-inline">dev</span>.

```` js
/* webpack.config.js, Lines 5 */
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';
// Later, you'll want to create a webpack.dev.config.js file to separate concerns
// Let's keep it simple for now, though
````

Cool, now we have the necessary modules and know which environment to build for. Let's setup some configs! 

For a quick setup, we can use the single entry syntax to set the <span class="code-inline">entry</span> to be our **index.js** file that we created in our JS folder. This is the entry point for the application. For the <span class="code-inline">output</span> property, the filename will be a unique name + hash since it works well for common uses. Then, we want these files to be generated in a new folder in our root directory called **/dist**. 

```` js
/* webpack.config.js, Lines 6-18 */
module.exports  = {
  entry: './src/js/index',
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '/dist')
  },
  devtool: env === 'prod' ? false : 'source-map', // disable for prod
  devServer: {
    contentBase: './dist', // use contents of /dist for the server
    open: true,
    inline: true,
    historyApiFallback: true
  },
````

Now we can include our loaders and specify what we want them to do to specific types of files. For example, our babel-loader will be taking our files that have the .js or .jsx extensions.

```` js
/* webpack.config.js, Lines 16-42 */
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
````

Plugins are different from loaders as you have to pass a new instance when adding them to your plugins list. For instance, we want to make use of webpacks' hot module replacement plugin to see our changes immediately as we make them so we create an new instance of the plugin as such: <span class="code-inline">new webpack.HotModuleReplacementPlugin()</span>. Plugins accept arguments that you can easily update when reusing this starting point such as the title that gets injected into your **index.html** file in line 46.

```` js
/* webpack.config.js, Lines 43-53 */
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Simple Starter',
      inject: 'body',
      template: path.join(__dirname, '/src/index.html')
    }),
    new webpack.ProgressPlugin()
  ]
}
````

Sweet! In your **index.html** file you can add the title in dynamically simply bu including:
````html
<title><%= htmlWebpackPlugin.options.title %></title>
````

#### Production build configuration

For production builds, uglifying JS and compressing files is pretty common so those are the plugins we want to include for a prod configuration. You'll want to import your default config and then <span class="code-inline">push</span> prod-specific plugins to the plugins array. 

```` js
/* webpack.prod.config.js */
const config = require('./webpack.config.js');
const webpack = require('webpack');

const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

config.plugins.push(
  new UglifyJsWebpackPlugin({
    sourceMap: true,
    uglifyOptions: {
      ie8: false,
      ecma: 5,
      compress: {
        warnings: false
      }
    }
  }),
  new CompressionWebpackPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|html|css)$/,
    threshold: 10240,
    minRatio: 0.8
  })
);

module.exports = config;
````

#### Scripts

With config files in place, you're now ready to start writing your application, right? Not quite - you need to write scripts that will run your configurations and serve your application, first. 

Keeping it pretty simple, you really only need two scripts at this point. The first one will be to start your dev environment where we use <span class="code-inline">webpack-dev-server</span> to serve the application and uses the options from your **webpack.config.js** file (Lines 12-18).

Lastly, we want to have a script to run that builds your prod folder (**/dist**). If you recall, we want to set an environment variable for this script <span class="code-inline">NODE_ENV=prod</span> and then tell Webpack to use the prod config file.

````js 
/* package.json */
"scripts": {
  "start": "webpack-dev-server",
  "build": "NODE_ENV=prod webpack --config webpack.prod.config.js"
}
````

Ready to start coding? Sweet, run
````
$ yarn start
````

When that's good to go, make a production build!

````
$ yarn build
````

View the prod build by opening the **dist/index.html** file or you can setup your server. I've thrown a simple one into the **simple-starer** repo if you want to try that too, though.

````
$ yarn serve
````

<hr />

I did write this up to get you started with setting up Webpack but there are a few things I didn't cover! Or perhaps didn't go that in-depth into. Luckily, Webpack has some great documentation! Learn more about the Webpack core concepts and configurations by checking out the <a href="https://webpack.js.org/concepts/" rel="noopener">Webpack docs</a> or taking the excellent <a href="https://webpack.academy/p/web-fundamentals" rel="noopener">Web Fundamentals course</a> provided by Sean Larkin.