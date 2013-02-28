'use strict';

/* Controllers */

function WineListCtrl($scope, Wine) {
  $scope.wines = Wine.query();
  
  $scope.$on('handleWinesChanged', function() {
      $scope.wines = Wine.query();
  });
  
//  $http.get('/api/wines').success(function(data) {
//      $scope.wines = data;
//  });
}


function WineDetailCtrl($scope, $routeParams, Wine) {
  $scope.wine = Wine.get({wineId: $routeParams.wineId});
  $scope.message = ''
  $scope.save = function() {
      if (this.wine) this.wine.$put({wineId: this.wine._id}, function() {
          $scope.$emit('winesChanged')
      });
  }
  
  $scope.delete = function() {
      this.wine.$delete({wineId: this.wine._id}, function() {
          $scope.$emit('winesChanged')
          window.location = "#/wines"
      })
  }
}

