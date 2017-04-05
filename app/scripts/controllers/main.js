'use strict';

/**
 * @ngdoc function
 * @name crossfitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crossfitApp
 */
angular.module('crossfitApp')
  .controller('MainCtrl',  function ($scope, $http) {
    $scope.sendForm = function() {
      $http({
        method: 'POST',
        url: 'http://localhost:3977/api/loginUser',
        data: {
          email: $scope.mail,
          password: $scope.pass,
          gethash: true
        }
      }).then(function successCallback(response) {
        console.log(response.data);
      }, function errorCallback(response) {
        console.log(response);
      });
    };
  });
