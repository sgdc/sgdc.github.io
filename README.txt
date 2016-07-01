Welcome to the Stevens Game Development Club website, version 3.0, written by Adam Gincel (President starting Spring 2016)

This website is written using both AngularJS and some Bootstrap (for mobile compatibility)

--How the site works, kind of

If you don't understand AngularJS you'll be pretty confused as to how some of this site works, but the basic gist is:

Angular lets you create custom html tags that get filled in as defined in /scripts/app.js (in this case), so index.html's body seems very small.

/comps/ has a lot of the actual content of the site. navbar.html covers the top part of the site (logo, the buttons), and jumbotron.html handles the basic contents of each tab.

The games item gallery was moved to item-gallery.html for readability.

THANKFULLY, I designed this site so you don't really need to know too much to add content.

--Adding basic content

If you're fine sticking with my basic structure (home, games, members), then adding content is a breeze.

All you'll want to touch is in the /data/ folder. 
- games.js holds all games
- members.js holds members 
- page.js holds things about the page, like the names of the tabs, their titles and starting paragraphs, etc. You probably won't want to touch this one.
- redirects.js has any redirects. You'll probably want one of these per Game Jam, unless you want to be nice and have both #gjx and #gamejamx. While the jams are typically stylized with roman numerals, I use normal numbers in links because I don't expect people to remember how to type 24 (XXIV), plus caps make that annoying though my redirects check for lowercase. More on that in a bit.

	--Adding Games
		go to /data/games.js
		
		You're probably smart enough to figure this out on your own, but
		the structure of a game in the file is as follows:
		{
			"title": //the name of the game
			"time": //when it was made, ie a game jam
			"thumbnail": //game thumbnails go in /images/games
				//they get resized to 128px width, height auto
			"description": //game's description. Don't go super long
			"links": //an array of objects, sorry
			//[{"text": "what it says", "link": "real link"}, {..}]
			//this was so we could have the links say anything we
			//wanted, and have multiple. it's kinda weird I know.
			"devs": //an array of strings, each one a name
		}
		
		I've been adding the games in reverse chronological order (ie,  			newest at the top. I think that makes the most sense, but if you
		wanna rearrange that that's your perogative I guess.

		Thankfully itch.io makes it fairly easy to add people's games to  		the site. Maybe members will wanna do the work for you in the 				future,	but I always had to add games myself in my time.

	--Adding Members
		This one's easy. /data/members.js

		Update the eboard accordingly. The minor board will appear or  				disappear as it fills or empties. Position titles can be  				anything.

		Alumni is also straightforward.

		Normal members, the only important thing is that active field.
		You'll want to update this when you calculate who is an active 				member for elections. Instead of painstakingly checking it every			time someone asks, just send out a link to
		http://sgdc.ml#members and they'll know instantly.

	--Adding redirects
		This is also easy. /data/redirects.js
		
		All these do is, after page load, redirect users to another 				link. Yes, you can add joke ones. As of this writing I haven't.
		
		just add another line with {"name": "what they type after the  				#", "link": "the real hyperlink to go to"},

		The comma at the end is important, yes.

		Nothing's stopping you from adding multiple redirects that have 			the link with different names, so if you want both #gjx and 				#gamejamx, just put two entries in. Sorry I didn't make name an 			array. Not about that n^2 searching.

--Adding advanced content

Adding new tabs is fairly easy. /data/page.js

Add a new entry in getNavbarMembers() with the name of the tab you want (sorry about that link: '#' thing, it may be optional but I'm leaving it)

then go to getPageContents() and add another entry there. Using the template in jumbotron.html, the title will be an h1 at the top, and each string in content will be a paragraph. After that, you have to define each tab in the div that gets shown when valueIs(x). 


I don't recommend it, but if you uncomment the return on getDropdownMembers() you'll see what that does. I tried my best to make it work seamlessly, I doubt it will. A More v tab appears, with dropdown options. If you treat their indices as coming right after the normal pageContents, all should work. I didn't test it, sorry.

--------------------------------

Overall, that's the SGDC site. It loads super quick, is very responsive, clean. I'm proud of it and hope it won't need to be replaced for some time. 
