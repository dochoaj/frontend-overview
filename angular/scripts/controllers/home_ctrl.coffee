App.controller 'HomeCtrl', ($scope) ->
  $scope.title = 'A nested to do using AngularJS';

  # $scope.tasks = [
  #   {
  #     title: 'Do awesome things',
  #     completed: true,
  #     tasks: [
  #       { title: 'Nested task', completed: true }
  #     ]
  #   },
  #   { title: 'Do new thing', completed: false },
  #   { title: 'Do special things', completed: true },
  #   { title: 'Do fantastic things', completed: false },
  #   { title: 'Do legendary things', completed: true }
  # ]

  $scope.tasks = []

  $scope.addNewTask = ->
    $scope.tasks.unshift { title: @newTask, completed: false }
    @newTask = ''

  $scope.addSubTask = (parentTask) ->
    parentTask.tasks = [] unless parentTask.tasks
    parentTask.tasks.unshift { title: parentTask.newTitle, completed: false }
    parentTask.newTitle = ''
