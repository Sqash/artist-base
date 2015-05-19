'use strict';

describe('Controller: NavbarCtrl', function () {

  // load the controller's module
  beforeEach(module('artistBaseApp'));

  var NavbarCtrl, scope, json;

  beforeAll(function() {
    jasmine.getFixtures().fixturesPath = 'base/app/assets/json/';
    var data = jasmine.getFixtures().read('nav.json');
    json = JSON.parse(data);
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {

    $httpBackend.when('GET', 'assets/json/nav.json').respond(json);
    scope = $rootScope.$new();

    NavbarCtrl = $controller('NavbarCtrl', {
      $scope: scope
    });
    $httpBackend.flush();
  }));

  it('should have menuItems', function () {
    expect(scope.menu).toBeDefined();
    expect(scope.menu.length).toBeGreaterThan(0);
  });

  it('should have all menuItems with both a title and link', function() {
    for(var i=0; i<scope.menu.length; i++){
      expect(scope.menu[i].title).toEqual(jasmine.any(String));
      expect(scope.menu[i].link).toMatch(/^\/[a-zA-Z0-9_\-\/]*$/);
    }
  });

  it('should have branding', function () {
    expect(scope.branding).toEqual(jasmine.any(String));
  });

  it('should have a boolean brandingIsImage attribute', function () {
    expect(scope.brandIsImage).toEqual(jasmine.any(Boolean));
  });

  it('should have a default value of true for nav Collapse', function () {
    expect(scope.isCollapsed).toEqual(true);
  });

});
