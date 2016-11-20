/**
 * Created by Khoa's PC on 11/10/2016.
 */

myApp.directive('sprint', function () {
    return {
        restrict: 'A',
        templateUrl: 'directives/sprints/sprints.html'
    }
})
    .controller('AppCtrls', function () {
        this.items = [];
        for (var i = 0; i < 6; i++) {
            this.items.push(i);
        }
    });

