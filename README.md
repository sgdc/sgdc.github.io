# Welcome to <http://sgdc.github.io>!

Welcome to the Stevens Game Development Club website, version 3.0, written by Adam Gincel (President starting Spring 2016)
This website is written using both AngularJS and some Bootstrap (for mobile compatibility)

## How the site works, kind of
If you don't understand AngularJS you'll be pretty confused as to how some of this site works, but the basic gist is:

Angular lets you create custom html tags that get filled in as defined in /scripts/app.js (in this case), so index.html's body seems very small.

`/comp/` has a lot of the actual content of the site. navbar.html covers the top part of the site (logo, the buttons), and `jumbotron.html` handles the basic contents of each tab.

The games item gallery was moved to `item-gallery.html` for readability.

THANKFULLY, I designed this site so you don't really need to know too much to add content.

## --Adding basic content--

If you're fine sticking with my basic structure (home, games, members, events, catalog), then adding content is a breeze.

Most of what you'll want to touch is in the `/data/` folder. 
- `games.js` holds all games
- `members.js` holds members 
- `page.js` holds things about the page, like the names of the tabs, their titles and starting paragraphs, etc. You probably won't want to touch this one.
- `redirects.js` has any redirects. You'll probably want one of these per Game Jam, unless you want to be nice and have both /gjx and /gamejamx. While the jams are typically stylized with roman numerals, I use normal numbers in links because I don't expect people to remember how to type 24 (XXIV), plus caps make that annoying though my redirects check for lowercase. More on that in a bit.
- `events.js` holds info for events. Events can link to custom pages, discussed below.
- `catalog.js` holds links and pictures for catalog items, organized into $50, $40, $25, and $20 tiers.

### --How To--
- [Adding Games](https://github.com/sgdc/sgdc.github.io/wiki/Adding-Games)
- [Adding/Editing Members](https://github.com/sgdc/sgdc.github.io/wiki/Adding-or-Editing-Members)
- [Adding Redirects](https://github.com/sgdc/sgdc.github.io/wiki/Adding-Redirects)
- [Adding Events](https://github.com/sgdc/sgdc.github.io/wiki/Adding-Events)
- [The Catalog](https://github.com/sgdc/sgdc.github.io/wiki/Catalog)
- [Custom Pages](https://github.com/sgdc/sgdc.github.io/wiki/Custom-Pages)
- [Advanced](https://github.com/sgdc/sgdc.github.io/wiki/Advanced)

--------------------------------

Overall, that's the SGDC site. It loads super quick, is very responsive and clean. I'm proud of it and hope it won't need to be replaced for some time. 
