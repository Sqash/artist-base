'use strict';

angular.module('artistBaseApp')
  .controller('NavbarCtrl', function ($scope, $location, $http) {
    $http.get('assets/json/nav.json', {
      cache: true,
      responseType: 'json'
    })
    .success(function(data) {
      if(data) {
        $scope.menu = data.menuItems;
        $scope.branding = data.branding;
        $scope.brandIsImage = !!data.brandIsImage;

        $scope.isCollapsed = true;

        $scope.isActive = function(route) {
          return route === $location.path();
        };
      } else {
        $scope.branding = 'ERROR! D:';
        $scope.menu = [ {title: 'Syntax'}, {title: 'in'}, {title: 'nav.json'} ];
      }
    });
  });
