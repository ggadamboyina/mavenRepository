var myapp = angular.module('myapp', []);
 myapp.controller('mainController', function ($scope,$http,$window,$location) {
     // function to submit the form after all validation has occurred 
     $scope.submitForm = function () {
     
     // Set the 'submitted' flag to true
    // $scope.submitted = true;
     
     if ($scope.userForm.$valid) {
	 
     alert("Form is valid!");
	   var name=$scope.name;
		var pwd=$scope.password;
		var email=$scope.email;
	 alert(name);
	  alert(pwd);
	  alert(email);
	  $http.get('http://localhost:8081/reg?name='+name+ '&pwd='+pwd+'&email=' +email)
  .then(function(response) {
    if(response.status==200)
	{
    	alert("hello");
        $window.location.href ="registrationSuccess.html";
		}
	  });
     }
     else {
     alert("Please correct errors!");
     }
     }; 
    });
	
	
	
	var myapp1 = angular.module('myApp1', []);
	myapp1.controller('myCtrl1', function ($scope,$http,$window,$location) {
     // function to submit the form after all validation has occurred 
     $scope.submit = function () {
     
     $window.location.href ="login.html";
     }; 
    });
	
	
	
	var myapp2 = angular.module('myApp2', []);
	myapp2.controller('myCtrl2', function ($scope,$http,$window,$location) {
		alert("up");
       $scope.submit = function () {
     
     $window.location.href ="updateProfile.html";
     }; 
	 
    });
	
	
	
	var myapp3 = angular.module('myApp3', []);
	myapp3.controller('myCtrl3', function ($scope,$http,$window,$location) {
		alert("up1");
       $scope.submit = function () {
        var fname=$scope.fname;
		var dob=$scope.dob;
		var gender=$scope.gender;
        var lname=$scope.lname;
		var city=$scope.city;
		var zip=$scope.zip;
		var addr=$scope.addr;
		$http.get('http://localhost:8081/update?fname='+fname+ '&lname='+lname+'&dob=' +dob+'&gender='+gender+'&city='+city+'&zip='+zip+'&addr='+addr)
  .then(function(response) {
      if(response.status==200)
	    {
			if(response.data=="true")
			{
         alert("updated");
		 $window.location.href ="updateSuccess.html";
			}
		}
	  });
		
		
		
		
     }; 
    });
	
	
	var myapp4 = angular.module('myApp4', []);
	myapp4.controller('myCtrl4', function ($scope,$http,$window,$location) {
     // function to submit the form after all validation has occurred 
     $scope.submit = function () {
     
     $window.location.href ="loginSuccess.html";
     }; 
    });