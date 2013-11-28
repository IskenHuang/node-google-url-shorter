var UrlShorter = require('../index');

UrlShorter
    .getShortUrl('http://www.google.com/')
    .then(function(data){
        console.log('getShortUrl success = ', data);
    })
    .fail(function(err){
        console.log('getShortUrl fail err = ', err);
    });

UrlShorter
    .getLongUrl('http://goo.gl/fbsS')
    .then(function(data){
        console.log('getLongUrl success = ', data);
    })
    .fail(function(err){
        console.log('getLongUrl fail err = ', err);
    });
