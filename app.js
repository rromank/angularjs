angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);

angular.module('ui.bootstrap.demo')
    .controller('ModalDemoCtrl', function ($scope, $uibModal) {
        $scope.open = function () {
            var modalInstance = $uibModal.open({
                template: '<modalka close="$close($value)"/>',
                scope: $scope
            });

            modalInstance.result.then(function (isSaved) {
                modalInstance.isSaved = isSaved;
                console.log("Result success: " + isSaved);
            }, function (data) {
                modalInstance.isSaved = false;
                console.log("Result error: " + data);
            });

            modalInstance.closed.then(function () {
                console.log("Closed success: " + modalInstance.isSaved);
            });
        };
    });

angular.module('ui.bootstrap.demo')
    .controller('ModalInstanceCtrl', function ($scope) {
        $scope.ok = function () {
            $scope.close({$value: true});
        };
    })
    .directive('modalka', function () {
        return {
            restrict: 'E',
            templateUrl: 'modal.html',
            controller: 'ModalInstanceCtrl',
            scope: {
                close: '&'
            }
        }
    });