angular.module("app").controller("mainController", ["$scope","$window",
    function($scope,$window){
        $scope.message = "mensaje predefinido";
        $scope.myData ="mensaje nuevo";
}]);