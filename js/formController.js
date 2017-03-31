myApp.controller("formController", ["$scope", "$location", "$http", "$routeParams", "$rootScope", function ($scope, $location, $http, $routeParams, $rootScope) {

	// Call on page load
	$scope.init = function () {
		if ($routeParams.id) {
			$scope.fetchSelectedEmployee($routeParams.id);			
		}
		$scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{1,5}$/;
	};
	
	// Fetch the selected employee details
	$scope.fetchSelectedEmployee = function (id) {
		angular.forEach($rootScope.employeeData, function (value) {
			 if (value.id == parseInt(id)) {
				 $scope.formData = value;
			 }
		});		
	};
	
	$scope.reset = function () {
		$scope.resetFormData();
	};
	
	// Reset form data
	$scope.resetFormData = function () {
		$scope.formData = {
			firstName: '',
			lastName: '',
			email: '',
			position: ''
		}
	};
		
	$scope.submitForm = function (isValid) {
	    $scope.addEmployeeDetails();
	};
	
	// Http call for add and edit
	$scope.addEmployeeDetails = function () {
		var url = '';
		if ($routeParams.id) {
			url = '/employee/edit';
		} else {
			url = '/employee/add';			
		}
		$http({
			method: 'POST',
			url: url,
			data: $scope.formData
		}).then(function success(response) {
			$location.path('/');
		}, function error(response){
			console.log('error');
		});		
	};
	
	// Back to Home Page
	$scope.backToHome = function () {
		$location.path('/');
	};
	
	$scope.init();
	
}]);