Template.blog.onCreated(function(){
	Session.set('edit', null);
	Session.set("creating", false);
});

Template.blog.helpers({
    posts() {
        Meteor.subscribe('findPosts');
        return Posts.find();
    },
	isEdit(){
		return Session.get("edit");
	},
	isCreating(){
		return Session.get("creating");
	}
})

Template.blog.events({
	'click .delete'(event, t)  {
		console.log(this);
		var options = {
			_id: this._id
		}
		Meteor.call("delPost", options, function(error, result){
			if(error){
				toastr.error("error", error.reason);
			}
			else{
				if(result.type){
					toastr.success(result.type, result.message);
				}
				else{
					toastr.error(result.type, result.message);
				}
			}
		});
		/*
        var selectedPost = Posts.findOne(t.data);
        console.log(selectedPost);

        var delId = selectedPost._id;
        Meteor.call("delPost", delId);*/
    },

	'click .blogEdit': function(event) {
		Session.set('edit', this);
		console.log(this);
		return false;
	},
	'click .addBlog': function(event) {
		Session.set("creating", !Session.get("creating"));
		console.log(Session.get("creating"));
		return false;

	}

});
// Template.blog.events({
// 	'click .blogEdit' (event, blog)	{
// 		var blogToEdit = Posts.findOne(blog.data);
// 		var id = blogToEdit._id;
//
// 	}
// });
