'use strict';

/**
 * @ngdoc overview
 * @name sigeWizardApp
 * @description
 * # sigeWizardApp
 *
 * Main module of the application.
 */
angular
  .module('sigeWizardApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
