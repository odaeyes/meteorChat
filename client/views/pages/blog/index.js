Template.blog.helpers({
    posts() {
        Meteor.subscribe('findPosts');
        return Posts.find();
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
	
});
// Template.blog.events({
// 	'click .blogEdit' (event, blog)	{
// 		var blogToEdit = Posts.findOne(blog.data);
// 		var id = blogToEdit._id;
//
// 	}
// });
