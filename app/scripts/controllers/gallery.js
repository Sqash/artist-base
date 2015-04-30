'use strict';

/**
 * @ngdoc function
 * @name artistBaseApp.controller:GalleryFsCtrl
 * @description
 * # GalleryFsCtrl
 * Controller of the artistBaseApp
 */
angular.module('artistBaseApp')
  .controller('GalleryCtrl', function ($scope, $routeParams) {
    $scope.title = 'Works for Sale';
    console.log($routeParams.title);
  });
