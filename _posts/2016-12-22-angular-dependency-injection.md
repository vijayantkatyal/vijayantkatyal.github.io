---
layout:     post
title:      Angular2 Dependency Injection using systemjs
summary:    use dependency injection in Angular2 app using systemjs and bundled / minified packages
categories: angular2
---

* Create a Angular2 module / package and bundle it into single file.

> see [post](https://vijayantkatyal.com/blog/angular-systemjs-package.html) on how to create bundled modules in angular2.<br>
> or [clone](https://github.com/vijayantkatyal/Play_Angular/tree/package) this minimal module setup to create bundle package.

*for loading your package we can use local file path (e.g. ./packages) or hosted package (e.g. htttp://localhost/package_server)*

* create package folder into root of app. and paste bundle files of package e.g. dev.js and main.js and rename the files to package_name.js and package_name.dev.js

* if your package contain component, add it to routes of main app.

routes.ts
{: .code_title}
~~~ ts
{
	path: 'package',
	loadChildren: 'package/package_name'
}
~~~

<br>

* add link of new package component

main.html
{: .code_title}
~~~ html
<a routerLink="/package">package</a>
~~~

<br>

* update system.config.js (add package path)

system.config.js
{: .code_title}
~~~ js
packages: {
	// for un minified package
	// 'package/app.package':{
	//   main: './main.js',
	//   defaultExtension: 'js'
	// },
	// for minified package
	// package_folder/package_name
	'package/package_name':{
		defaultExtension: 'js'
	}
},
~~~

<br>

build and run your app, now package will load on demand (when you click the route for that package)

> clone this [repo](https://github.com/vijayantkatyal/Play_Angular) for demo (app and package).