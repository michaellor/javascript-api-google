(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "AIzaSyBM-fE1aK6YGJwtHl-qWigReeLN0xWi7gs";
exports.meetUpApiKey = "214583a3be434a54115f39696b533";

},{}],2:[function(require,module,exports){
exports.Class = function(currentProperty, setProperty) {
  this.currentProperty = currentProperty;
  this.setProperty = setProperty;
};

exports.Class.prototype.triggerAlarm = function(currentProperty, setProperty) {
  if (currentProperty === setProperty) {
    return true;
  }
  else {
    return false;
  }
};

},{}],3:[function(require,module,exports){
var Class = require('./../js/class.js').Class;
var apiKey = require('./../.env').apiKey;

$( document ).ready(function() {
  
});

var Class = require('./../js/class.js').Class;
var apiKey = require('./../.env').apiKey;
var meetUpApiKey = require('./../.env').meetUpApiKey;

$( document ).ready(function() {
  $('#locateUser').click(locateUser, function() {
    var latitude = 45.5189614;
    var longitude = -122.6865243;
    $.get("https://api.meetup.com/2/cities?&sign=true&photo-host=public&lon=" + longitude + "&lat=" + latitude + "&page=1&key=" + meetUpApiKey).then(function(response) {
      console.log(response)
    });
  });
});

//google maps functions
function locateUser() {
  // If the browser supports the Geolocation API
  if (navigator.geolocation){
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 10 * 1000 // 10 seconds
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess, defaultPosition, positionOptions);
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
}

function geolocationSuccess(position) {

  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var myOptions = {
    zoom : 14,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };

  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
  // for loop
  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });
  // end for
}

function defaultPosition() {
  var userLatLng = new google.maps.LatLng(45.5189614, -122.6865243);

  var myOptions = {
    zoom : 14,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };

  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);

  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });
}

},{"./../.env":1,"./../js/class.js":2}]},{},[3]);
