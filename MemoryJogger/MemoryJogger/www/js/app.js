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
      cordova.plugins.Keyboard.disableScroll(true);

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
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.patients', {
      url: '/patients',
      views: {
        'menuContent': {
            templateUrl: 'templates/patients.html'
        }
      }
    })
      .state('app.patientDetails', {
          url: '/patientDetails',
            views: {
                'menuContent': {
                    templateUrl: 'templates/patientDetails.html'
                }
            }
        })
    .state('app.alerts', {
        url: '/alerts',
      views: {
        'menuContent': {
            templateUrl: 'templates/alerts.html'
          //  ,
          //controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.activity', {
      url: '/activity',
      views: {
          'menuContent': {
              templateUrl: 'templates/activity.html'
          }
      }
  })
    //.state('app.settings', {
    //    url: '/settings',
    //    views: {
    //        'menuContent': {
    //            templateUrl: 'templates/settings.html'
    //        }
    //    }    
    //})
      // setup an abstract state for the tabs directive
 .state('settings', {
     url: "/settings",
     abstract: true,
     templateUrl: "templates/settings.html"
 })

 // Each tab has its own nav history stack:

 .state('settings.alerts', {
     url: '/alerts',
     views: {
         'settings-alerts': {
             templateUrl: 'templates/tabAlerts.html'
         }
     }
 })

 .state('settings.reminders', {
     url: '/reminders',
     views: {
         'settings-reminders': {
             templateUrl: 'templates/tabReminders.html'
         }
     }
 })
    ;
  // if none of the above states are matched, use this as the fallback
$urlRouterProvider.otherwise('/app/home');
});
