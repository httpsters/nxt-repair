angular.module('repairControllers', [])

.controller('StartController', [ '$scope', '$http', '$window', '$sce', '$location', function ($scope, $http, $window, $sce, $location) {

}])

.controller('GaragesController', function ($scope, $http, $window, $location, appState) {

	$scope.garages = [
		{name: "Joe's Garage", img: "garage1.jpg", desc: "Certified Drive Clean Test and Repa" },
		{name: "Vinsetta Garage", img: "garage2.jpg", desc: "Independently owned and family op" },
		{name: "Masters Garage", img: "garage3.jpg", desc: "Masters Garage has been providing a" },
		{name: "Winsdor Garage", img: "garage4.jpg", desc: "Highest standards, dedicated mechanics" },
		{name: "George's Auto Repair", img: "garage5.jpg", desc: "Garage repair and serive to custom" },
		{name: "RPR Garage", img: "garage7.jpg", desc: "12 mechanics working to give you " },
	];

	$scope.selectedGarage = undefined;

	$scope.selectGarage = function(garage, idx) {
		$scope.selectedGarage = garage;
	};

	$scope.bookGarage = function(date) {
		appState.bookGarage($scope.selectedGarage, date);
		$location.path('quote');
	};

})

.controller('DatepickerDemoCtrl', function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
})

.controller('TimepickerDemoCtrl', function ($scope) {
  $scope.mytime = new Date();

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours( 14 );
    d.setMinutes( 0 );
    $scope.mytime = d;
  };

  $scope.changed = function () {
    console.log('Time changed to: ' + $scope.mytime);
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };
})

.controller('InfoController', function ($scope, $http, $window, $location, appState) {

	$scope.submitPayment = function() {
		$location.path('quote');
	};

})

.controller('QuoteController', function ($scope, $http, $window, $location, appState) {

	$scope.submitQuote = function() {
		appState.submitQuote();
		$location.path('payment');
	};

	$scope.garages = [
		{name: "Tire Replacement", img: "tire.jpg", desc: "$245.00" },
		{name: "Muffler", img: "muffler.jpg", desc: "$300.00" },
		
	];
})

.controller('PaymentController', function ($scope, $http, $window, $location, appState) {

	$scope.submitPayment = function() {
		$location.path('profile');
	};

})

.controller('ProfileController', function ($scope, $http, $window, $location, appState) {

	$scope.userProfile = {
		name: "Adriana Lima", 
		credits: 5,
		history: [
			{ type: "repair", subject: "bodywork", date: '2014-10-01' },
			{ type: "maintenance", subject: "oil", date: '2014-08-05' },
			{ type: "repair", subject: "engine", date: '2014-03-21' },
		]
	};

})

;
