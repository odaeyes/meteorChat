
Meteor.startup(() => {
  // code to run on server at startup
  if (Channels.find().count() === 0) {
    Channels.insertMany(
      {
        name: "Général"
      },
      {
        name: "Autre"
      }
    );

  };
  // while (Messages.find({channel:null})){
  //   Messages.update({
  //     channel: null
  //   },{
  //     $set: {
  //       channel: "Général"
  //   }
    
  //   })
  // }
});
Meteor.publish('findMessages',(channel)=>{
  if(channel){
  return Messages.find({channel:channel});
}})
/* Messages.allow({
  insert: function(userId, doc){
    return true;
  }
}) */
Meteor.publish("userStatus", function() {
  return Meteor.users.find({ "status.online": true });
});
Meteor.publish('channels', function () {
  return Channels.find();
});