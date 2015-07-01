var UserModel = Backbone.Model.extend({
	defaults: {
		name: 'Marcus Doe',
		email: 'mdoe@gmail.com',
		role: 'Developer'
	},
	urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/here-you-go-logan',
	idAttribute: '_id'

});