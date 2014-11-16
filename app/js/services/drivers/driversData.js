'use strict';

app.factory('driversData', function($resource, baseServiceUrl, authorization) {


    var Drivers = $resource(baseServiceUrl + '/api/drivers/:id', {id: '@id'}, {
        'getDrivers': {method: 'GET', isArray: true},
        'getDriver': {method: 'GET', isArray: false, params:{id: '@id'}, headers: authorization.getAuthorizationHeader()}
    });
    var FilterDrivers = $resource(baseServiceUrl + '/api/drivers?page=:page&username=:username', {id: '@page', username: '@username'}, {
        'filterDrivers': {method: 'GET', isArray:true, params: {id: '@page', username:'@username'}, headers: authorization.getAuthorizationHeader()}
    });

    return{
        getDrivers: function(){
            return Drivers.getDrivers();
        },
        filterDrivers: function(page, username){
          return FilterDrivers.filterDrivers({page: page, username:username}).$promise;
        },
        getDriver: function(id){
            return Drivers.getDriver({id: id});
        }
    };
});