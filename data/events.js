// A list of all events to be displayed in the events tab. Links are optional.
// So as to not have to enter events at the top, I reverse the array.
function getEvents() {
	var eventList = {
		past: [
			{name: "Game Jam VII", time: "2/5/16 - 2/7/16", location: "Lieb 318", link: "https://itch.io/jam/sgdc-gj7"},
			{name: "Doug Lombardi Q&A 2016", time: "2/24/16", location: "EAS 222", link: "https://www.youtube.com/watch?v=gJefqhf6Sc8"},
			{name: "Let's Make a Game 2", time: "3/5/16", location: "EAS 230"},
			{name: "Game Jam VIII", time: "4/8/16 - 4/15/16", location: "Lieb 318", link: "https://itch.io/jam/sgdc-gj8"},
			{name: "Spring Showcase 2016", time: "4/29/16", location: "Jacobus Lounge"},
		],
		present: [
			//really should only be one event here...just in case, I made the 's' conditionally appear if this is longer than 1
			//don't worry if this is empty, the table will hide itself until it is populated
			{name: "Summer Jam III", time: "6/1/16 - 8/19/16", location: "N/A", link: "https://itch.io/jam/sgdc-sj3"},	
		],
		upcoming: [
			{name: "Learn Jam 2016", time: "TBD", location: "TBD", link: "events/learnjam"},
			//{name: "Game Jam IX", time: "TBD", location: "Lieb 318"},
			
		],
	};

	//place new events in upcoming, then move them to present in the week beforeish of the event until it is done
	//then move it to the end of past

	eventList.past.reverse();
	eventList.present.reverse();
	eventList.upcoming.reverse();
	return eventList;
}