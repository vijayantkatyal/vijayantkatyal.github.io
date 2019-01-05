---
layout:     post
title:      Template Post
date:       2019-01-04 02:10
summary:    template post with all parameters supported
categories: template
update_date: 2019-01-04 02:11
featured_image: 2016-10-07.png
comments : false
intro_image: gifs/preview.gif
meta_image: https://vijayantkatyal.com/svg-bits/screenshots/app.PNG
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam sequi placeat delectus rem totam quos impedit reprehenderit distinctio tenetur nostrum illum dicta, veritatis consequuntur blanditiis quaerat. Quibusdam, eveniet incidunt nobis.

<code>mention support</code>



<code>emoji support from github</code>

:+1:

<code>gist support</code>
{% gist vijayantkatyal/37e5c924be160372e114b154a2773c6f %}

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nesciunt necessitatibus, eius facilis ratione optio earum explicabo odit repellendus quam magni nobis amet soluta libero, expedita dolor ullam quos, voluptatem!

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus porro laborum quis dolore cupiditate minima cum, quo perspiciatis ipsa, autem magnam labore itaque nobis sed, amet consequatur necessitatibus at molestiae.

main.rb
{: .code_title}
~~~ ruby
/**
 * Verilog Lexer
 */
module Foo(
  input logic Clk_CI,
  input logic Rst_RBI,
  input logic A,
  input logic B,
  output logic C
);
  logic C_DN, C_DP;

  assign C = C_DP;

  always_comb begin : proc_next_state
    C_DN = A + B;
  end

  // Clocked process
  always_ff @(posedge Clk_CI, negedge Rst_RBI) begin
    if(~Rst_RBI) begin
      C_DP <= 1b'0;
    end else begin
      C_DP <= C_DN;
    end
  end
endmodule
~~~

file.css
{: .code_title}
~~~ css
body {
	background-color: #f7f7f7;
	padding-top: 0px;
}

.navbar-toggler {
	position: relative;
	top: 10px;
	color: #ccc;
}

.navbar-toggler::before {
	display: inline-block;
	font-size: inherit;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased;
	content: "\f0c9";
	font:20px/1 FontAwesome;
}

.navbar-toggler[aria-expanded='true']::before {
	content: "\f00d";
}

.navbar-toggler::after {
	padding-left: 10px;
	content: "Menu"; 
}

.navbar-toggler[aria-expanded='true']::after {
	content: "Close";
}

.header,
.footer {
	padding-right: 1rem;
	padding-left: 1rem
}

.header {
	padding-bottom: 1rem;
	border-bottom: .05rem solid #e5e5e5
}

.header h3 {
	margin-top: 0;
	margin-bottom: 0;
	line-height: 3rem
}

@media (min-width:48em) {
	.container {
		max-width: 46rem
	}
}

.container-narrow>hr {
	margin: 2rem 0
}

.jumbotron {
	text-align: center;
	border-bottom: .05rem solid #e5e5e5;
	background-color: #373a3c;
	color: #ccc;
	margin-bottom: 0px;
	margin-top: -40px;
	padding-top: 6rem;
	padding-bottom: 6rem;
}

.jumbotron .btn {
	padding: .75rem 1.5rem;
	font-size: 1.5rem
}

@media screen and (min-width:48em) {
	.header,
	.footer {
		padding-right: 0;
		padding-left: 0
	}
	.header {
		margin-bottom: 2rem
	}
	.jumbotron {
		border-bottom: 0
	}
}

.navbar-collapse .container-fluid {
	padding: 2rem 2.5rem;
	border-bottom: 1px solid #ccc;
}

.navbar-collapse h4 {
	color: #818a91
}

.navbar-collapse .text-muted {
	color: #818a91
}

.post {
	border-bottom: #ebf2f6 1px solid;
	padding-bottom: 2rem;
	padding-top: 2rem;
	word-break: break-word;
}

.post .post-meta {
	margin: 0 0 5px 0;
	font-family: 'Open Sans',sans-serif;
	font-size: 1.5 rem;
	color: #9eabb3;
}

.post .post-meta a {
	color: #9eabb3;
	text-decoration: none;
}

.post .post-tags {
	display: inline-block;
	float: right;
}

.post .post-title {
	margin: 0;
	font-size: 3rem;
	letter-spacing: -1px;
	line-height: 1.2em;
	text-indent: -2px;
	text-rendering: optimizeLegibility;
	font-family: 'Open Sans',sans-serif;
}

.post .post-title a {
	color: #50585d;
	transition: color 300ms ease-in-out;
}

.post .post-title a:hover {
	color: #2196F3;
}

.post .post-excerpt p {
	line-height: 1.6em;
}

/*.posts .post_pagination {
	color: #9eabb3;
}
.posts .post_pagination a {
	color: #9eabb3;
	padding: 5px 10px 5px 10px;
	border: #ebf2f6 2px solid;
	text-decoration: none;
	border-radius: 30px;
	transition: border ease .3s;
}
.posts .post_pagination a:hover {
	color: #2196F3;
}*/

.jumbotron p.lead > a[data-discuss-identifier] {
	color: #ccc;
}

.share h5 {
	color: #546673;
}

.share a {
	font-size: 20px;
	margin-right: 5px;
}

.share .fa-twitter {
	color: #1da1f2;
}

.share .fa-envelope {
	color: #673AB7;
}
~~~