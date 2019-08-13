Template.registerHelper("isEqual", function(a, b){
	return a == b;
});

Template.registerHelper("isInRole", function(role){
	return Roles.userIsInRole(Meteor.user(), [role], "default");
});
