

Router.configure({
    layoutTemplate:'layout'
})

// Router.map(function(){
//     this.route('home', {
//         path            :   '/',
//         template        :   'home',
//         redirectOnLogin :   true
//     })
// })
Router.route('/', {
    template    :   'home',
    waitOn      :   function(){
        return Meteor.subscribe('findMessages'), Meteor.subscribe('userStatus'), Meteor.subscribe('channels');
    },
    data        :   function(){
        return Messages.find(), Meteor.users.find();
    },
    action      :   function(){
        this.render();
    }
})
Router.route('/blog',{
    template    :   'blog',
    waitOn      :   function(){
        return Meteor.subscribe('findPosts');
    },
    data        :   function(){
        return postMessage.find(), Meteor.users.find();
    },
    action      :   function(){
        this.render();
    }
})
Router.route('/blog/create',{
    template    :   'blogCreate',
})
Router.route('/blog/update/:id',{
    template    :   'blogEdit',
})