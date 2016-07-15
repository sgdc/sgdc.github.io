// A list of all events to be displayed in the events tab. Links are optional.
// So as to not have to enter events at the top, I reverse the array.
function getEvents() {
	var eventList = {
		"past": [
			{"name": "Game Jam VII", "time": "2/5/16 - 2/7/16", "location": "Lieb 318", "link": "https://itch.io/jam/sgdc-gj7"},
			{"name": "Doug Lombardi Q&A 2016", "time": "2/24/16", "location": "EAS 222", "link": "https://www.youtube.com/watch?v=gJefqhf6Sc8"},
			{"name": "Let's Make a Game 2", "time": "3/5/16", "location": "EAS 230"},
			{"name": "Game Jam VIII", "time": "4/8/16 - 4/15/16", "location": "Lieb 318", "link": "https://itch.io/jam/sgdc-gj8"},
			{"name": "Spring Showcase 2016", "time": "4/29/16", "location": "Jacobus Lounge"},
		],
		"present": [
			{"name": "Summer Jam III", "time": "6/1/16 - 8/19/16", "location": "N/A", "link": "https://itch.io/jam/sgdc-sj3"},	
		]
	};
	eventList.past.reverse();
	eventList.present.reverse();
	return eventList;
}