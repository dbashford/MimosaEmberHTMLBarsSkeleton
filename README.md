MimosaEmberHTMLBarsSkeleton
===================

A skeleton for Ember apps which includes HTMLBars compilation, testing support and the ability to optimize/minify/concatenate/package your application for deployment.

This is currently an Ember 1.10 app.

## Setup
* `npm install -g mimosa`
* git clone https://github.com/dbashford/MimosaEmberHTMLBarsSkeleton/
* cd MimosaEmberHTMLBarsSkeleton
* `npm install`
* `mimosa bower` - when doing this for the first time, all the Mimosa modules not already resident in Mimosa will be pulled into your project, then all the bower-ized assets will be brought in.

## To Develop
* `mimosa watch -s`,
* Open app at http://localhost:3000

## To Build with CI tests
* `mimosa build`

## To Run Tests Interactively
* `mimosa testscript` generates a platform specific test script.
* `mimosa watch` to compile assets and build test assets
* (In 2nd terminal window) `./test.sh`
* You also have the option to run tests while you develop by setting   `emberTest.executeDuringWatch` to `true` in the `mimosa-config.js`

## To Package App for Deployment
* `mimosa build -omp` (optimize, minify, package)
* cd `dist`
* `node app.js`
* Open app at [http://localhost:3000](http://localhost:3000)
* This is a fully optimized/concatenated app