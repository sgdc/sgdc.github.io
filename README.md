# Welcome to the sgdc.ml wiki!

Welcome to the Stevens Game Development Club website, version 3.0, written by Adam Gincel (President starting Spring 2016)
This website is written using both AngularJS and some Bootstrap (for mobile compatibility)

## How the site works, kind of
If you don't understand AngularJS you'll be pretty confused as to how some of this site works, but the basic gist is:

Angular lets you create custom html tags that get filled in as defined in /scripts/app.js (in this case), so index.html's body seems very small.

/comps/ has a lot of the actual content of the site. navbar.html covers the top part of the site (logo, the buttons), and jumbotron.html handles the basic contents of each tab.

The games item gallery was moved to item-gallery.html for readability.

THANKFULLY, I designed this site so you don't really need to know too much to add content.

## --Adding basic content--

If you're fine sticking with my basic structure (home, games, members, events, catalog), then adding content is a breeze.

Most of what you'll want to touch is in the `/data/` folder. 
- `games.js` holds all games
- `members.js` holds members 
- `page.js` holds things about the page, like the names of the tabs, their titles and starting paragraphs, etc. You probably won't want to touch this one.
- `redirects.js` has any redirects. You'll probably want one of these per Game Jam, unless you want to be nice and have both #gjx and #gamejamx. While the jams are typically stylized with roman numerals, I use normal numbers in links because I don't expect people to remember how to type 24 (XXIV), plus caps make that annoying though my redirects check for lowercase. More on that in a bit.
- `events.js` holds info for events. Events can link to custom pages, discussed below.
- `catalog.js` holds links and pictures for catalog items, organized into $50, $40, $25, and $20 tiers.


### --Adding Games--
go to `/data/games.js`
		
You're probably smart enough to figure this out on your own, but the structure of a game in the file is as follows:
        
    {
	    title: //the name of the game
	    time: //when it was made, ie a game jam
	    thumbnail: //game thumbnails go in /images/games
		//they get resized to 128px width, height auto
	    description: //game's description. Don't go super long
	    links: //an array of objects, sorry. example:
	    //[{text: "what it says", link: "real link"}, {..}]
	    //this was so we could have the links say anything we
	    //wanted, and have multiple. it's kinda weird I know.
	    devs: //an array of strings, each one a name
    },
		
I've been adding the games in reverse chronological order (ie, newest at the top.) I think that makes the most sense, but if you wanna rearrange that that's your prerogative I guess.

Thankfully itch.io makes it fairly easy to add people's games to the site. Thumbnails, links, and descriptions are already made for you. Maybe members will wanna do the work for you in the future, but I always had to add games myself in my time.

### --Adding Members--
This one's easy. `/data/members.js`

Update the eboard accordingly. The minor board will appear or disappear as it fills or empties. Position titles can be anything.

Alumni is also straightforward.

Normal members, the only important thing is that active field. You'll want to update this when you calculate who is an active member for elections. Instead of painstakingly checking it every time someone asks, just send out a link to <http://sgdc.ml/members> and they'll know instantly. Nonactive members don't even need to be in this list. Just ensure every every active member is when election time rolls around.

### --Adding redirects--
This is also easy. `/data/redirects.js`
		
All these do is, after page load, redirect users to another link. Yes, you can add joke ones. As of this writing I haven't.

By using the Github Pages `404.html`, I have any 404'd page redirect to `sgdc.ml/#what they typed after the slash`. This means all redirects that don't somehow line up perfectly with an existing file can be used as expected. Effectively, the site is a shortlinker for things like Game Jams.
		
just add another line with `{name: "what they type after the /", link: "the real hyperlink to go to"},`

ex: `{name: "test", link: "http://google.com"},` // sgdc.ml/test would then redirect to Google

The comma at the end is important, yes.

Nothing's stopping you from adding multiple redirects that have the link with different names, so if you want both #gjx and #gamejamx, just put two entries in. Sorry I didn't make name an array.

### --Adding Events--

Events are easy to add, located in `/data/events.js`

There are three arrays: Past, Present, and Upcoming.

- Past actually gets reversed before returning it. This allows you to paste events from present to the bottom of Past.
- Present is typically the single most relevant to the club at a given time. I don't think there should usually be more than one, though the site would support it and would say "Current Events" as expected.
- Upcoming is displayed before Past but after Present. Events the club has decided on a date and time for should be placed here, to avoid repetitive questions about event dates.

### --The Catalog--

`/data/catalog.js`

The Catalog was added to give people options if they win a prize in a Jam. These are suggestions, but they should help people pick prizes more quickly. Feel free to add prizes to this list or move them down as they get cheaper.



## --Adding advanced content--

Adding new tabs is fairly easy. `/data/page.js`

Add a new entry in getNavbarMembers() with the name of the tab you want (sorry about that link: '#' thing, it may be optional but I'm leaving it)

then go to getPageContents() and add another entry there. Using the template in jumbotron.html, the title will be an h1 at the top, and each string in content will be a paragraph. After that, you have to define each tab in the div that gets shown when valueIs(x). 


I don't recommend it, but if you uncomment the return on getDropdownMembers() you'll see what that does. I tried my best to make it work seamlessly, I doubt it will. A More v tab appears, with dropdown options. If you treat their indices as coming right after the normal pageContents, all should work. I didn't test it, sorry.

## --Custom Pages--

As opposed to all of the Angular stuff, I realized it may be useful to be able to create custom pages for Events. In the `/events/` folder you'll see a `/template/` folder with an `index.html` inside.

To make a new page, just copy and paste the /template/ folder within /events/ and rename the folder what you want the event to be. For example: `/events/learnjam`. You can now use redirects to link to `sgdc.ml/events/yourevent` and can simply write basic html to customize an event page. The logo and background line up with the normal style of the site, and the menu bar gets replaced with a "Return to events" link. From there, the page is yours to edit.


--------------------------------

Overall, that's the SGDC site. It loads super quick, is very responsive, clean. I'm proud of it and hope it won't need to be replaced for some time. 
