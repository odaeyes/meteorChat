Template.blogEdit.helpers({
	blog: function() {
		console.log(this);
		return Posts.findOne({_id:this.id});

	},
	edit: function(){
		return Session.get("edit");
	}

});

Template.blogEdit.events({
	"submit .edit-post": function(event){
		event.preventDefault();
		// Get value from form element
		var options= {
			id: event.target.id.value,
			title: event.target.title.value,
			texte: event.target.texte.value
		}
		// update the post into the collection
		Meteor.call("updatePost", options, function(error, value){
			if(error){
				toastr.error("error", error.reason);
			}
			else{
				if(value){
					toastr.success(value.type, value.message);
					$(".edit-post")[0].reset();
				}
				else{
					toastr.error(value.type, value.message);
				}
			}
		});

	}
});
