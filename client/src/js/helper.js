/**
 * helper.js
 * Contains helper functions
 */

(function(){
  'use strict';

  var app = angular.module('gps-tracking');
  // Returns the last item in an array
  app.filter('last', function() {
    return function(array) {
      return array[array.length - 1];
    }
  });

})();
