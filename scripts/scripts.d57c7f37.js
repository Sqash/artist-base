"use strict";angular.module("artistBaseApp",["ngAnimate","ngRoute","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/gallery/:title",{templateUrl:"views/gallery.html",controller:"GalleryCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("artistBaseApp").controller("MainCtrl",["$scope","$http",function(a,b){b.get("assets/json/home.json",{cache:!0,responseType:"json"}).success(function(b){b?(a.artist=b.artist,a.tagline=b.tagline,a.description=b.description):a.tagline="There was a syntax error in the config file home.json"}).error(function(){a.artist="ERROR!? D:",a.tagline="Config files couldn't be found",a.description="Really sorry about that..."})}]),angular.module("artistBaseApp").controller("AboutCtrl",["$scope","$http",function(a,b){a.sidebarActive=!1,b.get("assets/json/about.json",{cache:!0,responseType:"json"}).success(function(b){b?(a.content=b.content,a.events=b.events,a.support=b.support):a.content="There was an error somewhere in the resource fileabout.json. Probably a syntax error! Uh oh."}).error(function(){a.content="There was an error in retrieving the resource file. Sorry! ):"})}]),angular.module("artistBaseApp").controller("NavbarCtrl",["$scope","$location","$http",function(a,b,c){c.get("assets/json/nav.json",{cache:!0,responseType:"json"}).success(function(c){c?(a.menu=c.menuItems,a.branding=c.branding,a.brandIsImage=!!c.brandIsImage,a.isCollapsed=!0,a.isActive=function(a){return a===b.path()}):(a.branding="ERROR! D:",a.menu=[{title:"Syntax"},{title:"in"},{title:"nav.json"}])})}]),angular.module("artistBaseApp").controller("GalleryCtrl",["$scope","$http","$routeParams",function(a,b,c){a.galleryName=c.title,a.activeWork=0,a.next=function(){a.works[a.activeWork++].active=!1,a.activeWork=a.activeWork>a.works.length-1?0:a.activeWork,a.works[a.activeWork].active=!0},a.prev=function(){a.works[a.activeWork--].active=!1,a.activeWork=a.activeWork<0?a.works.length-1:a.activeWork,a.works[a.activeWork].active=!0},b.get("assets/json/"+c.title+".json",{cache:!0,responseType:"json"}).success(function(b){b?(a.galleryTitle=b.title,a.galleryDescription=b.description,a.works=b.works,a.works[0].active=!0):(a.galleryTitle="Error ):",a.galleryDescription="There seems to be a problem with your "+c.title+".json file. Probably syntax.")}).error(function(){a.galleryTitle="Error ):",a.galleryDescription="Couldn't find your "+c.title+".json gallery manifest file. It should be in assets/json/"})}]);