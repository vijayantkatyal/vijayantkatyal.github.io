---
layout:     post
title:      Setup Tensorflow on Windows using Docker
summary:    steps to getting starting with Tensorflow on windows and making awesome stuff
categories: tensorflow docker
---

<!-- 
	Truth:
	Vision is important in life, it's the only thing will give you focus not money.
	from last few years i was struggling for the focus and faith required to make something useful for people.
	now, i think i got the solution (and already have my logic clear - i think).
	start wokring on your dream now (to make knowledge accessible to everyone),
	and i think AI is the tool to make this possible.
-->

<img src="/assets/images/kitematic_tensorflow.PNG" alt="Tensorflow installed in docker (kitematic)" class="img-fluid">

<br>
Just Started working on a project which use libraries including Tensorflow.

here are the steps to use Tensorflow on Windows (using Docker).

* download and install Docker. see [this post](/blog/docker-setup.html) for setting up and [this post](/blog/category/docker) for related posts on docker and common issues.
* (optional) download and setup [kitematic](https://github.com/docker/kitematic/releases)
* (optional) install this image [tensorflow/tensorflow](https://store.docker.com/community/images/tensorflow/tensorflow)

* to run tensorflow

```docker run -it -p 8888:8888 tensorflow/tensorflow```

* (optional) to mount a folder to tensorflow container, got to folder and run powershell command in that directory

```docker run -it -p 8888:8888 -p 6006:6006 -v "$(pwd):/home" tensorflow/tensorflow```

in case image is not downloaded previously(from terminal or kitematic), image will be downloaded automatically

where ```pwd``` is current current directory path and ```home``` is your mount point (can be any name)

note: make sure docker has permission to access drive. [see post](/blog/docker-setup.html) to mount drive.

* this will start the conainter, just go to localhost:8888 to access the web ui.

<hr>

##### Access bash, to run commands / program

(make sure to close existing conainer, like above one)


<img src="/assets/images/bash_tensorflow.PNG" alt="Tensorflow bash access in docker" class="img-fluid">



* start container ```docker start -i <conainer_name>```
* now to access the container, have to start bash. run

```docker exec -it <name_or_id> bash```

```name or id``` is container name or id (see kitematic or run ```doker ps```) to see name/id of container.

now you can run all linux commands to access files, programs in the container.

e.g. 

```ls``` to list all files and folders in current directory

```cd ..``` to go to parent directory.

```python <file_name>.py``` to run python program


<hr>

**common issues:**

* scripts (specifically bash scripts) edited with windows have to fixed for encoding issue. run ```sed -i 's/\r$//' filename``` to fix encoding issue

**reference**

[https://github.com/tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)

[https://github.com/tensorflow/tensorflow/blob/master/tensorflow/tools/docker/README.md](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/tools/docker/README.md)

[https://hub.docker.com/r/tensorflow/tensorflow/](https://hub.docker.com/r/tensorflow/tensorflow/)