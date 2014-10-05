var AndroidInterop = AndroidInterop || undefined;

angular.module('repairControllers', [])

.controller('StartController', [ '$scope', '$http', '$window', '$sce', '$location', function ($scope, $http, $window, $sce, $location) {

}])

.controller('GaragesController', function ($scope, $http, $window, $location, appState) {

	$scope.garages = [
		{name: "Joe's Garage", img: "garage1.jpg", desc: "Certified Drive Clean Test and Repairs" },
		{name: "Vinsetta Garage", img: "garage2.jpg", desc: "Independently owned and family operated" },
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
		$location.path('info');
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

	var findNymi = function() {
		var received = "NymiProvisionID NymiProvisionKey";
		var provisionId = receivedData.split(' ')[0];
		var provisionKey = receivedData.split(' ')[1];
		var userProfile = appState.getProfileFromProvisionId(provisionId);
		$scope.profile = userProfile;
	};

	$scope.profile = appState.getUserProfile();

	$scope.getQuote = function() {
		appState.updateUserProfile($scope.profile);
		$location.path('quote');
	};

	$scope.pairNymi = function() {
		console.log("pairing with Nymi");
		console.log("paired!");
		var receivedData = "NymiProvisionID NymiProvisionKey";
		var provisionId = receivedData.split(' ')[0];
		var provisionKey = receivedData.split(' ')[1];
		$scope.profile.nymiProvisionId = provisionId;
		$scope.profile.nymiProvisionKey = provisionKey;
	};

})

.controller('QuoteController', function ($scope, $http, $window, $location, appState) {

	$scope.userProfile = appState.getUserProfile();

	$scope.userProfile.credit += 5; // add $5 of credit each time

	$scope.submitPayment = function() {
		for(var i = 0; i<$scope.quoteItems.length; i++){
			$scope.totalAmt += $scope.quoteItems[i].amt;
		}
		
		if (AndroidInterop !== undefined) {
			console.log("interop is defined", AndroidInterop);
			AndroidInterop.processPaymentAmount($scope.totalAmt);
		}
		$location.path('profile');
	};

	$scope.submitQuote = function() {
		$scope.submitted = true;
		// send confirm to backent :P
	};

	$scope.kill = function(index) {
		console.log(index);
		$scope.quoteItems.splice(index, 1); //remove item from list
	};

	$scope.quoteItems = [
		{name: "Tire Replacement", img: "tire.jpg", desc: "$245.00" , amt: 245.00},
		{name: "Muffler", img: "muffler.jpg", desc: "$300.00", amt: 300.00 },

	];
})

.controller('ProfileController', function ($scope, $http, $window, $location, appState) {

	$scope.userProfile = appState.getUserProfile();

})

;
