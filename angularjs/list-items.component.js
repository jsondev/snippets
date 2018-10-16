(function(app) {
  'use strict';

  app.component('listItems', {
    templateUrl: '',
    controller: function ListItemsController($scope, $log, ListItemService) {
      var vm = this;
      vm.currentPage = 1;
      vm.itemsPerPage = 20;
      ListItemService.getData('Action Icons').then(getSuccess).catch(getError);


      function setPagingData(page) {
        vm.currentPage = page;
        var pagedData = vm.allItems.slice(
          (page - 1) * vm.itemsPerPage,
          page * vm.itemsPerPage
        );

        vm.items = pagedData;
      }


      function getSuccess(data) {
        vm.allItems = data
        vm.totalItems = vm.allItems.length;

        $scope.$watch('vm.currentPage', function() {
          setPagingData(vm.currentPage);
        });

        return [vm.allItems, vm.totalItems];
      }

      function getError(response) {
        $log.info(response);
      }
    },
    controllerAs: 'vm'
  });

})(APP);
