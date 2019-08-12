Template.home.helpers({
    messages() {
        if(Session.get('channel')){
        Meteor.subscribe('findMessages', Session.get('channel'));
        return Messages.find({channel:Session.get('channel')});
    }},
    userState(){
        Meteor.subscribe('userStatus');
        return Meteor.users.find({ "status.online": true });
    },
    channels() {
        return Channels.find();
    },
    active() {
        if (Session.get('channel') === this.name) {
            return "btn-primary";
        } 
        else {
            return "btn-secondary";
        }
    }
});
  
Template.home.events({
    'submit .new-message'(event) {
        // Prevent default browser form submit
        event.preventDefault();
  
        // Get value from form element
  
        const text = event.target.text.value;
        var channel= Session.get('channel');
        // Insert a message into the collection
        Meteor.call("sendMessage", text, channel);
        // Clear form
        event.target.text.value = '';
  
        // scroll to last message
        $('.panel-body').scrollTop($('.media-list').height())
    },
    'click .channel': function (event) {
        Session.set('channel', this.name);
        console.log(this.name);
      
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

Template.blog.helpers({
    posts() {
        Meteor.subscribe('findPosts');
        return Posts.find();
    },
    isEqual: function(a,b)  {
        return a == b;
    }
})
Template.blogCreate.events({
    'submit .new-post'  (event) {
        // Prevent default browser form submit
        event.preventDefault();
  
        // Get value from form element
        const title = event.target.title.value;
        const texte = event.target.texte.value;
        // Insert a post into the collection
        Meteor.call("createPost", {texte, title});
        // Clear form
        event.target.texte.value = '';
        event.target.title.value = '';
    }
})