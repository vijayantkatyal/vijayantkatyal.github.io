---
layout:     post
title:      Docker Virtualization Issue
summary:    solution for issue > Hardware assisted virtualization and data execution protection must be enabled in BIOS
categories: docker
---

been using Docker on Windows for some time then last week an error occurred saying

**```Hardware assisted virtualization and data execution protection must be enabled in BIOS```**

<img src="/assets/images/docker_bios.PNG" alt="Hardware assisted virtualization and data execution protection must be enabled in BIOS" class="img-fluid">

here are the steps i followed to resolve this issue:

* first make sure Virtualization is enabled in BIOS.

* if enabled in BIOS, then there is issue with Windows settings or Registry.
* uninstall Hyper-V form Windows Features (using Turn Windows features on and off), Restart, and Install Hyper-V again using Windows Features (using Turn Windows features on and off).

Restart and it will work as expected.

Reference:

* [http://stackoverflow.com/questions/39684974/docker-for-windows-error-hardware-assisted-virtualization-and-data-execution-p](http://stackoverflow.com/questions/39684974/docker-for-windows-error-hardware-assisted-virtualization-and-data-execution-p)

* [http://stackoverflow.com/questions/33552810/virtualbox-virtualization-is-enabled-but-not-working](http://stackoverflow.com/questions/33552810/virtualbox-virtualization-is-enabled-but-not-working)