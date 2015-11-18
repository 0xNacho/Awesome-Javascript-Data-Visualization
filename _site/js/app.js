var app = angular.module('app',[]);

app.controller('MainController', ['$scope', function($scope){
	$scope.show = {};
	$scope.show.HighCharts = true;
	$scope.show.amCharts = true;
	$scope.show.nvD3 = true;


	$scope.toggle = function(lib){
		if($scope.show == null) $scope.show = {};
		for(var key in $scope.show)
			$scope.show[key] = false;
		$scope.show[lib] = true;
	};

}]);