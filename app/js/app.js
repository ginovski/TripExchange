'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ngCookies']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/partials/home.html',
                controller: 'HomeController'
            })
            .when('/register', {
                templateUrl: 'views/partials/register.html',
                controller: 'SignUpCtrl'
            })
            .when('/drivers', {
                templateUrl: 'views/partials/drivers.html',
                controller: 'DriversController'
            })
            .when('/drivers/:id', {
                templateUrl: 'views/partials/driver-details.html',
                controller: 'DriverDetailsController'
            })
            .when('/trips', {
                templateUrl: 'views/partials/trips.html',
                controller: 'TripsController'
            })
            .when('/trips/create', {
                templateUrl: 'views/partials/create-trip.html',
                controller: 'CreateTripController'
            })
            .when('/trips/:id', {
                templateUrl: 'views/partials/trip-details.html',
                controller: 'TripDetailsController'
            })
            .otherwise({ redirectTo: '/' });
    }])
    .value('toastr', toastr)
    .constant('baseServiceUrl', 'http://spa2014.bgcoder.com');