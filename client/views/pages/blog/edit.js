Template.blogEdit.helpers({

});

Template.blogEdit.events({
	"submit .edit-post": function(event){

		// Get value from form element
		const title = event.target.title.value;
		const texte = event.target.texte.value;
		const id = event.target.id.value;
		// Insert a post into the collection
		Meteor.call("updatePost", title, texte, id);

	}
});
