---
layout:     post
title:      Using Java in Command Line When Android Studio is Already Installed
summary:    How to Use Java in Terminal
categories: java android
---

if you have android studio already installed in Your Windows Machine, you can use java and javac (for compiling and running java) without installing anything else (like JDK Environment).

<br>

#### here are the steps:

<br>
* open Computer Properties
<br><br>
<img src="/assets/images/path_setup/computer_properties.PNG" alt="" class="img-fluid">
<br><br>
* click Advanced Settings
<br><br>
<img src="/assets/images/path_setup/advanced_settings.PNG" alt="" class="img-fluid">
<br><br>
* click Environment Variables
<br><br>
<img src="/assets/images/path_setup/environment_variables.PNG" alt="" class="img-fluid">
<br><br>
* Select Path and Click Edit
<br><br>
<img src="/assets/images/path_setup/select_path_and_ click_edit.PNG" alt="" class="img-fluid">
<br><br>
* click new and paste ```C:\Program Files\Android\Android Studio\jre\bin``` and click Ok.
<br><br>
<img src="/assets/images/path_setup/save_new_path.PNG" alt="" class="img-fluid">

<br><br>
now open powershell / command prompt

enter ```java -version```

<img src="/assets/images/path_setup/java_version.PNG" alt="" class="img-fluid">

now you can compile

```javac <file_name>.java```
 
 and can run 

 ```java <file_name>```