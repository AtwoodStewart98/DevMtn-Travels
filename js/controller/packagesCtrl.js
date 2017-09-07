angular
  .module("devmtnTravel")
  .controller("packagesCtrl", function($scope, mainSrv, $stateParams) {
    $scope.packageInfo = mainSrv.packageInfo;
    if ($stateParams.country) {
      $scope.packageInfo = mainSrv.packageInfo.filter(function(randoVal) {
        if (randoVal.country === $stateParams.country) {
          return randoVal;
        }
      });
    }
  });
