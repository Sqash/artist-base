/* jshint loopfunc: true */

'use strict';

describe('Controller: GalleryCtrl', function () {

  // load the controller's module
  beforeEach(module('artistBaseApp'));

  var GalleryFsCtrl, scope, json;
  var galleries = [
    'exhibit',
    'for-sale'
  ];

  for(var i=0; i<galleries.length; i++) {
    var desc = 'Testing gallery "' + galleries[i] + '" with GalleryCtrl';

    describe(desc, function () {

      var filename = galleries[i] + '.json';

      beforeAll(function () {
        jasmine.getFixtures().fixturesPath = 'base/app/assets/json/';
        var data = jasmine.getFixtures().read(filename);
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
            };
          },
          toHaveOneOf: function() {
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
            };
          }
        });

      });

      // Initialize the controller and a mock scope
      beforeEach(inject(function ($controller, $rootScope, $httpBackend) {

        $httpBackend.when('GET', /^assets\/json\/[a-zA-Z0-9_\-]*\.json$/)
          .respond(json);
        scope = $rootScope.$new();

        GalleryFsCtrl = $controller('GalleryCtrl', {
          $scope: scope,
          $routeParams: {
            title: filename.slice(0, filename.length-5)
          }
        });
        $httpBackend.flush();
      }));

      it('should have a String galleryTitle, if defined', function () {
        expect(scope.galleryTitle).toBeOneOf([jasmine.any(String), undefined]);
      });

      it('should have a String galleryDescription, if defined', function () {
        expect(scope.galleryDescription).toBeOneOf([jasmine.any(String), undefined]);
      });

      it('should have an Array of works with at least 1 work', function () {
        expect(scope.works).toEqual(jasmine.any(Array));
        expect(scope.works.length).toBeGreaterThan(0);
      });

      it('should have a valid image property in every work', function() {
        for(var i=0; i<scope.works.length; i++) {
          expect(scope.works[i].image).toEqual(jasmine.any(String));
        }
      });

      it('should have every non-internal works property as a String', function() {
        for(var i=0; i<scope.works.length; i++) {
          for(var prop in scope.works[i]) {
            if(scope.works[i].hasOwnProperty(prop) && prop !== 'active') {
              expect(scope.works[i][prop]).toEqual(jasmine.any(String));
            }
          }
        }
      });

      it('should have exactly 1 active work', function() {
        var count = 0;
        for(var i=0; i<scope.works.length; i++) {
          if(scope.works[i].active) { count++; }
        }
        expect(count).toBe(1);
      });

      it('should not show captions initially', function () {
        expect(scope.show).toBe(false);
      });

      it('should have working next() and prev() functions', function() {
        var start = scope.activeWork;
        expect(start).toBe(0);
        expect(scope.works[start].active).toBe(true);
        scope.next();
        expect(scope.activeWork).toBe(start + 1);
        expect(scope.works[start].active).toBe(false);
        expect(scope.works[start + 1].active).toBe(true);
        scope.prev();
        expect(scope.activeWork).toBe(start);
        expect(scope.works[start + 1].active).toBe(false);
        expect(scope.works[start].active).toBe(true);
      });

    });
  }
});
