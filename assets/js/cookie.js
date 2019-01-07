window.cookieconsent.initialise({
    container: document.getElementById("cookie"),
    palette:{
      popup: {background: "#7ab6d3"},
      button: {background: "#307db0"},
    },
    revokable: false,
    animateRevokable: true,
    onStatusChange: function(status) {
      console.log(this.hasConsented() ?
        'enable cookies' : 'disable cookies');
  },
  cookie:{
    secure: false
  },
	content: {
		header: 'Cookies used on the website!',
		message: 'This website uses cookies to ensure you get the best experience on our website.',
		dismiss: 'Got it!',
		allow: 'Allow cookies',
		deny: 'Decline',
		link: 'Learn more',
		href: '/privacy-policy',
		close: '&#x274c;',
		policy: 'Cookie Policy',
		target: '_blank',
	  },
    // law: {
    //   regionalLaw: false,
    // },
    // location: true,
  });