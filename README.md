node-google-url-shorter
=======================

Google url shorter nodejs version. Easily to used Google url shorter(goo.gl) in nodejs. Shortening your url and get short url QR Code.

# install
```
npm install node-url-shorter --save
```

# how to use
```
// load module
var UrlShorter = require('node-url-shorter');

// Get short url
UrlShorter
    .getShortUrl('http://www.google.com/')
    .then(function(data){
        console.log('getShortUrl success = ', data);
    })
    .fail(function(err){
        console.log('getShortUrl fail err = ', err);
    });

// Get original url
UrlShorter
    .getLongUrl('http://goo.gl/fbsS')
    .then(function(data){
        console.log('getLongUrl success = ', data);
    })
    .fail(function(err){
        console.log('getLongUrl fail err = ', err);
    });

```
