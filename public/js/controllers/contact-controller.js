angular.module('myApp')
	.controller('ContactController', function($scope, $routeParams, resourceContact, registerContact) {

		$scope.contact = {};
		$scope.message = '';

        if($routeParams.contactId) {
            resourceContact.get({contactId: $routeParams.contactId}, function(contact) {
                $scope.contact = contact; 
            }, function(erro) {
                console.log(erro);
                $scope.message = 'It is not possible to get the contact.'
            });
        }

		$scope.submitForm = function() {

			if ($scope.formContact.$valid) {
				registerContact.register($scope.contact)
				.then(function(dados) {
					$scope.message = dados.message;
					if (dados.inclusao) $scope.contact = {};
				})
				.catch(function(erro) {
					$scope.message = erro.message;
				});
			}
		};
	});