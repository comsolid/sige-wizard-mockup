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
        'ngSanitize',
        'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('wizard', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('wizard.db', {
                url: 'db',
                templateUrl: 'views/step-db.html'
            })
            .state('wizard.conference', {
                url: 'conference',
                templateUrl: 'views/step-conference.html'
            })
            .state('wizard.email', {
                url: 'email',
                templateUrl: 'views/step-email.html'
            });
        $urlRouterProvider.otherwise('db');
  }]);
