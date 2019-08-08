import { Messages } from "./collections/messages";

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
Router.route('/', function(){
    this.render('home', {data:  function(){
        return Messages.find();
    }});
})
