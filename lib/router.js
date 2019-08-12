

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
        this.render('home');
    }
})
Router.route('/blog', {
    template    :   'blog',
    waitOn      :   function(){
        return Meteor.subscribe('findPosts');
    },
    data        :   function(){
        return Posts.find(), Meteor.users.find();
    },
    action      :   function(){
        this.render('blog');
    }
})
Router.route('/blog/create',{
    template    :   'blogCreate',
    action      :   function()  {
        this.render('blogCreate')
    }
})
Router.route('/blog/update/:id',{
    template    :   'blogEdit',
})