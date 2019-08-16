Template.login.events({
	"submit .login-form": function(event, template){
		Meteor.loginWithPassword(event.target.login.value,event.target.password.value);
		 // Meteor.call("connection", options, function(error, result) {
			//  if(error) {
			// 	 toastr.error("error", error.reason);
			//  }
			//  else {
			// 	 if(result.type) {
			// 		 toastr.success(result.type, result.message);
			// 	 }
			// 	 else {
			// 		 toastr.error(result.type, result.message);
			// 	 }
			//  }
		 // });
	}
});
