---
layout:     post
title:      Generating PDF in Electron App
summary:    generate and save pdf with custom css (can be transparent) in electron based app using Angular2
categories: angular2 electron typescript
---

this is how to generate pdf file in Electron (angular2).

<br><br>
**add webview directive**

webview.ts
{: .code_title}
~~~ typescript
import { Directive } from '@angular/core';

@Directive({ selector: 'webview' })
export class WebviewDirective {
	
}
~~~

<br><br>
**add Component** 

generate_pdf.ts
{: .code_title}
~~~ typescript

import { Component } from '@angular/core';
import { remote } from 'electron';
import { writeFileSync } from 'fs';

@Component({
	selector: 'genPDF',
	templateUrl: 'gen_pdf.html'
})
export class GeneratePDFComponent {
	app = remote.app;
	webview: any;

	constructor() { }

	generate_pdf_file() {
		
		// get webview
		this.webview = document.getElementById('webview');
		
		// app path
		var _path = this.app.getPath('userData');
		
		// load your file into webview
		this.webview.loadURL(_file_path);
		
		// when content loaded
		this.webview.addEventListener('dom-ready', function handler() {
			
			// insert custom css here 
			_t.webview.insertCSS("@page{  background-color: transparent !important; -webkit-print-color-adjust: exact !important; size: 64px 64px; margin: 0 0 0 0; margin: 2px -10px -20px -10px; } svg{ width: 100%; height: 100%; }");
			
			// print to pdf
			_t.webview.printToPDF({
				// to enable transparent or any color
				printBackground: true
			}, function (error, data) {
				
				// write the binary data to file
				writeFileSync(_path + '/test.pdf', data);
			});
		});
	}
}
~~~

<br>

**add view**

gen_pdf.html
{: .code_title}
~~~ html
<webview id="webview" src="#" style="visibility:hidden;"></webview>

<button (click)="generate_pdf_file()">Generate PDF</button>
~~~

<br><br>

*make sure to add directive to module in declarations*