var app = angular.module('app',[]);

app.controller('MainController', ['$scope', '$timeout', function($scope, $timeout){
	$scope.show = {};
	$scope.examples = 0;
	$scope.libraries = 0;
	$scope.toggle = function(lib){
		if($scope.show == null) $scope.show = {};
		for(var key in $scope.show)
			$scope.show[key] = false;
		$scope.show[lib] = true;
	};

	$scope.initialize= function(lib){
		$scope.examples++;
		$scope.show[lib] = true;
	};

	$scope.initializeLibrary = function(lib){
		$scope.libraries++;
	};

}]);