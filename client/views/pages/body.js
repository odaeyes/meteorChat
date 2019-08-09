
Template.home.helpers({
  messages() {
    Meteor.subscribe('findMessages');
    return Messages.find();
  },
});

Template.home.events({
  'submit .new-message'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element

    const text = event.target.text.value;

    // Insert a message into the collection
    Meteor.call("sendMessage", text);
    

    // Clear form
    event.target.text.value = '';

    // scroll to last message
    $('.panel-body').scrollTop($('.media-list').height())
  }
});
Template.message.helpers({
  isEqual: function(a,b){
    // console.log('A', a, "B", b);
    
    return a == b;
  }
})
Template.message.events({
  'click .delete'(event, t)  {
    
    var selMessage=Messages.findOne(t.data);
    console.log(selMessage);
    
    var delId = selMessage._id;
    Meteor.call("delMessage", delId);
  }
})