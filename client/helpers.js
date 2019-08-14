Template.registerHelper("isEqual", function(a, b){
	return a == b;
});

Template.registerHelper("isInRole", function(role){
	return Roles.userIsInRole(Meteor.user(), [role], "default");
});
Template.registerHelper("selectedIfIsInRole", function(user, role){
	return Roles.userIsInRole(user, [role], "default")?"selected":"";
});
