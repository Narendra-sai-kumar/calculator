var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http, $timeout) {
	
$scope.res = {}
$scope.res.display = '';
$scope.power_mode = 'on';

$scope.get_time_value = function (){

	var date = new Date();
	var hh = date.getHours().toString();
	var mm = date.getMinutes();
	var ss = date.getSeconds();
	var am_pm = "AM";
	if(hh > 12){
		hh = hh -12;
		 am_pm = "PM";
	}
	
	if(hh == 0){
		hh = 12;
		
	}
	
	hh = (hh < 10)?  '0' +hh: hh;
	mm = (mm < 10)?  '0' +mm: mm;
	ss = (ss < 10)?  '0' +ss: ss;
	$scope.res.time_ = hh +":"+ mm + ":" +ss + " "+  am_pm;
	var t = $timeout(function(){ $scope.get_time_value() }, 1000);

}
$scope.get_time_value();

function myTimer() {
  const date = new Date();
  $scope.res.time_  = date.toLocaleTimeString();
}


$scope.num_click = function(data){
	
	if(data == '='){
		$scope.res.display = eval($scope.res.display);;
	}else if(data == 'Clear'){
		$scope.res.display = 0;	
	} 
	else if(data == 'X'){
		var removed_value = $scope.res.display.toString();
		var length = removed_value.length;
		$scope.res.display = removed_value.substring(0, length-1);;	
	}
	else if(data == 'square'){
		if ($scope.res.display) {
			// document.getElementById('myInput').value = Square(${number});
			$scope.res.display = Math.pow(parseFloat($scope.res.display), 2);
			//$scope.res.display = ${$scope.res.display}^2;
		} else {
			window.alert("Enter the number");
		}
	}
	else if (data == 'root') {
		if ($scope.res.display) {
			$scope.res.display = Math.sqrt(parseFloat($scope.res.display));
		} else {
			window.alert("Enter the number");
		}
	}
	else if(data == '+' || data == '-'  || data == '*' || data == '/'|| data == '%' ){
		if($scope.res.display){
			$scope.res.display +=  data;
		}else{
			window.alert("Enter the numbers");
		}	
	}
	else if(data == '.'){
		if($scope.res.display){
			$scope.res.display += data;
		}else{
			$scope.res.display = data;
		}
		
	}
	else if(typeof(Number(data)) == 'number'){
		if($scope.res.display){
			$scope.res.display += data;
		}else{
			$scope.res.display = data;
		}
	}
}

$scope.power_button = function(data){
	
	 var buttons = document.querySelectorAll('button');
      var inputs = document.querySelectorAll('input');
      var powerElement = document.getElementById('power');
      var inputDisplayElement = document.getElementById('input-display');


	if(data == 'on'){
		//var element = document.getElementById("input-display");	
		//element.setAttribute("style", "background-color:black");
		$scope.power_mode = 'off';
		/* $("button").css("background-color", "black");
		 $("button").css("color", "black");
		 $("input").css("background-color", "black");
		 $("input").css("color", "black");
		 $("#power").css("background-color", "green");*/
		 


      buttons.forEach(function (button) {
        button.style.backgroundColor = 'black';
        button.style.color = 'black';
      });

      inputs.forEach(function (input) {
        input.style.backgroundColor = 'black';
        input.style.color = 'black';
      });

      powerElement.style.backgroundColor = 'green';
      
	}else if(data == 'off'){
		 var displayElement = document.getElementById('input-display');
		$scope.power_mode = 'on';
		$scope.res.display = '';
		/* $("button").css("background-color", "#282A3A");
		 $("button").css("color", "white");
		 $("input").css("background-color", "#5c5208");
		 $("input").css("color", "white");
		 $("#power").css("background-color", "red");
		 var element = document.getElementById("input-display");
		element.setAttribute("style", "background-color:#ebdd88");*/
		
	  buttons.forEach(function (button) {
        button.style.backgroundColor = '#282A3A';
        button.style.color = 'white';
      });

      inputs.forEach(function (input) {
        input.style.backgroundColor = '#5c5208';
        input.style.color = 'white';
      });
		
	  displayElement.style.color = 'black';
		
      powerElement.style.backgroundColor = 'red';
      inputDisplayElement.style.backgroundColor = '#ebdd88';
		
	}	
}

var ele = document.getElementById("checkboxid");

ele.addEventListener("change", () => {
	document.body.classList.toggle("dark");
}) 
	
});