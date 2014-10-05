angular.module("appServices", [])

.service("appState", function() {
	var booking = {
		garage: null,
		appt: null
	};
	
	return {
		bookGarage: function(garage, appt) {
			console.log("booked garage", garage, "for appt", appt);
			booking.garage = garage;
			booking.appt = appt;
		}
	};
});
