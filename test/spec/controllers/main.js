'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('artistBaseApp'));

  var MainCtrl, scope, json;

  beforeAll(function() {
    jasmine.getFixtures().fixturesPath = 'base/app/assets/json/';
    var data = readFixtures('home.json');
    json = JSON.parse(data);

    jasmine.addMatchers({
      toBeOneOf: function(util, customEqualityTesters) {
        return {
          compare: function(actual, expected) {
            var result = {};

            if(expected === undefined){
              result.pass = false;
              return result;
            }

            result.pass=util.contains(expected, actual, customEqualityTesters);

            if(!result.pass) {
              result.message = 'Expected ' + actual.constructor.name +
                ' to match one of [' + expected + '] types';
            }

            return result;
          }
        }
      },
      toHaveOneOf: function(util, customEqualityTesters) {
        return {
          compare: function(actual, expected) {
            var result = {};

            if(expected === undefined) {
              expected = [];
            }

            result.pass = false;

            for(var i=0; i<expected.length; i++){
              if(actual.hasOwnProperty(expected[i]) &&
                  (expected[i] !== undefined)) {
                result.pass = true;
              }
            }

            if(!result.pass) {
              result.message = 'Expected ' + actual.constructor.name +
                ' to have at least one of [' + expected +
                '] properties defined.';
            }

            return result;
          }
        }
      }
    });

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
    expect(scope.artist).toBeOneOf([jasmine.any(String), undefined]);
  });

  it('should have a string value for tagline, if defined', function() {
    expect(scope.tagline).toBeOneOf([jasmine.any(String), undefined]);
  });

  it('should have a string value for description, if defined', function() {
    expect(scope.description).toBeOneOf([jasmine.any(String), undefined]);
  });

});
