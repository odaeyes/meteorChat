Template.message.events({
    'click .delete'(event, t)  {
        var selMessage=Messages.findOne(t.data);
        console.log(selMessage);

        var delId = selMessage._id;
        Meteor.call("delMessage", delId);
    }
})
