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