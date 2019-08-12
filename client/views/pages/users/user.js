Template.user.helpers({
	user: function(){
		var id = Router.current().params.id
		console.log(id);
		return Users.findOne({_id: id});
	},
	salut: function(val){

	}
});
