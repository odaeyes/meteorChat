Template.registerHelper("isEqual", function(a, b){
	return a == b;
});
Template.registerHelper("isInRole", function(role){
	return Roles.userIsInRole(Meteor.user(), [role], "default");
});
Template.registerHelper("selectedIfIsInRole", function(user, role){
	return Roles.userIsInRole(user, [role], "default")?"selected":"";
});
Template.registerHelper("canEdit", function(owner, role) {
	return Meteor.user()._id == owner || Roles.userIsInRole(Meteor.user()._id, [role], "default")
});
