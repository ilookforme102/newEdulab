/**
 * Created by Khoa's PC on 11/10/2016.
 */

/* tab2 ctrl */

myApp.controller('tab2Ctrl', function($scope){
    $scope.isClick = true;
    $scope.names = ['Content1', 'Content2', 'Content3'];
    $scope.isSkill = true;
    $scope.skills =['Content1', 'Content2', 'Content3'];
    $scope.addName = function() {
        $scope.names.push($scope.enteredName);
        $scope.enteredName = '';
    };
    $scope.removeName = function(name) {
        var i = $scope.names.indexOf(name);
        // splice where to start, how many to remove
        $scope.names.splice(i, 1);
    };
    $scope.addSkill = function() {
        $scope.skills.push($scope.enteredSkill);
        $scope.enteredSkill = '';
    };
    $scope.removeSkill= function(skill) {
        var i = $scope.skills.indexOf(skill);
        // splice where to start, how many to remove
        $scope.skills.splice(i, 1);
    };
});
/* tab1Ctrl */

myApp.controller('tab1Ctrl', function($scope) {
$scope.framework= {
    title:'',
    startDate:'',
    endDate:'',
    grade:'',
    subjects:{'English':'false','Mathematic':'false','Biology':'false','Music':'false','Ethics':'false','Art':'false','Physics':'false','History':'false'},
    keywords:{}
};
//Data for chip


});

myApp.controller('BasicDemoCtrl', DemoCtrl);

function DemoCtrl ($timeout, $q) {
    var self = this;
    self.readonly = false;
    // Lists of fruit names and Vegetable objects

    self.tags = [];



}
myApp.controller('tab3Ctrl', function($scope) {
    $scope.user = {
        no1: 'How can',
        no2: 'i/we',
        no3: 'build/create/make',
        no4: 'real world problem',
        no5: 'How do',
        no6: 'We as role/Occupation',
        no7: 'Design/plan',
        no8: 'For public Audience',
        no9: 'Should',
        no10: 'Tow/City/Country',
        no11:'Write',
        no12:'for a classroom',
    }
});


