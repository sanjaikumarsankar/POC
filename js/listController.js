myApp.controller("listController", ["$scope", "$location", "$http", "$routeParams", "$rootScope", "$uibModal", function ($scope, $location, $http, $routeParams, $rootScope, $uibModal) {

	$scope.data = [{
		id: '',
		firstName: '',
		lastName: '',
		email: '',
		position: ''
	}];
	
	// Call on page load
	$scope.init = function () {
		$scope.fetchEmployeeDetails();
	};
	
	// Fetch all the employee details
	$scope.fetchEmployeeDetails = function () {
		$http({
			method: 'GET',
			url: '/employee'
		}).then(function success(response) {
			console.log(response);
			$scope.data = response.data.data;
			$rootScope.employeeData = response.data.data;
		}, function error(response){
			console.log('error');
		});		
	};
	
	// Display confirm dialog box to delete
	$scope.deleteEmployee = function (currentData) {
		var modalInstance = $uibModal.open({
			templateUrl: 'employee_modal.html',
			controller: 'modalController',
			resolve: {
				deleteItem: function () {
					return currentData;
				}
			}
		});
		modalInstance.result.then(function () {
		}, function () {
			$scope.init();
		});		
	};
	
	$scope.init();
	
}]);