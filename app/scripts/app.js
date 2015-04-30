'use strict';

/**
 * @ngdoc overview
 * @name artistBaseApp
 * @description
 * # artistBaseApp
 *
 * Main module of the application.
 */
angular
  .module('artistBaseApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/gallery-fs', {
        templateUrl: 'views/gallery-fs.html',
        controller: 'GalleryFsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
