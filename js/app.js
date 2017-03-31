var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'employee_list.html',
        controller: 'listController'
      }).
      when('/add', {
        templateUrl: 'employee_form.html',
        controller: 'formController'
      }).
      when('/edit/:id', {
        templateUrl: 'employee_form.html',
        controller: 'formController'
      }).
      when('/view/:id', {
        templateUrl: 'employee_view.html',
        controller: 'viewController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);