'use strict';

/**
 * @ngdoc function
 * @name artistBaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the artistBaseApp
 */
angular.module('artistBaseApp')
  .controller('MainCtrl', function ($scope, $http) {
      $http.get('assets/json/home.json', {
        cache: true,
        responseType: 'json'
      })
      .success(function(data) {
        if(data) {
          $scope.artist = data.artist;
          $scope.tagline = data.tagline;
          $scope.description = data.description;
        } else {
          $scope.tagline = 'There was a syntax error in the config file home.json';
        }
      })
      .error(function() {
        $scope.artist = 'ERROR!? D:';
        $scope.tagline = 'Config files couldn\'t be found';
        $scope.description = 'Really sorry about that...';
      });
  });
