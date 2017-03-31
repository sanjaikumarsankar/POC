myApp.controller("viewController", ["$scope", "$location", "$routeParams", "$rootScope", function ($scope, $location, $routeParams, $rootScope) {

	$scope.selectedEmployee = {};
	
	$scope.init = function () {
		$scope.viewEmployeeDetails();
	};
	
	$scope.viewEmployeeDetails = function () {
		angular.forEach($rootScope.employeeData, function (value) {
			 if (value.id === parseInt($routeParams.id)) {
				 $scope.selectedEmployee = value;
			 }
		});	
	};
	
	$scope.backToHome = function () {
		$location.path('/');
	};
	
	$scope.init();
	
}]);