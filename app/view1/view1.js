myApp.controller('leftnavCtrl', function ($scope) {
    $scope.isOpen = false;
    $scope.menuIsselect = false;
    $scope.menuId = 0;

    $scope.closeSidenav = function () {
        /*if ($scope.isOpen) {
            $scope.isOpen = false;
        }
        */
        $scope.toggleExpanded(0);

        $scope.isOpen = false
    };

    $scope.toggleExpanded = function (selectedMenuId) {
        if (!$scope.menuIsselect) {
            $scope.menuIsselect = true;
            $scope.menuId = selectedMenuId;
            $scope.isOpen = true;

        } else {
            if ($scope.menuId === selectedMenuId) {
                $scope.menuIsselect = false;
                selectedMenuId = 0;
            }
            $scope.menuId = selectedMenuId;
            $scope.isOpen = true;
        }
    };
// Drop-down menu on top
    $scope.isSelected = function (value) {
        return $scope.menuId === value;
    };
    $scope.openMenu = function($mdOpenMenu, event) {
        $mdOpenMenu(event);
    };
    $scope.redirect = function () {
        window.location = "#/login"
    };


});
