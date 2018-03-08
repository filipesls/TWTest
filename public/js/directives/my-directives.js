angular.module('myDirectives', [])

.directive('myContactList', function() {

    var ddo = {};

    ddo.restrict = "AE";
    ddo.transclude = true;

    // ddo.scope = {
    //     name: '@'
    // };

   ddo.templateUrl = 'js/directives/my-contact-list.html';        

    return ddo;
});