var myApp = angular.module('myApp', ['ui.bootstrap']);

myApp.controller('thumbCtrl', function($scope){
	$scope.images = [
	{
		source: "image1",
		caption: "Unconformity between the Pio Nono Formation and underlying saprolite"
	},
	{
		source: "image2",
		caption: "Tallulah Falls Dam"
	},
	{
		source: "image3",
		caption: "Gully erosion in weathered phyllite near Cartersville, Georgia"
	},
	{
		source: "image4",
		caption: "Cypress Island Preserve"
	},
	{
		source: "image5",
		caption: "Drag fold in metaquartzite"
	},
	{
		source: "image6",
		caption: "Paleozoic strata near Beulah, Wyoming"
	},
	{
		source: "image7",
		caption: "Cenozoic strata of The Castles, North Dakota"
	},
	{
		source: "image8",
		caption: "Conglomerates of Hance Creek in Grand Canyon"
	}
	];
})

myApp.controller('modalCtrl', function($scope, $uibModal) {

	$scope.open = function(i) {
		var modalInstance = $uibModal.open({
			controller: 'modalInstanceCtrl',
			size: 'lg',
			resolve: {
				cities: function() {
					return $scope.cities[i];
				}
			}
		});
	}
})

myApp.controller('modalInstanceCtrl', function($scope, $uibModalInstance){

	$scope.cities = cities;

	$scope.cancel = function () {
    	$uibModalInstance.dismiss('cancel');
 	};
})