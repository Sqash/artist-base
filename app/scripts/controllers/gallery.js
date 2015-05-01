'use strict';

/**
 * @ngdoc function
 * @name artistBaseApp.controller:GalleryFsCtrl
 * @description
 * # GalleryFsCtrl
 * Controller of the artistBaseApp
 */
angular.module('artistBaseApp')
  .controller('GalleryCtrl', function ($scope, $http, $routeParams) {

    $scope.galleryName = $routeParams.title;

    $http.get('assets/json/' + $routeParams.title + '.json', {
      cache: true,
      responseType: 'json'
    })
    .success(function(data) {
      if(data) {
        $scope.galleryTitle = data.title;
        $scope.galleryDescription = data.description;
        $scope.works = data.works;
      } else {
        $scope.galleryTitle = 'Error ):';
        $scope.galleryDescription = 'There seems to be a problem with your ' +
          $routeParams.title + '.json file. Probably syntax.';
      }
    })
    .error(function() {
      $scope.galleryTitle = 'Error ):';
      $scope.galleryDescription = 'Couldn\'t find your ' + $routeParams.title +
        '.json gallery manifest file. It should be in assets/json/';
    });

  });
