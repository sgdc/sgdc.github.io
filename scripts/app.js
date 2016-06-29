var app = angular.module('page', []);
var tryJson = false;

app.controller('PageController', ['$http', function($http) {
	this.value = 1;
	this.dropdownMembers = getNavbarDropdownMembers();
	this.navMembers = getNavbarMembers();

	this.setValue = function(v){
		if (this.value != v)
		{
			this.value = v;
			for(var i = 0; i < this.navMembers.length; i++) {
				if (v == this.navMembers[i].value) {
					window.location.hash = this.navMembers[i].display.toLowerCase();
				}
			}
		}
	};
	this.valueIsInArray = function(v){
		for(var i = 0; i < v.length; i++)
		{
			if (v[i] === this.value)
				return true;
		}
		return false;
	};




	this.checkPage = function () {
		var url = window.location.href;

		var pieces = url.split("#");
		for (var i = 0; pieces.length > 1 && i < this.navMembers.length; i++) {
			if(pieces[1].toLowerCase() == this.navMembers[i].display.toLowerCase()) {
				this.value = this.navMembers[i].value;
				window.location.hash = this.navMembers[i].display.toLowerCase();
			}
		}

			/*if (pieces[1] == "games") {
				this.value = 2;
			}
			else if (pieces[1] == "members") {
				this.value = 3;
			}*/
	}

	this.valueMap = getValueMap();

	this.pageContents = getPageContents();
	this.items = getItems();
	this.members = getMembers();
}]);


app.directive('navbar', function(){
	return {
		restrict: 'E',
		templateUrl: './comp/navbar.html',
	};
});

app.directive('jumbotron', function(){
	return {
		restrict: 'E',
		templateUrl: './comp/jumbotron.html',
	};
});

app.directive('itemOnDisplay', function(){
	return {
		restrict: 'E',
		templateUrl: './comp/item-on-display.html',
	};
});

app.directive('itemGallery', function(){
	return {
		restrict: 'E',
		templateUrl: './comp/item-gallery.html',
	};
});


