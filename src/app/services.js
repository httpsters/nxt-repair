angular.module("appServices", [])

.service("appState", function() {
	var booking = {
		garage: null,
		appt: null
	};

	var quote = {};

	var userProfile = {
		name: "Adriana Lima",
		credits: 5,
		license: "ABCD-123",
		phone: "123-456-7890",
		email: "alima@vs.com",
		history: [
			{ type: "repair", subject: "bodywork", date: '2014-10-01' },
			{ type: "maintenance", subject: "oil", date: '2014-08-05' },
			{ type: "repair", subject: "engine", date: '2014-03-21' },
		]
	};

	return {
		bookGarage: function(garage, appt) {
			console.log("booked garage", garage, "for appt", appt);
			booking.garage = garage;
			booking.appt = appt;
		},
		submitQuote: function() {
			console.log('submit quote');
		},
		updateUserProfile: function(obj) {
			console.log('updateUserProfile', obj, userProfile);
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					var val = obj[key];
					userProfile[key] = val;
				}
			}
			console.log(userProfile);
		},
		getUserProfile: function() {
			return userProfile;
		}
	};
});
