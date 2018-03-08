angular.module('myServices', ['ngResource'])
	.factory('resourceContact', function($resource){
		return $resource('/v1/contacts/:contactId', null, {
			'update':{
				method: 'PUT'
			}
		});
	})
	.factory('registerContact', function(resourceContact, $q){
		var service = {};

		service.register = function (contact) {
			console.log(contact);

			return $q(function(resolve, reject) {

				if (contact._id) {
					resourceContact.update({contactId: contact._id}, contact, function() {
						resolve({
							message: 'contact ' + contact.name + ' updated',
							inclusion: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							message: 'It is not possible to update the ' + contact.name
						});
					});
				} else {
					resourceContact.save(contact, function() {
						resolve({
							message: 'contact ' + contact.name + ' registered with success',
							inclusion: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							message: 'It is not possible to register ' + contact.name
						});
					});

				}
			})
		}

		return service;
	});
