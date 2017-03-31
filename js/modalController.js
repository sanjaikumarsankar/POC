
myApp.controller("modalController", ["$scope", "$http", "$uibModalInstance", "deleteItem", function ($scope, $http, $uibModalInstance, deleteItem) {
	
	$scope.init = function () {
		$scope.firstname = deleteItem.firstName;
	};
	
	$scope.deleteEmployee = function () {
		$scope.deleteEmployeeDetails(deleteItem);
	};
	
	// Delete the record of selected employee
	$scope.deleteEmployeeDetails = function (deleteItem) {
		$http({
			method: 'POST',
			url: '/employee/delete',
			data: deleteItem
		}).then(function success(response) {
			$uibModalInstance.dismiss('cancel');
		}, function error(response){
			console.log('error');
		});		
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
	
	$scope.init();

}]);