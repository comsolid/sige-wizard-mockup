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
            },
            email: {
                type: 'smtp',
                host: 'smtp.gmail.com',
                port: 587,
                auth: 'login',
                username: '',
                password: '',
                register: true,
                ssl: 'tls',
                from: {
                    email: '',
                    name: ''
                },
                reply: {
                    email: '',
                    name: ''
                }
            },
            services: {
                twitter: {
                    username: '',
                    hashtags: ''
                },
                slideshare: {
                    api_key: '',
                    shared_secret: ''
                }
            }
        };

        $scope.install = function () {
            console.log('Installing ...');
        };

        $scope.copyEmail = function () {
            var email = $scope.view.email.username;
            $scope.view.email.from.email = email;
            $scope.view.email.reply.email = email;
        };
    }]);
