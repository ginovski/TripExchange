'use strict';

app.controller('CreateTripController',
    function CreateTripController($scope, tripsData, identity, citiesData, notifier, $location){
        $scope.isAuthenticated = identity.isAuthenticated();
        $scope.cities = citiesData.getCities();
        $scope.createTrip = function(trip){
            tripsData.createTrip(trip).then(
                function(data){
                    $location.path('/trips/' + data.id);
                },
                function(error){
                    console.log(error)
                    notifier.error(error.data.message);
                });
        }
    }
);
