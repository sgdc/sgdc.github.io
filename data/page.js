
//should really be json

function getSocialMediaLinks()
{
	return [
		{src: "./images/facebook.png", link: "https://www.facebook.com/groups/433857053307661/"},
		{src: "./images/twitter.png", link: "https://twitter.com/stevensgdc"},
		{src: "./images/itchio.png", link: "https://sgdc.itch.io"},
		{src: "./images/github.png", link: "https://github.com/sgdc"},
		{src: "./images/youtube.png", link: "https://www.youtube.com/channel/UCLN2t6B7Sq7GVK6IqBG6cXg"},
		{src: "./images/discord.png", link: "http://sgdc.ml/discord"},
		{src: "./images/googledrive.png", link: "https://drive.google.com/folderview?id=0B5hkX3lT9Ze6fnZZc2JYZm9JaXg2b0Y5QkRPU2V0TmJrdy1xclVYR2xiY2FSZ0hZR1VYbkU"},
	];
}


function getNavbarDropdownMembers()
{
	//this will add a 'More' dropdown at the end of the navbar, may be finnicky
	//make sure you add these pages to getPageContents() right after existing pages.
	return [];
	/*return [
		{link:'#', display: 'Action'},
		{link:'#', display: 'Another Action'},
		{link:'#', display: 'Something Else'}
	];
	*/
}

function getNavbarMembers()
{
	//adding pages here will get you more tabs, define their titles and basic paragraph structures in
	//getPageContents, then flesh them out in jumbotron.html
	return ['Home', 'Games', 'Events', 'Members', 'Catalog'];	
}

function getPageContents()
{
	return [
			{title: "Stevens Game Development Club", content: ["Welcome to the Stevens Game Development Club! We are a Student Organization at Stevens Institute of Technology. We aim to foster a safe environment for entering the field of game development -- no experience is necessary."]},
			{title: "Games", content: ["Our club has plenty of talent working on some awesome games. We host two Game Jams each semester, and some members go above and beyond -- working on side projects alone or in teams. This is a place to showcase some of their work."]},
			{title: "Events", content: ["Typically, our club hosts 5 events each semester: 2 Game Jams, a public outreach event, our showcase, and a speaker event. Sometimes we host unofficial events or joint events. This page will tell you when and where events are happening."]},
			{title: "Members", content: []},
			{title: "Prize Catalog", content: ["When members win a prize in a Game Jam, we recommend our catalog of options to them. The prizes are organized by price, and may or may not be available at a given time. If you are a member who won a prize and want something not on this list, feel free to contact the e-board to work something out. Prizes are as flexible as we can make them."]}
		];
}