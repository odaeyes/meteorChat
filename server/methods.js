

Meteor.methods({
    sendMessage: function (messageText, channel) {
      /* add authentication here */
  
      Messages.insert({
        text:       messageText,
        createdAt:  new Date(),
        owner:      Meteor.userId(),
        username:   Meteor.user().username,
        channel:    channel
      });
    },
    delMessage: function(delId)  {
      var delMessage = Messages.findOne(delId);
      var currentUser = Meteor.userId();
      // console.log('method', delMessage);
      if(currentUser != delMessage.owner){
        throw new Meteor.Error("invalid-user", "You are not the owner of this message")
      }
      Messages.remove({
        _id:  delId
      })
    },
    createPost: function({postData})  {
      Posts.insert({
        title:      postData.title,
        texte:      postData.text,
        createdAt:  new Date(),
        owner:      Meteor.userId(),
        creator:    Meteor.user().username,


      })
    },
    updatePost: function({postData})  {
      Posts.update({
        _id:    postData._id
      },{
        $set:   {
          title:    postData.title,
          texte:    postData.texte,
          editedAt: new Date()
        }
      })
    }
});