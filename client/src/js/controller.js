/**
 * controller.js
 * Contains the controller
 */
(function() {
    'use strict';

    var app = angular.module('gps-tracking');

    app.controller('MapController', function($scope, socket, users) {

        $scope.users = users;

        socket.on('add user', function(data) {
        });

        socket.on('remove user', function(id) {
            $scope.$apply(function() {
                delete users[id];
            });
        });

        var map;
        var marker;
        var infowindowPhoto = new google.maps.InfoWindow();
        var latPosition;
        var longPosition;

        function initialize() {

            var mapOptions = {
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: new google.maps.LatLng(10, 10)
            };

            map = new google.maps.Map(document.getElementById("map"), mapOptions);

            initializeMarker();
        }

        function initializeMarker() {

            if (navigator.geolocation) {

                navigator.geolocation.getCurrentPosition(function(position) {

                    var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                    console.log(pos);
                    socket.on('list', function(list) {
                        console.log(list);
                        $scope.getLocation = list;
                        for (var pos in $scope.getLocation) {
                            var latitude = $scope.getLocation[pos][0].G;
                            var longitude = $scope.getLocation[pos][0].K;
                            var geoposition = new google.maps.LatLng(latitude, longitude);
                            marker = new google.maps.Marker({
                                position: geoposition,
                                draggable: true,
                                animation: google.maps.Animation.DROP,
                                map: map,
                                icon:'../../img/man.png'
                            });
                            map.setCenter(geoposition);
                        }
                    });
                    // send to server
                    socket.emit('moved', pos);
                });
            }
        }

        initialize();
    });
})();