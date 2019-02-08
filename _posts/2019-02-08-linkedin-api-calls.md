---
layout:     post
title:      using Linkedin v2 API to login and get profile, company pages and more
date:       2019-02-08 13:41
summary:    how to use Linkedin OAuth 2 REST API to login, get access token and using that token to get profile, company pages, groups and connections
categories: rest-api node express javascript
comments : true
---

recently worked on a node js project which requires to login via Linkedin API and then use access token generated via login to access profile, company pages data. here are the steps i followed to make it work.

#### Create App on LinkedIn

go to [Developers](https://www.linkedin.com/developers/apps) page and create an app.

after creating an app, go to app **Auth** settings, copy **client id** and **client secret**.

add Redirect URL.

#### Login using Linkedin OAuth2

install [Passport](www.passportjs.org) 

```npm install passport --save```

install [Passport Linkedin Strategy](http://www.passportjs.org/packages/passport-linkedin-oauth2/)

```npm install passport-linkedin-oauth2```

in your index.js (or main file)

index.js
{:  .code_title}
~~~ js
// paspport dependencies

var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

// linkedin app settings
var LINKEDIN_CLIENT_ID = "CLIENT_ID_HERE";
var LINKEDIN_CLIENT_SECRET = "CLIENT_SECRET_HERE";
var Linkedin = require('node-linkedin')(LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

passport.use(new LinkedInStrategy({
    clientID: LINKEDIN_CLIENT_ID,
    clientSecret: LINKEDIN_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_basicprofile', 'rw_company_admin'],
    passReqToCallback: true
},
function (req, accessToken, refreshToken, profile, done) {
	req.session.accessToken = accessToken;
    process.nextTick(function () {
        return done(null, profile);
	});
}));

// for auth

app.get('/auth/linkedin',
  passport.authenticate('linkedin', { state: 'SOME STATE'  }),
  function(req, res){
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
});

// for callback

app.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/' }),
function (req, res) {
    res.redirect('/');
});
~~~

<br><br>
now you have access token saved in **req.session.accesstoken** variable.


#### Using Access Token to make REST API Calls for data

install [node-linkedin](https://www.npmjs.com/package/node-linkedin) package from npm

```npm install node-linkedin --save```

**get all company pages (where logged in user is admin)**

index.js
{:  .code_title}
~~~ js
app.get('/companies', function (req, res) {

    var user_companies = null;
    if (req.session.accessToken != undefined) {
        var linkedin = Linkedin.init(req.session.accessToken);
        linkedin.companies.asAdmin(function (err, companies) {
            this.user_companies = companies;
            
            res.json(this.user_companies);
            // now use this data in view
            // e.g.
            // res.render('index', { companies: user_companies });
        });
    }
    else
    {
        res.render('index', { companies: user_companies });
    }
});
~~~
<br><br>
**get company info by id**

index.js
{:  .code_title}
~~~ js
app.get('/company/:id', function(req,res){
    if (req.session.accessToken != undefined) {
        var linkedin = Linkedin.init(req.session.accessToken);
        linkedin.companies.company(req.params.id, function (err, company) {
            res.json(company);
            // res.render('company', { company: company });
        });
    }
    else
    {
        res.send('not found');
    }
})
~~~
<br><br>
i hope this helps you in creating an linked in app and using it to access data via REST API calls.

let me know in the comments if you need some help.
