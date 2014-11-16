'use strict';

app.controller('DriversController',
    function DriversController($scope, driversData, identity){
        $scope.drivers = driversData.getDrivers();
        $scope.isAuthenticated = identity.isAuthenticated();
        $scope.page = 1;
        if($scope.isAuthenticated){
            $scope.increasePage = function(){
                $scope.page++;
                driversData.filterDrivers($scope.page, null).then(function(data){
                    $scope.drivers = data;
                });
            };
            $scope.decreasePage = function(){
                if($scope.page > 1){
                    $scope.page--;
                    driversData.filterDrivers($scope.page, null).then(function(data){
                        $scope.drivers = data;
                    });
                }
            };
            $scope.filterData = function()
            {
                var filteredData = driversData.filterDrivers($scope.page, $scope.filterText).then(function(data){
                    if(data.length < 1)
                    {
                        $scope.noResults = true;
                    }
                    else{
                        $scope.noResults = false;
                    }



                    $scope.drivers = data;
                });
            }
        }
    }
);