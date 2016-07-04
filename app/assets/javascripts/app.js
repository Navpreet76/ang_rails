var app = angular.module('nbaApp', ['ngRoute']);
app.config(function($routeProvider, $httpProvider) {
    $routeProvider
        .when("/partial1", {
            templateUrl: "/partials/partial1.html",
            controller: "playersController"
        })
        .when("/partial2", {
            templateUrl: "/partials/partial2.html",
            controller: "teamsController"
        })
        //using jquery to get the value of the authenticity token and setting it as a default header
        $httpProvider.defaults.headers.common['X_CSRF_Token'] = $('meta[name=csrf-token]').attr('content');
});

app.factory("playerFactory", function($http){
	var factory = {};
	factory.index = function(callback){
		$http.get("/players").success(function(output){
			callback(output);
		})
	}
	factory.create = function(playerInfo, callback){
		$http.post("/players", playerInfo).success(function(output){
			callback(output);
		})
	}
	return factory;
})

app.factory("teamFactory", function($http){
	var factory = {};
	factory.index = function(callback){
		$http.get("/teams").success(function(output){
			callback(output);
		})
	}
	//create function that makes a post request to the '/teams' route
	factory.create = function(teamInfo, callback){
		$http.post("/teams", teamInfo).success(function(output){
			callback(output);
		})
	}
	return factory;
})


app.controller("playersController", function($scope, playerFactory){
	playerFactory.index(function(json){
		$scope.players = json;
	})
	$scope.createPlayer = function(){
		playerFactory.create($scope.newPlayer, function(json){
			$scope.players = json;
			$scope.newPlayer = {};
		});
	}
})
app.controller("teamsController", function($scope, teamFactory){
	teamFactory.index(function(json){
		$scope.teams = json;
	})
	$scope.createTeam = function(){
		teamFactory.create($scope.newTeam, function(json){
			$scope.teams = json;
			$scope.newTeam = {};
		});
	}
})



// app.controller("playersController", function($scope){
//     $scope.players = [
//         {firstName: "Michael", lastName: "Jordan"},
//         {firstName: "Kobe", lastName: "Bryant"},
//         {firstName: "Kevin", lastName: "Garnett"},
//         {firstName: "LeBron", lastName: "James"},
//         {firstName: "Stephen", lastName: "Curry"},
//         {firstName: "Jordan", lastName: "Clarkson"},
//         {firstName: "Derek", lastName: "Fisher"},
//         {firstName: "Jimmy", lastName: "Butler"}
//     ]
// })
// app.controller("teamsController", function($scope){
//     $scope.teams = [
//         {name: "Boston Celtics"},
//         {name: "Brooklyn Nets"},
//         {name: "New York Knicks"},
//         {name: "Philadelphia 76ers"},
//         {name: "Toronto Rapters"},
//         {name: "Chicago Bulls"},
//         {name: "Cleveland Cavaliers"},
//         {name: "Detroit Pistons"},
//         {name: "Indiana Pacers"},
//         {name: "Milwaukee Bucks"},
//         {name: "Atlanta Hawks"},
//         {name: "Charlotte Hornets"},
//         {name: "Miami Heat"},
//         {name: "Orlando Magic"},
//         {name: "Washington Wizards"},
//         {name: "Denver Nuggets"},
//         {name: "Minnesota Timberwolves"},
//         {name: "Oklahoma City Thunder"},
//         {name: "Portland Trail Blazers"},
//         {name: "Utah Jazz"},
//         {name: "Golden State Warriors"},
//         {name: "Los Angeles Clippers"},
//         {name: "Los Angeles Lakers"},
//         {name: "Phoenix Suns"},
//         {name: "Sacramento Kings"},
//         {name: "Dallas Mavericks"},
//         {name: "Houston Rockets"},
//         {name: "Memphis Grizzlies"},
//         {name: "New Orleans Pelicans"},
//         {name: "San Antonio Spurs"}
//     ]
// })