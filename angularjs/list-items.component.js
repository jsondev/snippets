(function(app) {
  'use strict';

  app.component('listItems', {
    templateUrl: '',
    controller: function listItemController($log, ListItemService) {
      var vm = this;
      ListItemService.getData('').then(getSuccess).catch(getError);

      function getSuccess(data) {
        return vm.items = data;
      }

      function getError(response) {
        $log.info(response);
      }
    },
    controllerAs: 'vm'
  });
})(APP);
