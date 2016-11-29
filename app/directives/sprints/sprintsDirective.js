/**
 * Created by Khoa's PC on 11/10/2016.
 */

myApp.directive('sprint', function () {
    return {
        restrict: 'A',
        templateUrl: 'directives/sprints/sprints.html'
    }
});
    myApp.controller('AppCtrls', function ($scope) {

        $scope.models = [
            {listName: "Active Blueprints", items: [], dragging: false},
            {listName: "Completed Blueprints", items: [], dragging: false},
            {
                listName: "Impending Blueprints",
                items: [
                    {label: "Sprint 1" },
                    {label: "Sprint 2" },
                    {label: "Sprint 3" },
                    {label: "Sprint 4" },
                    {label: "Sprint 5" },
                    {label: "Sprint 6" },
                    {label: "Sprint 7" },
                    {label: "Sprint 8" }

                ],
                dragging: false
            }

        ];

        /**
         * dnd-dragging determines what data gets serialized and send to the receiver
         * of the drop. While we usually just send a single object, we send the array
         * of all selected items here.
         */
        $scope.getSelectedItemsIncluding = function(list, item) {
            item.selected = true;
            return list.items.filter(function(item) { return item.selected; });
        };

        /**
         * We set the list into dragging state, meaning the items that are being
         * dragged are hidden. We also use the HTML5 API directly to set a custom
         * image, since otherwise only the one item that the user actually dragged
         * would be shown as drag image.
         */
        $scope.onDragstart = function(list, event) {
            list.dragging = true;
            if (event.dataTransfer.setDragImage) {
                var img = new Image();
                img.src = 'framework/vendor/ic_content_copy_black_24dp_2x.png';
                event.dataTransfer.setDragImage(img, 0, 0);
            }
        };

        /**
         * In the dnd-drop callback, we now have to handle the data array that we
         * sent above. We handle the insertion into the list ourselves. By returning
         * true, the dnd-list directive won't do the insertion itself.
         */
        $scope.onDrop = function(list, items, index) {
            angular.forEach(items, function(item) { item.selected = false; });
            list.items = list.items.slice(0, index)
                .concat(items)
                .concat(list.items.slice(index));
            return true;
        }

        /**
         * Last but not least, we have to remove the previously dragged items in the
         * dnd-moved callback.
         */
        $scope.onMoved = function(list) {
            list.items = list.items.filter(function(item) { return !item.selected; });
        };


        // Model to JSON for demo purpose
        $scope.$watch('models', function(model) {
            $scope.modelAsJson = angular.toJson(model, true);
        }, true);
    });

