angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('simulator', {
    url: '/tab-chats',
    templateUrl: 'templates/tab-chats.html',
    controller: 'ChatsCtrl'
  })

  .state('flightPlan', {
    cache: false,
    url: '/tab-dash',
    templateUrl: 'templates/tab-dash.html',
    controller: 'DashCtrl'
  })

$urlRouterProvider.otherwise('/tab-dash')

  

});