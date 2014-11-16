'use strict';

app.controller('TripsController',
    function TripsController($scope, tripsData, identity, usersData, citiesData){

        $scope.isAuthenticated = identity.isAuthenticated();
        $scope.trips = tripsData.getTrips();
        $scope.userInfo = usersData.getUserInfo();
        $scope.cities = citiesData.getCities();
        $scope.page = 1;
        $scope.increasePage = function(){
            $scope.page++;
            $scope.trips = tripsData.getByPage($scope.page);
        };
        $scope.decreasePage = function(){
            if($scope.page > 1){
                $scope.page--;
                $scope.trips = tripsData.getByPage($scope.page);
            }
        }
        $scope.filter = function(filterObj){
            debugger;
            var page = $scope.page;
            var orderBy = filterObj.sort;
            var orderType = filterObj.sortType;
            var from = filterObj.from;
            var to = filterObj.to;
            var finished = filterObj.finished;
            var mine = filterObj.onlyMine;
            $scope.trips = tripsData.filter(page, orderBy, orderType, from, to, finished, mine);
        }
    }
);
