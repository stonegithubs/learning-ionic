// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.wiki', {
    url: "/wiki",
    views: {
      'menuContent': {
        templateUrl: "templates/wiki.html",
        controller: 'WikiCtrl'
      }
    }
  })
  .state('app.language', {
	  url: "/language/:languageId",
	  views: {
		  'menuContent': {
			  templateUrl: "templates/wiki_detail.html",
			  controller: 'WikiDetailCtrl'
		  }
	  }
  })
    .state('app.levelSelect', {
      url: "/level",
      views: {
        'menuContent': {
          templateUrl: "templates/level.html",
          controller: 'LevelSelectCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/level/:level",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'QuizCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/level');
});
