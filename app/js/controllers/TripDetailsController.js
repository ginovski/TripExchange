'use strict';

app.controller('TripDetailsController',
    function TripDetailsController($scope,$routeParams,$location,notifier, tripsData, identity) {
        $scope.isAuthenticated = identity.isAuthenticated();
        if(!$scope.isAuthenticated)
        {
            $location.path('/');
            notifier.error("Please login or register first");

        }
        $scope.trip = tripsData.getTrip($routeParams.id);
        $scope.joinTrip = function()
        {
            tripsData.joinTrip($routeParams.id).then(function(data){
                $scope.trip = data;
            }, function(error){
                notifier.error(error.data.message);
            })
        }
    }
);
