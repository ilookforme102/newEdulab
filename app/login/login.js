/**
 * Created by Khoa's PC on 11/4/2016.
 */

myApp.controller('loginCtrl', function ($scope,$mdDialog) {


    $scope.showAdvanced = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'login/loginModal.html',
            parent: angular.element(document.querySelector('#popupContainer')),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })

    };
    function DialogController($scope) {

        $scope.redirect = function () {
            window.location = "#/home"
        };
    }


});