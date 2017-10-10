angular.module('myApp', ['ngAnimate', 'ui.bootstrap']);
angular.module('myApp').controller('myCtrl', function ($scope, $uibModal, $log) {

  $scope.items = ['Smoothed Line Chart', 'Stacked Area', 'Date Based Data'];
  $scope.chartThemes = ['Light', 'Dark', 'Chalk', 'Patterns', 'Default'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        },
        chartThemes: function () {
          return $scope.chartThemes;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('myApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items, chartThemes) {

  $scope.items = items;
  $scope.chartThemes = chartThemes;

  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.selectedItem= $scope.items[0];
  $scope.dropboxitemselected = function (item) {
 
        $scope.selectedItem = item;
        //alert($scope.selectedItem);
  }

  $scope.selectedChartTheme= $scope.chartThemes[0];
  $scope.dropboxchartthemeselected = function (theme) {
 
        $scope.selectedChartTheme = theme;
        //alert($scope.selectedItem);
  }

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  // CODE FOR DROPDOWN
  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
});