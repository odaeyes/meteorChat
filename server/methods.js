import { Roles } from 'meteor/alanning:roles'



Meteor.methods({
    sendMessage: function (messageText, channel) {
      /* add authentication here */

      Messages.insert({
        text: messageText,
        createdAt: new Date(),
        owner: Meteor.userId(),
        username: Meteor.user().username,
        channel: channel
      });
    },

    delMessage: function(delId) {
      var delMessage = Messages.findOne(delId);
      var currentUser = Meteor.userId();
      // console.log('method', delMessage);
      if(currentUser != delMessage.owner){
        throw new Meteor.Error("invalid-user", "You are not the owner of this message")
      }
      Messages.remove({
        _id: delId
      })
    },

    createPost: function(title, texte) {
      Posts.insert({
        title: title,
        texte: texte,
        createdAt: new Date(),
        owner: Meteor.userId(),
        creator: Meteor.user().username,


      })
    },

    updatePost: function(title, texte, id) {
      Posts.update({
        _id: id
      },{
        $set: {
          title: title,
          texte: texte,
          editedAt: new Date(),
		  editedBy: Meteor.userId(),
        }
      })
  	},

	delPost: function(arg) {
      var delPost = Posts.findOne(arg._id);
      var currentUser = Meteor.userId();
      // console.log('method', delPost);
      if(currentUser != delPost.owner){
        throw new Meteor.Error("invalid-user", "You are not the owner of this message")
      }
      	let removed = Posts.remove({
        	_id:  arg._id
		});

		console.log();

		if(removed > 0)
			return { type: "success", message: "Le message a été supprimé" };
		else
			return { type: "error", message: "Problème lors de la suppression du message" };
    },

	addRole: function(arg) {


		Roles.addUsersToRoles(arg.userId, [arg.role], 'default')
	}
});
