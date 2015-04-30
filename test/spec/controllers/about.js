'use strict';
describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('artistBaseApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should have a dummy test until I figure out async ones', function () {
    expect(1).toBe(1);
  });
});
