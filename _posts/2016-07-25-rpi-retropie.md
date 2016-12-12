---
layout:     post
title:      Getting Started with Retro Pie on Raspberry Pi using Xbox One Controller
summary:    recently i installed retro pie on my raspberry pi 2 and configured it to use with xbox one controller to play retro games like mario bros.
categories: raspberrypi xbox retro
---

<style>         
    section {
        margin: auto;
    }
    section p {
        margin-bottom: 27px;
        font-size: 20px;
        line-height: 1.6;
        color: #333;
    }
    section img {
        max-width: 640px;
    }
    .aspectRatioPlaceholder {
        max-width: auto !important;
        max-height: auto !important;
    }
    .aspectRatioPlaceholder-fill {
        padding-bottom: 0 !important;
    }
    header,
    section[data-field=subtitle] {
        display: none;
    }
</style>
<article class="h-entry">
    <section data-field="body" class="e-content">
    <section name="f066" class="section section--body section--first section--last">
        <div class="section-content">
            <div class="section-inner sectionLayout--insetColumn">
                <p name="e6cc" id="e6cc" class="graf graf--p graf-after--h3">recently i installed retro pie on my raspberry pi 2 and configured it to use with xbox one controller to play retro games like mario bros.</p>
                <p name="3d9a" id="3d9a" class="graf graf--p graf-after--p">what you need ?</p>
                <ul class="postList">
                <li name="9be8" id="9be8" class="graf graf--li graf-after--p">raspberry pi 2</li>
                <li name="abe6" id="abe6" class="graf graf--li graf-after--li">hdmi cable</li>
                <li name="d52e" id="d52e" class="graf graf--li graf-after--li">ethernet cable</li>
                <li name="c83e" id="c83e" class="graf graf--li graf-after--li">micro sd card</li>
                <li name="9728" id="9728" class="graf graf--li graf-after--li">micro sd card reader / adapter</li>
                <li name="5f6b" id="5f6b" class="graf graf--li graf-after--li">micro usb charger (can use phone charger with atleast 2A output)</li>
                <li name="4357" id="4357" class="graf graf--li graf-after--li">TV with HDMI suport</li>
                <li name="2348" id="2348" class="graf graf--li graf-after--li">Xbox One Controller</li>
                </ul>
                <p name="3db0" id="3db0" class="graf graf--p graf-after--li">Steps to follow:</p>
                <ul class="postList">
                <li name="0362" id="0362" class="graf graf--li graf-after--p">download the retro pie sd image from <a href="https://retropie.org.uk/download/" data-href="https://retropie.org.uk/download/" class="markup--anchor markup--li-anchor" rel="nofollow" target="_blank">https://retropie.org.uk/download/</a> select raspberry pi 2 model.</li>
                <li name="a524" id="a524" class="graf graf--li graf-after--li">extract the file using 7zip.</li>
                <li name="01dd" id="01dd" class="graf graf--li graf-after--li">insert sd card into card reader/adaper and plug into your computer.</li>
                <li name="72d2" id="72d2" class="graf graf--li graf-after--li">use Win32DiskImager (for Windows) to write the img file to your sd card.</li>
                <li name="22bb" id="22bb" class="graf graf--li graf-after--li">start raspberry pi with all cables attached and sd card inserted.</li>
                <li name="6666" id="6666" class="graf graf--li graf-after--li">you’ll see Welcome screen on your TV</li>
                </ul>
                <figure name="cca7" id="cca7" class="graf graf--figure graf-after--li">
                <div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 394px;">
                    <div class="aspectRatioPlaceholder-fill" style="padding-bottom: 56.3%;"></div>
                    <img class="graf-image" data-image-id="1*-YrLZOEpzUuJksJ2r_1v2Q.jpeg" data-width="960" data-height="540" src="https://cdn-images-1.medium.com/max/800/1*-YrLZOEpzUuJksJ2r_1v2Q.jpeg">
                </div>
                </figure>
                <ul class="postList">
                <li name="9751" id="9751" class="graf graf--li graf-after--figure">now start ssh on your computer and connect it to raspberry pi using command : <br><strong class="markup--strong markup--li-strong">pi@ip_of_raspberry_pi</strong><br>e.g. pi@192.168.1.5<br>the default password is raspberry<br>// if you have wireless / wired mouse and keyboard you can attach it you raspberry pi and press F4 to skip welcome screen and see info about raspberry pi like ip address.</li>
                <li name="befc" id="befc" class="graf graf--li graf-after--li">run<br>sudo apt-get update<br>sudo apt-get upgrade<br>sudo reboot</li>
                <li name="3af4" id="3af4" class="graf graf--li graf-after--li">after raspberry pi restarted, again connect using ssh and run</li>
                </ul>
                <figure name="51c1" id="51c1" class="graf graf--figure graf--iframe graf-after--li">
                <figcaption class="imageCaption"><a href="https://gist.github.com/vijayantkatyal/37e5c924be160372e114b154a2773c6f" data-href="https://gist.github.com/vijayantkatyal/37e5c924be160372e114b154a2773c6f" class="markup--anchor markup--figure-anchor" rel="nofollow" target="_blank">https://gist.github.com/vijayantkatyal/37e5c924be160372e114b154a2773c6f</a></figcaption>
                </figure>
                <p name="678b" id="678b" class="graf graf--p graf-after--figure">make sure xbox one controller is connected to raspberry pi via usb cable, when raspberry pi restarts your xbox one controller will buzz and led light will turn on. now you can see 1 gamepad detected on welcome screen and hold any key to configure keys.</p>
                <figure name="5b57" id="5b57" class="graf graf--figure graf-after--p">
                <div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 499px;">
                    <div class="aspectRatioPlaceholder-fill" style="padding-bottom: 71.3%;"></div>
                    <img class="graf-image" data-image-id="1*TRp68Rhkn4oFMkv6yueWcw.png" data-width="829" data-height="591" src="https://cdn-images-1.medium.com/max/800/1*TRp68Rhkn4oFMkv6yueWcw.png">
                </div>
                <figcaption class="imageCaption">button mapping for xbox one</figcaption>
                </figure>
                <p name="4760" id="4760" class="graf graf--p graf-after--figure">now you’ll need roms/games to play.</p>
                <ul class="postList">
                <li name="a9c6" id="a9c6" class="graf graf--li graf-after--p">mount raspberry pi via sftp<br>hostname: retropie<br>port: 22<br>username: pi<br>password: raspberry</li>
                <li name="9cc3" id="9cc3" class="graf graf--li graf-after--li">go to roms folder, enter nes (nintendo entertainment system) and copy here you downloaded rom (i.e. mario bros)</li>
                <li name="6f0d" id="6f0d" class="graf graf--li graf-after--li">restart raspberry pi and you’ll see the game under NES.</li>
                </ul>
                <p name="a8e7" id="a8e7" class="graf graf--p graf-after--li">select the game and start playing.</p>
                <p name="8fbc" id="8fbc" class="graf graf--p graf-after--p graf--last">Reference:<br><a href="https://github.com/retropie/retropie-setup/wiki/First-Installation" data-href="https://github.com/retropie/retropie-setup/wiki/First-Installation" class="markup--anchor markup--p-anchor" rel="nofollow" target="_blank">https://github.com/retropie/retropie-setup/wiki/First-Installation</a><br><a href="https://github.com/RetroPie/RetroPie-Setup/issues/1277" data-href="https://github.com/RetroPie/RetroPie-Setup/issues/1277" class="markup--anchor markup--p-anchor" rel="nofollow" target="_blank">https://github.com/RetroPie/RetroPie-Setup/issues/1277</a></p>
            </div>
        </div>
    </section>
    </section>         
</article>   