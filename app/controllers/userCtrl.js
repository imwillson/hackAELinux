angular.module('collegeride').controller('userCtrl', function ($scope, userService) {
    userService.getByEmail("nicholas.jativa@stonybrook.edu").then(function(user){
        $scope.firstname = user.firstname;
        $scope.lastname = user.lastname;
        $scope.email = user.email;
        $scope.school = user.school;
    });
    
});