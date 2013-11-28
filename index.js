/**
 * GoogleUrlShorterService
 * https://developers.google.com/url-shortener/v1/getting_started
 *
 *
 * @module      :: Service
 * @description :: Google Url Shorter Service
 */

var Request = require('request'),
    Q = require('Q');

module.exports = {

    APIUrl: 'https://www.googleapis.com/urlshortener/v1/url',

    /**
     * GET shorter url
     *
     * method: POST https://www.googleapis.com/urlshortener/v1/url
     * header: Content-Type: application/json
     * POSTBody: {"longUrl": "http://www.google.com/"}
     *
     * return json format
     * {
     *     kind: 'urlshortener#url',
     *     id: 'http://goo.gl/5k2nwh',
     *     longUrl: 'http://slidenote.herokuapp.com/'
     * }
     *
     * @param  {String} longUrl original url
     * @param  {Object} defer object
     */
    getShortUrl: function( longUrl) {
        var _this = this,
            deferred = Q.defer();

        if(!longUrl) {
            deferred.reject(new Error('please input right url'));
        }

        new Request({
            method: 'POST',
            url: _this.APIUrl,
            json: {
                'longUrl': longUrl
            }
        }, function (error, response, body) {
            if(response.statusCode === 200 || response.statusCode === 304){
                deferred.resolve(body);
            } else {
                deferred.reject(error);
            }
        });

        return deferred.promise;
    },

    /**
     * GET shorter url
     *
     * method: GET
     * https://www.googleapis.com/urlshortener/v1/url?shortUrl=SHORTURL
     *
     * return json format
     * {
     *     "kind": "urlshortener#url",
     *     "id": "http://goo.gl/fbsS",
     *     "longUrl": "http://www.google.com/",
     *     "status": "OK",
     *     "created": "2009-12-13T07:22:55.000+00:00",
     *     "analytics": {
     *         "allTime": {
     *             "shortUrlClicks": "3227",
     *             "longUrlClicks": "9358",
     *             "referrers": [ { "count": "2160", "id": "Unknown/empty" } ...... ],
     *             "countries": [ { "count": "1022", "id": "US" } ...... ],
     *             "browsers": [ { "count": "1025", "id": "Firefox" }  ...... ],
     *             "platforms": [ { "count": "2278", "id": "Windows" }  ......  ]
     *         },
     *         "month": { ...... },
     *         "week": { ...... },
     *         "day": { ...... },
     *         "twoHours": { ...... }
     *     }
     * }
     *
     * @param  {String} shortUrl google short url
     * @param  {Object} defer object
     */
    getLongUrl: function( shortUrl) {
        var _this = this,
            deferred = Q.defer();

        if(!shortUrl) {
            deferred.reject(new Error('please input right url'));
        }

        new Request({
            method: 'GET',
            url: _this.APIUrl + '?shortUrl=' + shortUrl
        }, function (error, response, body) {
            if(response.statusCode === 200 || response.statusCode === 304){
                deferred.resolve(body);
            } else {
                deferred.reject(error);
            }
        });

        return deferred.promise;
    }
};
