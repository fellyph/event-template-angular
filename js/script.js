var conferenceApp = angular.module('conferenceApp', ['ngRoute', 'ngAnimate']);

conferenceApp.config( function($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl : 'pages/home.html',
        controller: 'mainController'
      })
      .when('/positioning', {
        templateUrl : 'pages/positioning.html',
        controller : 'positioningController'
      })
      .when('/speakers', {
        templateUrl: 'pages/speakers.html',
        controller: 'speakersConttroller'
      })
      .when('/sponsors', {
        templateUrl: 'pages/sponsors.html',
        controller: 'sponsorsConttroller'
      })
      .when('/confirmation', {
        templateUrl: 'pages/confirmation.html',
        controller: 'confirmationConttroller'
      })
      .when('/map', {
        templateUrl: 'pages/map.html',
        controller: 'mapConttroller'
      })
      .when('/oops', {
        templateUrl: 'pages/oops.html',
        controller: 'oopsConttroller'
      })
      .when('/register', {
        templateUrl: 'pages/register.html',
        controller: 'registerConttroller'
      })
});

conferenceApp.controller('mainController', function($scope) {
  $scope.pageClass = 'page-home';
});

conferenceApp.controller('positioningController', function($scope) {
  $scope.message = 'page-positioning';
});

conferenceApp.controller('speakersConttroller', function($scope) {
  $scope.message = 'page-speakers';
});

conferenceApp.controller('sponsorsConttroller', function($scope) {
  $scope.message = 'page-sponsors';
});

conferenceApp.controller('registerConttroller', function($scope) {
  $scope.message = 'page-register';
});

conferenceApp.controller('oopsConttroller', function($scope) {
  $scope.message = 'page-oops';
});

conferenceApp.controller('mapConttroller', function($scope) {
  $scope.message = 'page-map';
});

conferenceApp.controller('confirmationConttroller', function($scope) {
  $scope.message = 'page-confirmation';
});