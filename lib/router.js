

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
        return Meteor.subscribe('findMessages');
    },
    data        :   function(){
        return Messages.find();
    },
    action      :   function(){
        this.render();
    }
})
