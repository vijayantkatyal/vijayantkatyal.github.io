---
layout:     post
title:      Dual Boot Windows 10 and Ubuntu 18.10
date:       2019-01-04 02:10
summary:    how to setup new computer with two Operating Systems - Windows 10 and Ubuntu 18.10
categories: ubuntu windows
---

Recently i installed both Operating systems windows 10 and Ubuntu 18.10 on my home computer and thought someone like me who needs two systems on their machine can benefits from steps on how to do dual boot.



#### Why need both ?

for me personally i prefer my software development work on Ubuntu. the command line / terminal use is awesome and i personally like look and feel of new Gnome and customisation it gives.  it feels natural not forced to do development on Linux based system where are tools git, ssh, npm, angular, tensorflow are all natively supported on Ubuntu and in fact supposed to be running on a Linux based server in the end.

on windows i enjoy using apps like Adobe XD, Adobe Illustrator for design part / make prototypes, for video editing and using apps like Netflix and games which are not yet available on Ubuntu. i know there are alternatives like inkscape, gimp or gravit designer and some apps for video editing too.



#### What we need

* i'm assuming you have a blank hdd (hard disk) and a machine which support both systems minimum requirements. check here for more info for <a href="https://www.ubuntu.com/download/desktop">Ubuntu</a> and <a href="https://www.microsoft.com/en-in/windows/windows-10-specifications">Windows 10</a>
* iso images for both Ubuntu 18.10 (<a href="https://www.ubuntu.com/download/desktop">Download</a>) and Windows 10 (<a href="https://www.microsoft.com/en-in/software-download/windows10ISO">Download</a>)
* two USB pen drive (one of them of size at least 8 GB, other one of at least 2 GB)
* a pc with windows 7 or 10 pre installed installed (to create bootable drives)
* <a href="https://github.com/pbatard/rufus">Rufus</a> for creating bootable pen drives



#### Steps to create bootable pen drives (Ubuntu or Windows 10)

* open Rufus 
 <br>
 <br>
 ![rufus_en](/assets/images/posts/rufus_en-1546696116040.png)
 <br>
 <br>

* Select attached USB pen drive as Device.

* in boot selection: select your ubuntu iso image (to create ubuntu bootable drive) or windows iso file (to create windows 10 bootable drive)

* in partition scheme (i recommend UEFI if your system supports it) see it's <a href="https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface#Advantages">Advantages</a>

* click **START** to create your Ubuntu or windows bootable drive.

#### Steps to install Ubuntu on your machine (do this first for dual boot)

* restart your machine with Ubuntu bootable drive attached (we just created).

* press F8 / DEL / F2 / F9 to see bios settings or boot order.

  * ensure UEFI is enabled (if you want to use UEFI partition system)

* select pen drive which has Ubuntu in it.

* Ubuntu Setup will be booted on your system

* select **Install Ubuntu**

* ignore updates
 <br><br>
 ![1_9sGCulW4tcIb_DVCKe6Jnw](/assets/images/posts/1_9sGCulW4tcIb_DVCKe6Jnw.png)
 <br><br>

* select **something else**

* create new partition (of your preferred size) and of type **ext4** and mount it as **/**

* click **Install Now**

* enter your language, keyboard, user details and password.

* once installation is over, restart the system.

#### Steps to install Windows 10 on your machine

* restart your machine with Windows bootable drive attached (we just created).
* press F8 / DEL / F2 / F9 to see bios settings or boot order.
  - ensure UEFI is enabled (if you want to use UEFI partition system)
* select pen drive which has Windows in it.
* Windows Setup will be booted on your system
* select your language, time and currency format and keyboard.
* click **Install Now**
* in Activate Windows screen, enter product key or click "i don't have product key".
* accept license terms and continue
* in type of installation, select **Custom Installation**
* create new partition of your preferred size of type ntfs.
* select that created partition and click next.
* when done, your sytem will restart and boot into setting up your windows 10.
* enter keyboard, user details etc to continue.



**References**:

* <a href="https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop">https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop</a>









