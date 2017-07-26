var foodieApp = angular.module('foodieApp',['ngRoute']);


// Adding route to our website
foodieApp.config(function ($routeProvider) {

	$routeProvider
	.when('/',{
		templateUrl: 'assets/pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'assets/pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {										//id is a route parameter
		templateUrl: 'assets/pages/restaurant.html',
		controller: 'restaurantController'
	})

})

// restaurants information controller
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {

		$scope.restaurantId = $routeParams.id;

		var restaurants = [{
	    name: 'Farzi Cafe',
	    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	    location: 'Connaught Place',
	    category: 'Casual Dining, Bar',
			id: 1,
	    vote: '4.2',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
	    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	  },
	  {
	    name: 'Alkauser',
	    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	    location: 'Chanakyapuri',
	    category: 'TAKEAWAY DELIVERY',
			id: 2,
	    vote: '4.2',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
			bestDish: {
				name: 'Corn Pizza',
				image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
			},
	    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	  },
	  {
	    name: 'Rajwada',
	    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	    location: 'Connaught Place',
	    category: 'Casual Dining, Bar',
			id: 3,
	    vote: '4.2',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
	    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	  },
	  {
	    name: 'Farzi3 Cafe',
	    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	    location: 'Connaught Place',
	    category: 'Casual Dining, Bar',
			id: 4,
	    vote: '4.2',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
	    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	  },
	  {
	    name: 'Farzi4 Cafe',
	    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	    location: 'Connaught Place',
	    category: 'Casual Dining, Bar',
	    vote: '4.2',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
	    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	  }];

		$scope.restaurant = restaurants[$routeParams.id - 1];

		$scope.ingredients = [];

		$scope.getIngredients = function(url) {

			var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'

			$http({
				'method': 'POST',
				'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
				'headers': {
					'Authorization': 'Key fa1aac10395e45408379764a27eb6fe8',
					'Content-Type': 'application/json'
				},
				'data': data
			}).then(function (response) {
									var ingredients = response.data.outputs[0].data.concepts;
									for (var i =0;i < ingredients.length;i++) {
										$scope.ingredients.push(ingredients[i].name);
									}
							},function (xhr) {
				      	console.log(xhr);
				 });
				// success:
				//       error: </ingredients.length;i++)>
		}

})


// login Controller
foodieApp.controller('loginController',function($scope,$location) {

	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}

})

foodieApp.controller('mainController',function($scope) {

  // first object
  $scope.restaurants = [{
    name: 'Farzi Cafe',
    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    location: 'Connaught Place',
    category: 'Casual Dining, Bar',
		id: 1,
    vote: '4.2',
    cuisines: 'Modern Indian',
    cost: '2200',
    hours: '12 Noon to 1 AM (Mon-Sun)',
    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
    name: 'Alkauser',
    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    location: 'Chanakyapuri',
    category: 'TAKEAWAY DELIVERY',
		id: 2,
    vote: '4.2',
    cuisines: 'Modern Indian',
    cost: '2200',
    hours: '12 Noon to 1 AM (Mon-Sun)',
		// bestDish: {
		// 	name: 'Corn Pizza',
		// 	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
		// },
    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
    name: 'Rajwada',
    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    location: 'Connaught Place',
    category: 'Casual Dining, Bar',
		id: 3,
    vote: '4.2',
    cuisines: 'Modern Indian',
    cost: '2200',
    hours: '12 Noon to 1 AM (Mon-Sun)',
    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
    name: 'Farzi3 Cafe',
    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    location: 'Connaught Place',
    category: 'Casual Dining, Bar',
		id: 4,
    vote: '4.2',
    cuisines: 'Modern Indian',
    cost: '2200',
    hours: '12 Noon to 1 AM (Mon-Sun)',
    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
    name: 'Farzi4 Cafe',
    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    location: 'Connaught Place',
    category: 'Casual Dining, Bar',
		id: 5,
    vote: '4.2',
    cuisines: 'Modern Indian',
    cost: '2200',
    hours: '12 Noon to 1 AM (Mon-Sun)',
    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  }];


})
