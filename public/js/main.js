angular.module('myApp', ['myDirectives','ngAnimate', 'ngRoute', 'myServices'])
.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/contactList', {
        templateUrl: 'partials/main.html',
        controller: 'ContactsController'
    });

    $routeProvider.when('/contact/new', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactController'
    });

    $routeProvider.when('/contact/edit/:contactId', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactController'
    });

    $routeProvider.otherwise({redirectTo: '/contactList'});

});