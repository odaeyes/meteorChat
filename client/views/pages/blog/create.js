Template.blogCreate.events({
    'submit .new-post'  (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const title = event.target.title.value;
        const texte = event.target.texte.value;
        // Insert a post into the collection
        Meteor.call("createPost", title, texte);
        // Clear form
        event.target.texte.value = '';
        event.target.title.value = '';
    }
})
