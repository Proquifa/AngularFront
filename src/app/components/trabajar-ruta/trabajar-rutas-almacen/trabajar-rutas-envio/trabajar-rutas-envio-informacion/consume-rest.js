var app = angular.module('consumeRestApp', []);
var app = angular.module('consumeRestApp', ['ngResource']);
app.factory("envioUps", function($resource) {
    return $resource("https://wwwcie.ups.com/rest/Ship");
});

app.controller("ArtistsCtrl", function($scope, artists) {
    artists.query(function(data) {
        $scope.artists = data;
        console.log(data);

    }, function(err) {
        console.error("Error occured: ", err);
    });
});