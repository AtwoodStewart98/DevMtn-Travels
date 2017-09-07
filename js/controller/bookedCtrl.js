angular
  .module("devmtnTravel")
  .controller("bookedCtrl", function($scope, mainSrv, $state) {
    $scope.pullId = mainSrv.getpullId($state.params.id);
  });
