var user = new UserModel();
var spnname = $('#spnname');
var spnrole = $('#spnrole');
var App = Backbone.Router.extend({

	routes: {
		'': 'home',
		'edit': 'edit',
	},
	profile: function() {
		$('.page').hide();
		$('#profile').show();
	},
	edit: function() {
		$('.page').hide();
		$('#edit').show();
	},
	home: function(){
		$('.page').hide();
		$('#home').show();
			}
});
$('#name').val (user.get('name'));
$('#inputEmail3').val (user.get('email'));
$('#role').val (user.get('role'));
// $('#inputPassword3').val (user.get('name'));

var app = new App();
Backbone.history.start();

$('#edituser').submit(inputform);

	function inputform(event){
		console.log (inputform)
		event.preventDefault();
		user.set({'name':$('#name').val()})
		user.set({'email':$('#inputEmail3').val()})
		user.set({'role':$('#role').val()})
		// $('#inputbox').val();
		// console.log ($('#inputbox').val());
		// var goToPage='search/'+($('#inputbox').val());
		// console.log (goToPage)
		// myRouter.navigate(goToPage,{trigger:true})

	}
	user.save();
user.on('change', function(newModel){
		console.log(newModel)
		spnname.text(user.get('name'));
		spnrole.text(user.get('role'));
		console.log('change'
		user.save();

	});
