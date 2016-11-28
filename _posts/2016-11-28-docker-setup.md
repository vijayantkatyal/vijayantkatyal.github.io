---
layout:     post
title:      Docker Setup on windows
summary:    docker Setup on windows and common installation issues.
categories: docker
---

recently i installed docker on windows. i need to manage this blog but don't want any complexity (e.g. installed ruby, setting up dependencies).

first i installed [docker](https://www.docker.com/).

**some issues in running docker:**

* The running command stopped because the preference variable "ErrorActionPreference" or common parameter is set to Stop <br><br> **solution:** unintall docker and restart the system, then again install docker

* Docker fails to start - MobyLinuxVM.vhdx already exists, unable to create MobyLinuxVM <br><br> **solution:** [reference](https://github.com/docker/for-win/issues/67#issuecomment-245837060)
	* exit the application
	* Stop-Service com.docker.service
	* cd 'C:\Program Files\Docker\Docker\resources'
	* .\MobyLinux.ps1 -Destroy
	* check that the VHDX file (C:\Users\Public\Public Documents\Hyper-	V\Virtual hard disks\MobyLinuxVM.vhdx) is removed
	* .\MobyLinux.ps1 -Create
 
---
**now docker running as expected.**
<br><br>

> **next**:
> 
> setting up blog in docker (*blog is based on jekyll and hosted on github*)

* download [Kitematic](https://github.com/docker/kitematic/releases)<br>
* install this image [starefosson/github-pages](https://store.docker.com/community/images/starefossen/github-pages)<br>
* mount hard drive (e.g. C:/ where your repo exists) from docker settings -> Shared Drives and select the drive and apply. (*tip: use full username e.g. WORKGROUP/Name of User*)
* now go to your blog repository and run (in powershell): <br>

~~~ powershell
docker run -v "$(pwd):/usr/src/app" -p "4000:4000" starefossen/github-pages
~~~
<br>
this will create a new cotainer and mount current directory (blog) to /usr/src/app which use to serve blog on localhost:4000

<br>
now you can rename the new container (e.g. blog) and run it via powershell after starting the docker.

~~~ powershell
docker start -i blog
~~~