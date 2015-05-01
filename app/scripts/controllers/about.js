'use strict';

/**
 * @ngdoc function
 * @name artistBaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the artistBaseApp
 */
angular.module('artistBaseApp')
  .controller('AboutCtrl', function ($scope, $http) {

    $scope.sidebarActive = false;

    $http.get('assets/json/about.json', {
      cache: true,
      responseType: 'json'
    })
    .success(function(data) {
      if(data) {
        $scope.content = data.content;
        $scope.events = data.events;
        $scope.support = data.support;
      } else {
        $scope.content = 'There was an error somewhere in the resource file' +
          'about.json. Probably a syntax error! Uh oh.';
      }
    })
    .error(function() {
      $scope.content = 'There was an error in retrieving the resource file.' +
        ' Sorry! ):';
    });
  });
