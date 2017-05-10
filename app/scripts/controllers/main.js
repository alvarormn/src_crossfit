'use strict';

/**
 * @ngdoc function
 * @name crossfitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crossfitApp
 */
angular.module('crossfitApp')
  .controller('MainCtrl',  function ($scope, $http, $location) {

    $scope.sendForm = function() {
      $http({
        method: 'POST',
        url: 'http://localhost:3977/api/loginUser',
        data: {
          email: $scope.mailLogin,
          password: $scope.passLogin,
          gethash: true
        }
      }).then(function successCallback(response) {
        console.log(response.data.token);
        $scope.token = response.data.token;
        $location.path('/dashboard');
      }, function errorCallback(response) {
        console.log(response);
      });
    };

    $scope.createUser = function() {
      $http({
        method: 'POST',
        url: 'http://localhost:3977/api/register',
        data: {
          name: $scope.name,
          surname: $scope.surname,
          email: $scope.mail,
          password: $scope.pass,
          role: 'ROLE_USER',
          image: 'null'
        }
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response);
      });
    };

    $scope.tryToken =  function() {
      $http({
        method: 'POST',
        url: 'http://localhost:3977/api/pruebaAutorizacion',
        headers:{
          authorization: $scope.token
        }
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response);
      });
    };

  });
