Template.users.helpers({
	users: function(){
		return Users.find({}, {sort:{username: 1} });
	}
});
