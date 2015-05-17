'use strict';
describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('artistBaseApp'));

  var AboutCtrl, scope, json;

  beforeAll(function () {
    jasmine.getFixtures().fixturesPath = 'base/app/assets/json/';
    var data = readFixtures('about.json');
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

    $httpBackend.when('GET', 'assets/json/about.json').respond(json);
    scope = $rootScope.$new();

    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
    $httpBackend.flush();
  }));

  it('should have a string "content", if defined', function () {
    expect(scope.content).toBeOneOf([jasmine.any(String), undefined]);
  });

  it('should have an object support, if defined', function () {
    expect(scope.support).toBeOneOf([jasmine.any(Object), undefined]);
  });

  it('should have at least 1 valid field in support', function () {
    if(scope.support) {
      expect(scope.support).toHaveOneOf(['title', 'description']);
    }
  });

  it('should have a valid title field in support', function () {
    if(scope.support) {
      expect(scope.support.title).toBeOneOf([undefined, jasmine.any(String)]);
    }
  });

  it('should have a valid description field in support', function () {
    if(scope.support) {
      expect(scope.support.description).toBeOneOf([undefined, jasmine.any(String)]);
    }
  });

  it('should have an Array type events attribute, if defined', function () {
    expect(scope.events).toBeOneOf([undefined, jasmine.any(Array)]);
  });

  it('should have at least 1 valid field per object in events', function () {
    if(scope.events) {
      for(var i=0; i<scope.events.length; i++) {
        expect(scope.events[i]).toHaveOneOf([
          'title',
          'description',
          'link',
          'linktext'
        ]);
      }
    }
  });

  it('should have a linktext for every link in events', function () {
    if(scope.events) {
      for(var i=0; i<scope.events.length; i++) {
        if(typeof scope.events[i].link !== 'undefined') {
          expect(scope.events[i].linktext).toBeDefined();
        }
      }
    }
  });

  it('should have a link for every linktext in events', function () {
    if(scope.events) {
      for(var i=0; i<scope.events.length; i++) {
        if(typeof scope.events[i].linktext !== 'undefined') {
          expect(scope.events[i].link).toBeDefined();
        }
      }
    }
  });

  it('should have every property per event object as a string', function () {
    if(scope.events) {
      for(var i=0; i<scope.events.length; i++) {
        for(var key in scope.events[i]) {
          if(scope.events[i].hasOwnProperty(key)) {
            expect(scope.events[i][key]).toEqual(jasmine.any(String));
          }
        }
      }
    }
  });

});
