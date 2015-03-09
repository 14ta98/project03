var todoCtrl = function($scope) {
  $scope.tasks = [];
  $scope.addTask = function() {
  	$scope.tasks.unshift({body:$scope.taskText, done:false});
  	$scope.taskText = '';
  }
  $scope.deleteTask = function() {
    var oldTasks = $scope.tasks;
    $scope.tasks = [];
    angular.forEach(oldTasks, function(task){
      if (!task.done) $scope.tasks.push(task);
    });
  }
}

