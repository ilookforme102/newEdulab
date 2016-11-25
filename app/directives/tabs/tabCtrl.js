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

/* tab4 controller */
myApp.controller("tab4Ctrl", function($scope) {
    $scope.states = {};
    $scope.states.activeItem = 'item1';
    $scope.items = [{
        id: 'item1',
        title: 'Individual'
    }, {
        id: 'item2',
        title: 'Pair'
    }, {
        id: 'item3',
        title: 'Team'
    }];
    $scope.role = null;
    $scope.roleLists = [{
        color: 'Red',
        role: 'Leader'
    }, {
        color: 'blue',
        role: 'Presenter'
    }, {
        color: 'yellow',
        role: 'Time keeper'
    },
        {
            color: 'green',
            role: 'Recorder'
        },
        {
            color: 'pink',
            role: 'member'
        }];
    $scope.addTeam = function () {
        $scope.teamSample = [];
        $scope.models.lists.push($scope.teamSample);

    };
    $scope.listStudents = [

        {label: "name1",src:"http://www.casecoco.com/data/design/sell/img/20141230/justin-bieber-looking-throw-pillow-covers-20-quot-x-20-quot_7F5C871666F716576888C25D961D4B45_t_200_200.png"},
        {label: "name2 ",src:"http://www.casecoco.com/data/design/sell/img/20141230/justin-bieber-looking-throw-pillow-covers-20-quot-x-20-quot_7F5C871666F716576888C25D961D4B45_t_200_200.png"},
        {label: "name3",src:"http://www.casecoco.com/data/design/sell/img/20141230/justin-bieber-looking-throw-pillow-covers-20-quot-x-20-quot_7F5C871666F716576888C25D961D4B45_t_200_200.png"},
        {label: "name4",src:"http://www.casecoco.com/data/design/sell/img/20141230/justin-bieber-looking-throw-pillow-covers-20-quot-x-20-quot_7F5C871666F716576888C25D961D4B45_t_200_200.png"},
        {label: "name5",src:"http://www.casecoco.com/data/design/sell/img/20141230/justin-bieber-looking-throw-pillow-covers-20-quot-x-20-quot_7F5C871666F716576888C25D961D4B45_t_200_200.png"},
        {label: "name6",src:"http://www.casecoco.com/data/design/sell/img/20141230/justin-bieber-looking-throw-pillow-covers-20-quot-x-20-quot_7F5C871666F716576888C25D961D4B45_t_200_200.png"},
        {label: "name7",src:"http://www.casecoco.com/data/design/sell/img/20141230/justin-bieber-looking-throw-pillow-covers-20-quot-x-20-quot_7F5C871666F716576888C25D961D4B45_t_200_200.png"},
        {label: "name9",src:"http://www.casecoco.com/data/design/sell/img/20141230/justin-bieber-looking-throw-pillow-covers-20-quot-x-20-quot_7F5C871666F716576888C25D961D4B45_t_200_200.png"},
        {label: "name10",src:"http://www.casecoco.com/data/design/sell/img/20141230/justin-bieber-looking-throw-pillow-covers-20-quot-x-20-quot_7F5C871666F716576888C25D961D4B45_t_200_200.png"},
        {label: "name11",src:"http://www.casecoco.com/data/design/sell/img/20141230/justin-bieber-looking-throw-pillow-covers-20-quot-x-20-quot_7F5C871666F716576888C25D961D4B45_t_200_200.png"},
        {label: "name12",src:"http://www.casecoco.com/data/design/sell/img/20141230/justin-bieber-looking-throw-pillow-covers-20-quot-x-20-quot_7F5C871666F716576888C25D961D4B45_t_200_200.png"},
        {label: "name13",src:"http://www.casecoco.com/data/design/sell/img/20141230/justin-bieber-looking-throw-pillow-covers-20-quot-x-20-quot_7F5C871666F716576888C25D961D4B45_t_200_200.png"},
    ];

    $scope.maxItem = 0;
    $scope.models = {
        selected: null,

        lists: [ $scope.listStudents,[]]





    };


    // Generate initial model


    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);



});