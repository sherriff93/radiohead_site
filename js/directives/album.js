app.directive('album', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
      templateUrl: 'js/directives/album.html'
  };
});