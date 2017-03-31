myApp.directive("heading", function () {

	return  {
		restrict: 'E',
		template: "<h3 class='heading'>Company Address Book</h3>",
		scope: {
			title : "=name"
		},
		link: function (scope, element, attrs) {
			
		}
	}
});