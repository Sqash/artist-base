'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('artistBaseApp'));

  var MainCtrl, scope, json;

  beforeAll(function() {
    jasmine.getFixtures().fixturesPath = 'base/app/assets/json/';
    var data = readFixtures('home.json');
    json = JSON.parse(data);
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {

    $httpBackend.when('GET', 'assets/json/home.json').respond(json);
    scope = $rootScope.$new();

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
    });
    $httpBackend.flush();
  }));

  it('should have a string value for artist, if defined', function() {
    if(scope.artist) {
      expect(scope.artist).toEqual(jasmine.any(String))
    } else {
      console.log('Artist undefined in home.json file');
      return true;
    }
  });

  it('should have a string value for tagline, if defined', function() {
    if(scope.tagline) {
      expect(scope.tagline).toEqual(jasmine.any(String))
    } else {
      console.log('Tagline undefined in home.json file');
      return true;
    }
  });

  it('should have a string value for description, if defined', function() {
    if(scope.description) {
      expect(scope.description).toEqual(jasmine.any(String))
    } else {
      console.log('Tagline undefined in home.json file');
      return true;
    }
  });

});
