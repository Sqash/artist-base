'use strict';
describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('artistBaseApp'));

  var AboutCtrl, scope, json;

  beforeAll(function () {
    jasmine.getFixtures().fixturesPath = 'base/app/assets/json/';
    var data = readFixtures('about.json');
    json = JSON.parse(data);
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {

    $httpBackend.when('GET', 'assets/json/about.json').respond(json);
    scope = $rootScope.$new();

    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
    $httpBackend.flush();
  }));

  it('should have a string "content", if defined', function () {
    if(scope.content) {
      expect(scope.content).toEqual(jasmine.any(String));
    } else {
      console.log('About "content" is not defined');
      return true;
    }
  });

  it('should have a string "content", if defined', function () {
    if(scope.content) {
      expect(scope.content).toEqual(jasmine.any(String));
    } else {
      console.log('About "content" is not defined');
      return true;
    }
  });

  it('should have an object support, if defined', function () {
    if(scope.support) {
      expect(scope.content).toEqual(jasmine.any(Object));
    } else {
      console.log('About "support" is not defined');
      return true;
    }
  });

  xit('should have at least 1 valid field in support', function () {
    if(scope.support){
    } else {
      return true;
    }
  });

});
