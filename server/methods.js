

Meteor.methods({
    sendMessage: function (messageText) {
      /* add authentication here */
  
      Messages.insert({
        text: messageText,
        createdAt: new Date(),
        owner: Meteor.userId(),
        username: Meteor.user().username,
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
    }
  });