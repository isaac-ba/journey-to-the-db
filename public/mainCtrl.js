app.controller('mainCtrl',['$scope','fact','$http', function($scope,fact,$http){

  $scope.addToDb = function(){
    $http.post('/journey', {data:$scope.input})//must use object as second parameter
    .then(function(dataFromServer){
      console.log(dataFromServer.data);
    });
  }

}]);