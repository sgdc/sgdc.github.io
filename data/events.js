// A list of all events to be displayed in the events tab. Links are optional.
// So as to not have to enter past events at the top, I reverse the past array.

//when entering upcoming events, place newer ones at the bottom of the upcoming list
//as they become relevant, move them to present
//when they're done, move them to past
function getEvents() {
	var eventList = {
		past: [
			//Spring '08
			{name: "Dev LAN w/ C2GS", time: "4/19/08", location: "BC122"},

			//Fall '08
			{name: "SGDC Competition", time: "11/3/08 - 1/29/09", location: "N/A"},

			//Spring '09
			{name: "SGDC Boot Camp I", time: "Wednesdays - Spring '09", location: "BC122"},

			//Fall '09
			{name: "SGDC Boot Camp II", time: "Wednesdays - Fall '09", location: "EAS 308"},

			//Fall '10
			{name: "SGDC++ Lessons", time: "Wednesdays - Fall '10", location: "Babbio 221"},

			//Spring '12
			{name: "1 Hour Game Jam", time: "4/3/12", location: "Burchard 127"},

			//Fall '12
			{name: "Winter '12 Game Jam", time: "10/26/12", location: "Burchard 127", theme: "Water, Vision, Bears"},
			{name: "Winter Showcase 2012", time: "12/12/12", location: "Burchard 127"},

			//Fall '13
			{name: "Spring '13 Game Jam", time: "3/1/13 - 3/3/13", location: "Burchard 127", theme: "Destruction"},


			//Fall '13
			{name: "Thunderbolt Talks", time: "9/17/13", location: "Burchard 127"},
			{name: "Make Your Own Board Game '13", time: "9/24/13", location: "Burchard 127"},
			{name: "1 Hour Game Jam", time: "10/22/13", location: "Burchard 127"},
			{name: "Inside the Industry Talk", time: "11/18/13", location: "BC122"},
			{name: "Winter '13 Game Jam", time: "11/22/13 - 11/24/13", location: "Burchard 127", theme: "Attraction, Seahorse"},
			{name: "Winter Showcase 2013", time: "12/3/13", location: "BC122"},

			//Spring '14
			{name: "Make Your Own Board Game '14", time: "2/12/14", location: "Burchard 127"},
			{name: "Games++ 2014", time: "2/29/14", location: "MPK", link: "http://www.gamesplusplus.org/"},
			{name: "Spring '14 Game Jam", time: "4/5/14 - 4/11/14", location: "Burchard 127", theme: "Fear"},
			{name: "Spring Showcase 2014", time: "4/11/14", location: "Burchard 127"},

			//Summer '14
			{name: "Summer Jam I", time: "8/8/14", location: "N/A", theme: "Steam"},

			//Fall '14
			{name: "Game Jam I", time: "9/26/14 - 9/28/14", location: "Lieb 318", theme: "Magic"},
			{name: "Learn Jam I", time: "10/25/14", location: "Peirce 120"},
			{name: "Game Jam II (R.A.G.E.)", time: "11/10/14 - 11/14/14", location: "Lieb 318", theme: "Freedom"},
			{name: "Winter Showcase/Light Up the Night", time: "12/2/14", location: "Hayden Lounge"},

			//Spring '15
			{name: "Spring Board Game Jam", time: "2/3/15", location: "Morton 203"},
			{name: "Game Jam III", time: "2/13/15 - 2/16/15", location: "Lieb 318", theme: "Global"},
			{name: "Games++ 2015", time: "3/4/15", location: "MPK", link: "http://www.gamesplusplus.org/"},
			{name: "Learn Jam II", time: "3/7/15", location: "BC122"},
			{name: "Doug Lombardi Q&A 2015", time: "3/24/15", location: "Lieb 318", link: "https://www.youtube.com/watch?v=eP2xvPkat3M"},
			{name: "Let's Make a Game 1", time: "4/4/15", location: "BC122"},
			{name: "Game Jam IV", time: "4/10/15 - 4/17/15", location: "Lieb 318", theme: "Discrete"},
			{name: "Spring Showcase 2015", time: "4/24/15", location: "Hayden Lounge"},

			//Summer '15
			{name: "Summer Jam II", time: "7/17/15 - 7/19/15", location: "N/A", theme: "Warpstar"},

			//Fall '15
			{name: "Game Jam V", time: "9/18/15 - 9/20/15", location: "Lieb 318", theme: "Expand"},
			{name: "Winter Board Game Jam", time: "10/6/15", location: "Lieb 318"},
			{name: "Learn Jam III", time: "10/10/15", location: "BC122"},
			{name: "Game Jam VI", time: "11/6/15 - 11/13/15", location: "Lieb 318", theme: "Extract"},
			{name: "Winter Showcase 2015", time: "12/4/15", location: "Peirce 220"},

			//Spring '16
			{name: "Game Jam VII", time: "2/5/16 - 2/7/16", location: "Lieb 318", link: "https://itch.io/jam/sgdc-gj7", theme: "Experiment"},
			{name: "Doug Lombardi Q&A 2016", time: "2/24/16", location: "EAS 222", link: "https://www.youtube.com/watch?v=gJefqhf6Sc8"},
			{name: "Let's Make a Game 2", time: "3/5/16", location: "EAS 230", link: "http://bit.do/lmag2"},
			{name: "Games++ 2016", time: "3/12/16", location: "MPK", link: "http://www.gamesplusplus.org/"},
			{name: "Game Jam VIII", time: "4/8/16 - 4/15/16", location: "Lieb 318", link: "https://itch.io/jam/sgdc-gj8", theme: "Infinity"},
			{name: "Spring Showcase 2016", time: "4/29/16", location: "Jacobus Lounge"},

	      	//Summer '16
            {name: "Summer Jam III", time: "6/1/16 - 8/19/16", location: "N/A", link: "https://itch.io/jam/sgdc-sj3", theme: "Season"},	

			//Fall '16
			{name: "Learn Jam 2016", time: "9/11/16", location: "Peirce 116", link: "events/learnjam"},
			{name: "Game Jam IX", time: "9/23/16 - 9/25/16", location: "Lieb 318", theme: "Quality Control", link: "https://itch.io/jam/sgdc-gj9"},
			
		],
		present: [
			//really should only be one event here...just in case, I made the 's' conditionally appear if this is longer than 1
			//don't worry if this is empty, the table will hide itself until it is populated
	
		],
		upcoming: [
			
		],
	};

	//place new events in upcoming, then move them to present in the week beforeish of the event until it is done
	//then move it to the end of past

	eventList.past.reverse();
	//eventList.present.reverse();
	//eventList.upcoming.reverse();
	return eventList;
}
