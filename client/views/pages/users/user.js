Template.user.helpers({
	user: function() {
		var id = Router.current().params.id;
		console.log(id);
		return Users.findOne({_id: id});
	}

});

Template.user.events({
	'submit .add-roles': function(event) {
		// console.log(event.target.roles.options);
		// console.log($('#roles').val());
		var options = {
			id: Router.current().params.id,
			roles: $('#roles').val()
		}
		console.log(options);
		Meteor.call("addRoles", options, function(error, result){
			if(error){
				toastr.error("error", error.reason);
			}
			else {
				if(result.type){
					toastr.success(result.type, result.message);
				}
				else{
					toastr.error(result.type, result.message);
				}
			}
		});
		return false;
	}
});
