// A list of all events to be displayed in the events tab. Links are optional.
// So as to not have to enter past events at the top, I reverse the past array.

//when entering upcoming events, place newer ones at the bottom of the upcoming list
//as they become relevant, move them to present
//when they're done, move them to past
function getEvents() {
	let eventList = {
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
			{name: "Game Jam IX", time: "9/23/16 - 9/25/16", location: "Lieb 120", theme: "Quality Control", link: "https://itch.io/jam/sgdc-gj9"},
			{name: "Q&A With Omar Shakir", time: "11/9/16", location: "Skyline Room"},
			{name: "Game Jam X", time: "11/11/16 - 11/18/16", location: "Lieb 120", theme: "Spinoff", link: "http://itch.io/jam/sgdc-gj10"},
			{name: "Fall Showcase 2016", time: "12/7/16", location: "Fielding Room"},

			//Spring 17
			{name: "Winter Jam I", time: "12/16/16 - 1/24/17", location: "N/A", theme: "One Input", link: "https://itch.io/jam/sgdc-wj1"},
			{name: "Game Jam XI", time: "2/10/16 - 2/12/17", location: "Lieb 120", theme: "Inversion", link: "https://itch.io/jam/sgdc-gj11"},
			{name: "Game Developers' Tournament Series", time: "3/25/17", location: "P116 & P120"},
			{name: "Game Jam XII", time: "4/11/17 - 4/21/17", location: "Lieb 120", theme: "Deja Vu", link: "http://sgdc.ml/gj12"},
			{name: "Showcase52", time: "5/2/17", location: "BC122"},

			//Summer '17
			{name: "Summer Jam IV", time: "5/7/17 - 9/5/17", location: "N/A", theme: "Pick Two", link: "http://sgdc.ml/sj4"},

			//Fall '17
			{name: "Learn Jam 2017", time: "9/9/17 12-6pm", location: "BC104", link: "http://sgdc.ml/learnjam"},
			{name: "Game Jam XIII", time: "9/22/17 - 9/24/17", location: "P116", theme: "Mundane Made Insane", link: "http://itch.io/jam/sgdc-gj13"},
			{name: "Game Jam XIV", time: "11/3/17 - 11/10/17", location: "BC104 & BC122", theme: "Dual/Duel", link: "http://itch.io/jam/sgdc-gj14"},
			
			//Spring '18
			{name: "Game Jam A", time: "2/9/18 - 2/11/18", location: "BC122 & BC104", theme: "Altitude", link: "http://itch.io/jam/sgdc-gja"},
			{name: "Game Jam B", time: "4/13/18 - 4/20/18", location: "P116", theme: "Breakpoint", link: "http://itch.io/jam/sgdc-gjb"},
			{name: "Game Developers' Tournament Series", time: "4/28/18", location: "M103"},
			{name: "Spring Showcase 2018", time: "5/1/18", location: "BC122"},
			
			//Summer '18
			{name: "Summer Jam V", time: "5/1/18 - 9/4/18", location: "BC122", theme: "5 Themes", link: "https://itch.io/jam/sgdc-sj5"},
			
			//Fall 2018
			{name: "Learn Jam 2018", time: "9/16/18 12-5pm", location: "BC 122", link: "http://sgdc.ml/learnjam"},
			{name: "Game Jam C", time: "9/28/18 - 9/30/18", location: "BC 122 & BC104", theme: "Cooperation", link: "https://itch.io/jam/sgdc-gjc"},
			{name: "Game Revenant Talk and Q&A", time: "10/23/18 9-11pm", location: "BC 122"},
			{name: "Game Jam D", time: "11/2/18 - 11/9/18", location: "EAS 222 & BC 122", theme: "Delve", link: "https://itch.io/jam/sgdc-gjd"},
			
		],
		present: [
			{name: "Winter Jam III", time: "12/14/18 - 1/22/19", location: "N/A", theme: "Siege, Control, Slippery, Reflect, Navigate", link: "https://itch.io/jam/sgdc-wj3"},
			//really should only be one event here...just in case, I made the 's' conditionally appear if this is longer than 1
			//don't worry if this is empty, the table will hide itself until it is populated
			
		],
		upcoming: [
			//Fall 2018
			
		], 
	};

	//place new events in upcoming, then move them to present in the week beforeish of the event until it is done
	//then move it to the end of past

	eventList.past.reverse();
	//eventList.present.reverse();
	//eventList.upcoming.reverse();
	return eventList;
}
