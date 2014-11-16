'use strict';

app.controller('DriverDetailsController',
    function DriversController($scope,$routeParams,$location,notifier, driversData, identity) {
        $scope.isAuthenticated = identity.isAuthenticated();
        if(!$scope.isAuthenticated)
        {
            $location.path('/');
            notifier.error("Please login or register first");

        }
        $scope.driver = driversData.getDriver($routeParams.id);
    }
);
