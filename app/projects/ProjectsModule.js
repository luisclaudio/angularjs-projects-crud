'use strict';

angular.module('ProjectsModule', [

]).config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/projects', {
            templateUrl: 'projects/projectsList/projectsList.html',
            controller: 'ProjectsController'
        });
    }
]);

