'use strict';

describe('Controller: GalleryFsCtrl', function () {

  // load the controller's module
  beforeEach(module('artistBaseApp'));

  var GalleryFsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GalleryFsCtrl = $controller('GalleryFsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
