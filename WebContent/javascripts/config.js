var mainApp = angular.module("myapp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'mainController'
		})
		.when('/loginSuccess', {
			templateUrl: 'loginSuccess.html',
			controller: 'myCtrl2'
		})
		.when('/registrationPage', {
			templateUrl: 'registrationPage.html',
			controller: 'mainController'
		})
		.when('/registrationSuccess', {
			templateUrl: 'registrationSuccess.html',
			controller: 'myCtrl1'
		})
		.when('/updateProfile', {
			templateUrl: 'updateProfile.html',
			controller: '"myCtrl3"'
		})
		.when('/updateSuccess', {
			templateUrl: 'updateSuccess.html',
			controller: 'myCtrl4'
		})
		.otherwise('',{
			redirectTo: '/login'
		});

});
