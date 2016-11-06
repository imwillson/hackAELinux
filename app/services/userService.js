angular.module('collegeride').factory('userService', function($http, $q) {
    var service = {};
    service.getByEmail = getByEmail;
    service.getAllUsers = getAllUsers;
    function handleSuccess(res) {
            return res.data;
    }
    function handleError(res) {
            return $q.reject(res.data);
    }
    function getByEmail(email) {
            return $http.get('http://localhost:8000/api/users/'+email).then(handleSuccess, handleError);
    }
    function getAllUsers() {
         return $http.get('/api/users').then(handleSuccess, handleError);
    }
    return service;
});