myApp.controller('tab5Ctrl', ['$mdEditDialog', '$q', '$scope', '$timeout', function ($mdEditDialog, $q, $scope, $timeout) {
    'use strict';

    $scope.selected = [];
    $scope.limitOptions = [3, 6, 9];

    $scope.options = {
        rowSelection: true,
        multiSelect: true,
        autoSelect: true,
        decapitate: false,
        largeEditDialog: false,
        boundaryLinks: false,
        limitSelect: true,
        pageSelect: true
    };

    $scope.query = {
        order: 'name',
        limit: 3,
        page: 1
    };

    $scope.assessments = {
        "count": 9,
        "data": [
            {
                "goal": "Goal 1",
                "one": "criteria",
                "two": "criteria",
                "three": "criteria",
                "four": "criteria",
                "five": "criteria",
                "student": true,
                "peer": true,
                "teacher": true
            }, {
                "goal": "Goal 1",
                "one": "criteria",
                "two": "criteria",
                "three": "criteria",
                "four": "criteria",
                "five": "criteria",
                "student": true,
                "peer": true,
                "teacher": true
            }, {
                "goal": "Goal 1",
                "one": "criteria",
                "two": "criteria",
                "three": "criteria",
                "four": "criteria",
                "five": "criteria",
                "student": true,
                "peer": true,
                "teacher": true
            }, {
                "goal": "Goal 1",
                "one": "criteria",
                "two": "criteria",
                "three": "criteria",
                "four": "criteria",
                "five": "criteria",
                "student": true,
                "peer": true,
                "teacher": true
            }, {
                "goal": "Goal 1",
                "one": "criteria",
                "two": "criteria",
                "three": "criteria",
                "four": "criteria",
                "five": "criteria",
                "student": true,
                "peer": true,
                "teacher": true
            }, {
                "goal": "Goal 1",
                "one": "criteria",
                "two": "criteria",
                "three": "criteria",
                "four": "criteria",
                "five": "criteria",
                "student": true,
                "peer": true,
                "teacher": true
            }
        ]
    };

    $scope.toggleLimitOptions = function () {
        $scope.limitOptions = $scope.limitOptions ? undefined : [3, 6, 9];
    };

    $scope.getTypes = function () {
        return ['Candy', 'Ice cream', 'Other', 'Pastry'];
    };

    $scope.loadStuff = function () {
        $scope.promise = $timeout(function () {
            // loading
        }, 2000);
    }

    $scope.logItem = function (item) {
        console.log(item.name, 'was selected');
    };

    $scope.logOrder = function (order) {
        console.log('order: ', order);
    };

    $scope.logPagination = function (page, limit) {
        console.log('page: ', page);
        console.log('limit: ', limit);
    }
}]);
myApp.controller('tab6Ctrl', function($scope) {
    'use strict';

    $scope.selected = [];
    $scope.limitOptions = [5, 10, 15];

    $scope.options = {
        rowSelection: true,
        multiSelect: true,
        autoSelect: true,
        decapitate: false,
        largeEditDialog: false,
        boundaryLinks: false,
        limitSelect: true,
        pageSelect: true
    };

    $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
    };

    $scope.blueprints = {
        "count": 9,
        "data": [
            {

                "name": "blueprint1",

                "rating": null
            },
            {

                "name": "blueprint1",

                "rating": null
            },
            {

                "name": "blueprint1",

                "rating": null
            },{

                "name": "blueprint1",

                "rating": null
            }
        ]
    };

    $scope.editComment = function (event, dessert) {
        event.stopPropagation(); // in case autoselect is enabled

        var editDialog = {
            modelValue: dessert.comment,
            placeholder: 'Add a comment',
            save: function (input) {
                if(input.$modelValue === 'Donald Trump') {
                    input.$invalid = true;
                    return $q.reject();
                }
                if(input.$modelValue === 'Bernie Sanders') {
                    return dessert.comment = 'FEEL THE BERN!'
                }
                dessert.comment = input.$modelValue;
            },
            targetEvent: event,
            title: 'Add a comment',
            validators: {
                'md-maxlength': 30
            }
        };

        var promise;

        if($scope.options.largeEditDialog) {
            promise = $mdEditDialog.large(editDialog);
        } else {
            promise = $mdEditDialog.small(editDialog);
        }

        promise.then(function (ctrl) {
            var input = ctrl.getInput();

            input.$viewChangeListeners.push(function () {
                input.$setValidity('test', input.$modelValue !== 'test');
            });
        });
    };

    $scope.toggleLimitOptions = function () {
        $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
    };

    $scope.getTypes = function () {
        return ['Candy', 'Ice cream', 'Other', 'Pastry'];
    };

    $scope.loadStuff = function () {
        $scope.promise = $timeout(function () {
            // loading
        }, 2000);
    }

    $scope.logItem = function (item) {
        console.log(item.name, 'was selected');
    };

    $scope.logOrder = function (order) {
        console.log('order: ', order);
    };

    $scope.logPagination = function (page, limit) {
        console.log('page: ', page);
        console.log('limit: ', limit);
    }
});
myApp.controller("tab4Ctrl", function($scope) {

    $scope.dragoverCallback = function(event, index, external, type) {
        $scope.logListEvent('dragged over', event, index, external, type);
        // Disallow dropping in the third row. Could also be done with dnd-disable-if.
        return index < 10;
    };

    $scope.dropCallback = function(event, index, item, external, type, allowedType) {
        $scope.logListEvent('dropped at', event, index, external, type);
        if (external) {
            if (allowedType === 'itemType' && !item.label) return false;
            if (allowedType === 'containerType' && !angular.isArray(item)) return false;
        }
        return item;
    };

    $scope.logEvent = function(message, event) {
        console.log(message, '(triggered by the following', event.type, 'event)');
        console.log(event);
    };

    $scope.logListEvent = function(action, event, index, external, type) {
        var message = external ? 'External ' : '';
        message += type + ' element is ' + action + ' position ' + index;
        $scope.logEvent(message, event);
    };

    $scope.model = [];

    // Initialize model
    var id = 10;
    for (var i = 0; i < 3; ++i) {
        $scope.model.push([]);
        for (var j = 0; j < 2; ++j) {
            $scope.model[i].push([]);
            for (var k = 0; k < 7; ++k) {
                $scope.model[i][j].push({label: 'Item ' + id++});
            }
        }
    }

    $scope.$watch('model', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});