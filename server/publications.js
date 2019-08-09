
Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.publish('findMessages',()=>{
  return Messages.find();
})
/* Messages.allow({
  insert: function(userId, doc){
    return true;
  }
}) */
Meteor.publish("userStatus", function() {
  return Meteor.users.find({ "status.online": true });
});