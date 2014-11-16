'use strict';

app.controller('HomeController',
    function HomeController($scope, statsData, tripsData, driversData){
        $scope.stats = statsData.getStats();
        $scope.trips = tripsData.getTrips();
        $scope.drivers = driversData.getDrivers();
    }
);
