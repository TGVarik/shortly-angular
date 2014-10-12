angular.module('shortly.nav', [])

.controller('NavController', function ($scope, $location, Auth) {
  $scope.isAuth = Auth.isAuth;
  $scope.isSelected = function(path){
    return ($location.path() === path);
  };
  $scope.signout = Auth.signout;
});
