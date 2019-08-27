import fs from 'fs';
Router.configure({
    layoutTemplate:'layout',
	yieldTemplates: {
	// 	myHeader: {to: 'header'},
		navigation: {to: 'nav'}
	// 	myFooter: {to: 'footer'}
	}
});
AccountsTemplates.configure({
    defaultLayout: 'layout',
});
// Router.map(function(){
//     this.route('home', {
//         path            :   '/',
//         template        :   'home',
//         redirectOnLogin :   true
//     })
// })

Router.route('/', {
    template: 'home',
    waitOn: function() {
        return Meteor.subscribe('findMessages'), Meteor.subscribe('userStatus'), Meteor.subscribe('channels');
    },
    data: function() {
        return Messages.find(), Meteor.users.find();
    },
    action: function() {
        this.render();
    }
});

AccountsTemplates.configureRoute('signIn');

Router.route('/blog', {
    template: 'blog',
    waitOn: function() {
        return Meteor.subscribe('findPosts');
    },
    data: function() {
        return Posts.find(), Meteor.users.find();
    },
    action: function() {
        this.render();
    }
});

Router.route('/blog/create',{
    template: 'blogCreate',
    action: function()  {
        this.render();
    }
});


Router.route("media", {
	where: 'server',
	path: '/media/:path',
	action:function(){
		var path = this.params.path;
	   var basedir = '../../../../../public/media/';

	   console.log('will serve static content @ '+ path);

	   var file = fs.readFileSync(basedir + path);

	 var headers = {
	   'Content-type': 'image/png',
	   'Content-Disposition': "attachment; filename=" + path
	 };

	 this.response.writeHead(200, headers);
	 return this.response.end(file);
	}
});

// Router.route('/blog/update/:id', {
//     // template:'blogEdit',
// 	waitOn: function() {
// 		return Meteor.subscribe("findOnePost", this.params.id);
// 	},
// 	// data: function() {
// 	// 	var params = this.params;
// 	// 	var id = params._id;
// 	// 	return Posts.findOne({_id:id});
// 	// },
// 	// action: function() {
// 	// 	this.render('blogEdit');
// 	// }
// 	data: function() {
// 		var id = this.params.id;
// 		return Posts.findOne({_id:id});
// 	},
// 	action: function() {
// 		this.render('blogEdit');
// 	}
// });

Router.route('/users', {
    template: 'users',
    waitOn: function() {
        return Meteor.subscribe('findUsers');
    },
    data: function() {
        return Users.find();
    },
    action: function() {
        this.render();
    }
});

Router.route('/user/:id', {
    template: 'user',
    waitOn: function() {
        return Meteor.subscribe('findOneUser', this.params.id);
    },
    data: function() {
        return Users.find();
    },
    action: function() {
        this.render();
    }
});

Router.route("/admin", {
	template: 'admin',
	data: function() {
		return Users.find();
	},
	action: function() {
		this.render();
	}
});
