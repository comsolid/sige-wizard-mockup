'use strict';

/**
 * @ngdoc function
 * @name sigeWizardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sigeWizardApp
 */
angular.module('sigeWizardApp')
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.view = {
            db: {
                host: '',
                port: '',
                dbname: '',
                username: '',
                password: ''
            },
            conference: {
                name: '',
                codename: '',
                starts_in: '',
                ends_in: '',
                submission_starts_in: '',
                submission_ends_in: ''
            }
        };

        $scope.install = function () {
            console.log('Installing ...');
        };
    }]);
