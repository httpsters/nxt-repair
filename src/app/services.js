angular.module("appServices", [])

.service("appState", function($firebase) {

	var rootUrl = 'https://nxt-repair.firebaseio.com/';
	var rootRef = new Firebase(rootUrl);
	var rootSync = $firebase(rootRef);

	var userUrl = rootUrl += 'users/';
	var userRef = new Firebase(userUrl);
	var userSync = $firebase(userRef);

	var booking = {
		garage: null,
		appt: null
	};

	var quote = {};

	var userObject = {
		name: "Adriana Lima",
		credits: 5,
		license: "ABCD-123",
		phone: "123-456-7890",
		email: "alima@vs.com",
		password: "password",
		history: [
			{ type: "repair", subject: "bodywork", date: '2014-10-01' },
			{ type: "maintenance", subject: "oil", date: '2014-08-05' },
			{ type: "repair", subject: "engine", date: '2014-03-21' },
		]
	};

	var addUser = function(newUser) {
		userSync.$push(newUser).then(function(createdUser) {
			console.log("added new user", createdUser);
		});
	};

	//addUser(userObject);

	return {
		bookGarage: function(garage, appt) {
			console.log("booked garage", garage, "for appt", appt);
			booking.garage = garage;
			booking.appt = appt;
		},
		submitQuote: function() {
			console.log('submit quote');
		},
		getProfileFromProvisionId: function(provId) {
			/* queries firebase for the profile with provisionId = provId */
			return userObject;
		},
		updateUserProfile: function(obj) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					var val = obj[key];
					userObject[key] = val;
				}
			}
		},
		getUserProfile: function(email, password) {
			id = '-JYW4Ym6W6e8yW5Ck3JY';
			url = rootUrl+'users/'+id;
			return $firebase(new Firebase(url));
		}
	};
});
