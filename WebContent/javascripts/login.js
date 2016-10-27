var myapp = angular.module('myapp', []);
 myapp.controller('mainController', function ($scope,$http,$window,$location) {
     // function to submit the form after all validation has occurred 
     $scope.submitForm = function () {
     
     // Set the 'submitted' flag to true
    // $scope.submitted = true;
     
     if ($scope.userForm.$valid) {
	 
     alert("Form is valid!");
	 var pwd=$scope.password;
     var email=$scope.email;
	  $http.get('http://localhost:8081/log?email=' +email + '&pwd=' +pwd)
     .then(function(response) {
      if(response.status==200)
	   {
		   
    	  if(response.data==="valid") //modified
		   {
    		  alert("true");
		    $location.path("/loginSuccess"); //modified
		   }
	       else{
	    	   alert("false");
	    	   $window.location.href="/loginSuccess"; //modified
	       }
		}
	  }); 
     }
     else {
     alert("Please correct errors!");
     }
     };
	 
	 $scope.regForm = function () {
     
     // Set the 'submitted' flag to true
     $scope.submitted = true;
	 alert("hai");
	  $window.location.href ="registrationPage.html";
	  } 
    });