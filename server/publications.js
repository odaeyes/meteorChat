
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
