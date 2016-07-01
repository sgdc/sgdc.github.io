var app = angular.module('page', []);
var tryJson = false;

app.controller('PageController', function() {
	this.value = 0;
	this.redirects = getRedirects();
	this.pageContents = getPageContents();

	this.checkPage = function () {
		//called on page load
		var url = window.location.href;

		var pieces = url.split("#");
		//check for #tabName, automatically jump there
		for (var i = 0; pieces.length > 1 && i < this.navMembers.length; i++) {
			if(pieces[1].toLowerCase() == this.navMembers[i].display.toLowerCase()) {
				this.value = i;
				window.location.hash = this.navMembers[i].display.toLowerCase();
			}
		}

		//check for redirects, defined in page.js
		for(var i = 0; pieces.length > 1 && i < this.redirects.length; i++) {
			if(pieces[1].toLowerCase() == this.redirects[i].name.toLowerCase()) {
				this.pageContents[0].title = "Redirecting...";
				window.location.hash = "";
				window.location.href = this.redirects[i].link;
			}
		}
	}

	this.setValue = function(v){
		if (this.value != v)
		{
			this.value = v;
			for(var i = 0; i < this.navMembers.length; i++) {
				if (v == i) {
					window.location.hash = this.navMembers[i].display.toLowerCase();
				}
			}
		}
	};
	this.valueIs = function (v){
		return this.value === v;
	};

	//navbar data
	this.dropdownMembers = getNavbarDropdownMembers();
	this.navMembers = getNavbarMembers();
	//homepage data
	this.socialMediaLinks = getSocialMediaLinks();
	//games page data
	this.games = getGames();
	this.jams = getJams();
	//members page data
	this.members = getMembers();
});


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

app.directive('memberTables', function(){
	return {
		restrict: 'E',
		templateUrl: './comp/member-tables.html',
	};
});

