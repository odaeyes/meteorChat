Template.user.helpers({
	user: function() {
		var id = Router.current().params.id;
		console.log(id);
		return Users.findOne({_id: id});
	}

});

Template.user.events({
	'submit .add-roles': function(event) {
		var id = Router.current().params.id;
		var selectedRoles = event.target.roles.value;
		console.log(id, selectedRoles);
		var roleUser={userId: id, role: selectedRoles};
		console.log(roleUser);
		Meteor.call("addRoles", roleUser, function(error, result){
			if(error){
				toastr.error("error", error.reason);
			}
			if(result.type){
				toastr.success(result.type, result.message);
			}
			else{
				toastr.error(result.type, result.message);
			}
		});
		return false;
	},
	'click .delete': function(event) {
		
		var selectedRoles = event.target.roles.value;
		var roleUser={userId: this._id, role: selectedRoles};
		console.log(roleUser);
		// Meteor.call("removeRoles", roleUser, function(error, result){
		// 	if(error){
		// 		toastr.error("error", error.reason);
		// 	}
		// 	if(result.type){
		// 		toastr.success(result.type, result.message);
		// 	}
		// 	else{
		// 		toastr.error(result.type, result.message);
		// 	}
		// });
	}
});
