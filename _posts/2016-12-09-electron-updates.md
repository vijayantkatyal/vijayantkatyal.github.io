---
layout:     post
title:      Automatic Updates for Electron based apps 
summary:    how to setup automatic updates for electron based apps (on windows platform) 
categories: electron
---

from past few months i'm working on a side project ([SVG bits](https://vijayantkatyal.com/svg-bits)). which is based on electron. 

i used Angular2 (Typescript) to create this project and used [electron-builder](https://github.com/electron-userland/electron-builder) to build my project and release it on github (to serve artifacts) (for windows and linux platform) using travis and appveyor.

and to serve Automatic Updates for the Windows Platform Version of the app (```linux version doesn't support automatic updates```) i used [electron-auto-updater](https://www.npmjs.com/package/electron-auto-updater).



* used Github to serve the artifacts (i.e. exe*, deb*)
* used travis (to build and release for linux)
* used appveyor (to build and release for windows)


**if you have an existing electron app or creating one. here is the steps you should follow to enable your app (on windows) for automatic updates.**

* update package.json

package.json
{: .code_title}
~~~ json
"name": "name_of_app",
"version": "0.1.0",
"scripts": {
	"release": "build"
},
"repository": "https://github.com/user_name/repo_name",
"devDependencies": {
	"electron-builder": "10.5.0"
},
"dependencies": {
	"electron-auto-updater": "0.6.2"
},
"build":{
	"appId": "app_id_here",
	"productName": "app description",
	"files":[
		"app/**/*",
		"node_modules/**/*",
		"package.json"
	],
	"linux":{
		"target":[
			"deb"
		]
	},
	"publish":{
		"provider": "github"
	},
	"win":{
		"publish":["github"],
		"remoteReleases": "https://github.com/user_name/repo_name"
	}
}
~~~
<br>

* run ``npm install`` and update your project to check for updates

renderer.js
{: .code_title}
~~~ js
const app = require('electron').remote.app;
const updater = require('electron').remote.require('electron-auto-updater');

console.log("current version: " + app.getVersion());

updater.autoUpdater.checkForUpdates();
updater.autoUpdater.addListener("update-available", function (event) {
    console.log("A new update is available");
});

updater.autoUpdater.addListener("update-not-available", function () {
    console.log("update-not-available");
});

updater.autoUpdater.addListener("update-downloaded", (event, releaseNotes, releaseName, releaseDate, updateURL) => {
    console.log("A new update is ready to install", `Version ${releaseName} is downloaded and will be automatically installed on Quit`);
    console.log("quitAndInstall");
    updater.autoUpdater.quitAndInstall();
    return true;
})
updater.autoUpdater.addListener("error", (error) => {
    console.log(error);
});
updater.autoUpdater.addListener("checking-for-update", (event) => {
    console.log("checking-for-update");
});
~~~
<br>

[Test]

now run

``npm run release``

to see if builds are created in dist folder (*if running command on windows, windows builds will be created.*)

* now to release and serve builds from your github repo (e.g. [see this](https://github.com/vijayantkatyal/Demo_electron_update/releases)), create account on [travis](travis-ci.org) for linux builds and [appveyor](appveyor.com) for windows builds (both are free if your repo is open source / public). and add your repo on both ci platform.
* add environment varaible ``GH_TOKEN`` and token value to both platform (can be [generated here](https://github.com/settings/tokens/new)).
* create config for both and add to your repo, (it helps ci to follow your instructions)

.travis.yml
{: .code_title}
~~~ yml
os:
  - linux

language: node_js
sudo: false
node_js: node

script:
  - npm run release
~~~

appveyor.yml
{: .code_title}
~~~ yml
version: 0.1.{build}

platform:
  - x64

cache:
  - node_modules
  - app\node_modules
  - '%APPDATA%\npm-cache'
  - '%USERPROFILE%\.electron'

init:
  - git config --global core.autocrlf input

install:
  - ps: Install-Product node 6 x64
  - git reset --hard HEAD
  - npm install npm -g
  - npm install electron-builder@next # force install next version to test electron-builder
  - npm install
  - npm prune

build_script:
  - node --version
  - npm --version
  - npm run release

test: off
~~~

<br>

> after pushing these changes to your repo, build will start on both travis and appveyor (log can be seen by going to their sites).
> 
> if build passed, you can see draft release on your repo generated with builds for both linux and windows and a file called ``latest.yml`` (which is used to check for new updates). (e.g. [releases](https://github.com/vijayantkatyal/Demo_electron_update/releases))
> 
> publish these release.


now to test if updates are working, update you ``package.json`` and increment ``version`` number and push commits and after build passed, new draf release will be created with new version number, publish this release. and any existing app running on old version see new version and will be updated automatically.

:-D    