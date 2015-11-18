var app = angular.module('app',[]);

app.controller('MainController', ['$scope', function($scope){
	$scope.show = null;

	$scope.toggle = function(lib){
		if($scope.show == null) $scope.show = {};
		for(var key in $scope.show)
			$scope.show[key] = false;
		$scope.show[lib] = true;
	};

}]);