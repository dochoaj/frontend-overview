App.config(($routeProvider) ->
  $routeProvider.when('/',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  )
)