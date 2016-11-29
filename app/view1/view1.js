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
//Controller for progress bar


myApp.controller('progressCtrl', ['$mdEditDialog', '$scope', function ($mdEditDialog,$scope) {
    'use strict';



    $scope.options = {
        largeEditDialog: true

    };

    $scope.listes = {
        "data": [
            {
                "name": "Maida",
                "src":"https://scontent.fqlf1-1.fna.fbcdn.net/v/t1.0-9/14370255_10154060569526028_728864303643975912_n.jpg?oh=0df5601aad2bf919d5b60850e6953d23&oe=58C99B0D",
                "comment": "I love this course very much!",
                "progresses": [
                    {"color":"yellow","feeling":"i need a test","icon":"face"},
                    {"color":"green","feeling":"i understand","icon":"face"},
                    {"color":"red","feeling":"i don't understand at all","icon":"face"},
                    {"color":"red","feeling":"i quit","icon":"face"},
                    {"color":"blue","feeling":"too easy","icon":"face"}
                ]

            },
            {
                "name": "Merlin",
                "src":"https://scontent.fqlf1-1.fna.fbcdn.net/v/t1.0-1/c0.55.548.548/10420367_10204401800625292_4856677454635901832_n.jpg?oh=9ee997a998d3f0c533d7d4c25ec02b52&oe=58B27B5D",
                "comment": "Love school!",
                "progresses": [
                    {"color":"yellow","feeling":"how can i graduate","icon":"face"},
                    {"color":"green","feeling":"i understand","icon":"star_rate"},
                    {"color":"red","feeling":"i don't understand at all","icon":"face"},
                    {"color":"red","feeling":"i quit","icon":"face"},
                    {"color":"blue","feeling":"too easy","icon":"face"}
                ],
            },
            {
                "name": "Sang",
                "src":"https://scontent.fqlf1-1.fna.fbcdn.net/v/t1.0-9/1901391_758471890839247_346993941_n.jpg?oh=8968bbc2c9f3389325d743fc44ffc854&oe=58FC7BB3",
                "comment": "hmmm...",
                "progresses": [
                    {"color":"yellow","feeling":"i don't understand","icon":"face"},
                    {"color":"green","feeling":"i understand","icon":"thumb_down"},
                    {"color":"","feeling":"","icon":""},
                    {"color":"red","feeling":"i quit","icon":"face"},
                    {"color":"blue","feeling":"too easy","icon":"face"}
                ]

            },
            {
                "name": "Adam",
                "src":"https://scontent.fqlf1-1.fna.fbcdn.net/v/t1.0-1/14980671_10205420893001916_2315637467890533239_n.jpg?oh=f3d21d5dd9fc7bc8bcbaa4707c6b3ad4&oe=58BAAFCF",
                "comment": "may i sleep ?",
                "progresses": [
                    {"color":"yellow","feeling":"i don't understand","icon":"face"},
                    {"color":"green","feeling":"i understand","icon":"thumb_up"},
                    {"color":"red","feeling":"i don't understand at all","icon":"favorite"},
                    {"color":"red","feeling":"i quit","icon":"face"},
                    {"color":"","feeling":"","icon":""},

                ]
            },
        ]
    };

    $scope.editComment = function (event, list) {
        event.stopPropagation(); // in case autoselect is enabled

        var editDialog = {
            modelValue: list.comment,
            placeholder: 'Add a comment',
            save: function (input) {
                list.comment = input.$modelValue;
            },
            targetEvent: event,
            title: 'Add a comment',
            validators: {
                'md-maxlength': 100
            }
        };

            var promise = $mdEditDialog.large(editDialog);


    };


}]);