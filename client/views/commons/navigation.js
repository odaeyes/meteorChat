Template.navigation.helpers({
	navigations: function() {
		Meteor.subscribe("findNavs");
		return Navigations.find();
	}
});
