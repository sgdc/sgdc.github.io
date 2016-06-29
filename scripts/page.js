
//should really be json
function getNavbarDropdownMembers()
{
	return [];
	/*return [
		{link:'#', display: 'Action', value: 10},
		{link:'#', display: 'Another Action', value: 11},
		{link:'#', display: 'Something Else', value: 12}
	];*/
}

function getNavbarMembers()
{
	return [
		{link: '#', display: 'Home', value: 1},
		{link: '#', display: 'Games', value: 2},
		{link: '#', display: 'Members', value: 3},
	];	
}

function getValueMap()
{
	return [-1, 0, 1, 2, 3, 4, -1, -1, -1, -1, 5, 6, 7];
}

function getPageContents($http)
{
	if (tryJson)
	{
		$http.get('./json/pageContents.json').success(function(data){
				return data;
		});
		console.log("JSON did not succeed.");
	}
	return {
		"data": [
			{"title": "Stevens Game Development Club", "content": ["Welcome to the Stevens Game Development Club! We are a Student Organization at Stevens Institute of Technology. We foster a learning environment -- no experience is necessary."]},
			{"title": "Games", "content": ["Our club has plenty of talent working on some awesome games. We host two game jams each semester, and some members go above and beyond, working on side projects alone or in teams. This is a place to showcase some of their work."]},
			{"title": "Members", "content": ["Here is a list of our active members."]},
		],
	};
}