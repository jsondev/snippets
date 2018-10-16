(function(app) {
  'use strict';
  app.factory("ListItemService", function ListItemService($http, $log) {

      var siteurl = _spPageContextInfo.webAbsoluteUrl;

      return {
        getData: getData
      };


      function getData(list) {
        var LIST = list;
        return $http.get(siteurl + "/_api/web/lists/GetByTitle('" + LIST + "')/items?$expand=ContentType", {
            headers: {
              accept: "application/json; odata=verbose"
            },
            cache: true
          })
          .then(sendResponseData)
          .catch(sendResponseError);
      }

      function sendResponseData(response) {
        return response.data.d.results;

      }

      function sendResponseError(response) {
        $log.info(response);
      }
  });
})(APP);
