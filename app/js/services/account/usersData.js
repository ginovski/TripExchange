'use strict';

app.factory('usersData', function($resource, baseServiceUrl, authorization) {
    var Users = $resource(baseServiceUrl + '/api/users/userInfo', {}, {
        'getUserInfo': {method: 'GET', isArray: false, headers: authorization.getAuthorizationHeader()}
    });

    return{
        getUserInfo: function(){
            return Users.getUserInfo();
        }
    }
});
