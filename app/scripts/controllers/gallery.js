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

    $scope.activeWork = 0;

    $scope.show = true;

    $scope.next = function() {
      $scope.works[$scope.activeWork++].active = false;
      $scope.activeWork = ($scope.activeWork > $scope.works.length - 1)? 0 : $scope.activeWork;
      $scope.works[$scope.activeWork].active = true;
    };

    $scope.prev = function() {
      $scope.works[$scope.activeWork--].active = false;
      $scope.activeWork = ($scope.activeWork < 0)? $scope.works.length - 1 : $scope.activeWork;
      $scope.works[$scope.activeWork].active = true;
    };

    $http.get('assets/json/' + $routeParams.title + '.json', {
      cache: true,
      responseType: 'json'
    })
    .success(function(data) {
      if(data) {
        $scope.galleryTitle = data.title;
        $scope.galleryDescription = data.description;
        $scope.works = data.works;
        for(var i=0; i < $scope.works.length; i++) {
          $scope.works[i].active = (i === $scope.activeWork);
        }
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
