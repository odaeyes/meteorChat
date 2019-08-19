Template.layout.events({
	"click #logout": function(event, template){
		 event.preventDefault();
		 Meteor.logout();
	}
});
