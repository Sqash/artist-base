'use strict';

describe('Controller: GalleryCtrl', function () {

  // load the controller's module
  beforeEach(module('artistBaseApp'));

  var GalleryFsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GalleryFsCtrl = $controller('GalleryCtrl', {
      $scope: scope
    });
  }));

  it('should have a dummy test until I write async tests', function () {
    expect(1).toBe(1);
  });
});
