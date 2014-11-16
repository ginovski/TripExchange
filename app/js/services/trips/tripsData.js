'use strict';

app.factory('tripsData', function($q, $http, $resource, baseServiceUrl, authorization) {
    var Trips = $resource(baseServiceUrl + '/api/trips/:id', {id: '@id'}, {
        'getTrips': {method: 'GET', isArray: true},
        'getTrip': {method: 'GET', isArray:false, params: {id: '@id'}, headers: authorization.getAuthorizationHeader()},
        'joinTrip': {method: 'PUT', isArray:false, params: {id: '@id'}, headers: authorization.getAuthorizationHeader()}
    });
    var TripsByPage = $resource(baseServiceUrl + '/api/trips/?page=:page', {page: '@page'}, {
        'getByPage': {method: 'GET', isArray: true, params:{page: '@page'}, headers:authorization.getAuthorizationHeader()}
    });
    var FilterTrips = $resource(baseServiceUrl + '/api/trips/?page=:page&orderBy=:orderBy&orderType=:orderType&from=:from&to=:to&finished=:finished&onlyMine=:onlyMine',
         {page: '@page', orderBy: '@orderBy', orderType: '@orderType', from: '@from', to: '@to', finished: '@finished', onlyMine: '@onlyMine'}, {
          'filter': {method: 'GET', isArray:true, params:{page: '@page', orderBy: '@orderBy', orderType: '@orderType', from: '@from', to: '@to', finished: '@finished', onlyMine: '@onlyMine'},headers:authorization.getAuthorizationHeader()}
        });

    return{
        getTrips: function(){
            return Trips.getTrips();
        },
        getTrip: function(id){
            return Trips.getTrip({id: id});
        },
        joinTrip: function(id){
            return Trips.joinTrip({id: id}).$promise;
        },
        createTrip: function(trip){
            var deffered = $q.defer();
            $http.post(baseServiceUrl + '/api/trips', trip, {headers: header})
                .success(function(data){
                    deffered.resolve(data);
                })
                .error(function(err){
                    deffered.reject(err);
                })
            return deffered.promise;
        },
        'getByPage': function(page){
            return TripsByPage.getByPage({page: page});
        },
        'filter': function(page, orderBy, orderType, from, to, finished, onlyMine){
            return FilterTrips.filter({page: page, orderBy: orderBy, orderType: orderType, from: from, to: to, finished: finished, onlyMine: onlyMine});
        }
    }
});