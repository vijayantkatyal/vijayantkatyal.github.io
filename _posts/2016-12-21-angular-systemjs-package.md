---
layout:     post
title:      Bundle Angular2 App into package using systemjs
summary:    bundle angular2 module into a single file package using systemjs, useful for dependency injection.
categories: angular2
---

Assuming you already have an [Angular2](https://angular.io/) app which uses [systemjs](https://github.com/systemjs/systemjs) for loading modules.

> *for starting from scratch, you can clone this [repo](https://github.com/vijayantkatyal/Play_Angular) for minimal setup of Angular2 App.*

* update package.json

package.json
{: .code_title}
~~~ json

"devDependencies": {
	"grunt": "1.0.1",
	"grunt-systemjs-builder": "0.2.7"
}
~~~

<br>

* run npm install (to install these new packages)

* create build.config.js file in root of your app. (this tells systemjs builder which package to include in bundle file)

build.config.js
{: .code_title}
~~~ js
System.config({
    meta:{
        '@angular/*':{
            build: false
        },
        'rxjs/*': {
            build: false
        }
    },
    paths:{
        "dist/*": "./dist/*.js"
    }
});
~~~

<br>

* create Gruntfile.js in root of your app.

Gruntfile.js
{: .code_title}
~~~ js
module.exports = function (grunt) {
	grunt.initConfig({
		systemjs: {
			dist: {
				options: {
					sfx: true,
					baseURL: "./",
					configFile: "./build.config.js",
					minify: true,
					sourceMaps: false
				},
				files: [{
					"src": "./dist/main.js",
					"dest": "./build/main.js"
				}]
			},
			dev: {
				options: {
					sfx: true,
					baseURL: "./",
					configFile: "./build.config.js",
					minify: false,
					sourceMaps: true,
					build: {
						mangle: false
					}
				},
				files: [{
					"src": "./dist/main.js",
					"dest": "./build/dev.js"
				}]
			}
		}

	});

	grunt.loadNpmTasks('grunt-systemjs-builder');

	grunt.registerTask('build', ['systemjs']);
};
~~~

<br>

* update system.config.js file (system js configuration file)

system.config.js
{: .code_title}
~~~ js
// our app is within the app folder

// from bundle
app: 'build',

// from source
// app: 'dist',
~~~

<br>

> make sure [grunt cli](http://gruntjs.com/getting-started#installing-the-cli) is also installed globally

* to bundle run ``grunt build`` from powershell / terminal

* now compile and run your app, instead of multiple files (based on size of project) single bundled file will be loaded

this structure can be further used for dependency injection.