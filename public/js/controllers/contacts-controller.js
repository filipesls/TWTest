angular.module('myApp').controller('ContactsController', function($scope, resourceContact){
    
    $scope.contacts = [];
    $scope.filterList = '';
    $scope.message = '';

    resourceContact.query(function (contacts) {
        $scope.contacts = contacts;
    }, function(erro){
        console.log(erro);
    });

    $scope.removeContact = function(contact) {
        resourceContact.delete({contactId: contact._id}, function () {
            var indexOfContact = $scope.contacts.indexOf(contact);
            $scope.contacts.splice(indexOfContact, 1);
            $scope.message = 'contact ' + contact.name + ' removed with success!';
            console.log(contact._id);
        }, function (erro) {
            console.log(erro);
            $scope.message = 'It is not possiblel to remove the contact! ' + contact.titulo;
        });
    }

});