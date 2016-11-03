app.directive('tourItem', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
      templateUrl: 'js/directives/tourItem.html'
  };
});