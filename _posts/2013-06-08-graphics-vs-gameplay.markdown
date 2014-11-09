---
layout: post
title: Graphics vs Gameplay
date: 2013-06-08 13:49:25.000000000 -04:00
categories:
- Design
tags:
- Design
- Gaming
- UX
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  Post_Background: graphics.jpg
  dsq_thread_id: '1379212186'
  Mood: thinking.gif
author:
  login: admin
  email: stevietat@hotmail.com
  display_name: Stivo
  first_name: Stephen
  last_name: Taubman
---
### A common argument made in the videogame industry is that good gameplay should always come before good graphics. I'm starting to wonder if this shouldn't be the same case for interactive design.

As interactive designer, I'll spend hours in Photoshop designing my layouts. Setting up proper grids and spacing, finding the perfect typography, tweaking layer effects...It's easy to get lost in the time-warp of pixel pushing. And while this may be appropriate for jobs like a basic marketing site, when it comes to designing complex web software, this process feels a bit backwards. If I'm supposed to be designing an interactive experience, then why is so much of my time being dedicated to the purely visual and stationary aspects of the design?

#### Going beyond, 'How should the menu work?'

Now when I talk about interaction design, I should make it clear that I'm not just talking about what type of expanding menu to use, or what the rollover state Object A should have. With the technology and tools available to us now, we should be talking about transitions between pages, draggable object states, text input focus effects, or feedback on triggered events--just to name a few. And I don't think we should just throw this job over to our Information Architects, since many of these decisions are tied to the visual presentation of the experience. Interactive designers should be spending just as much time figuring out how this interactive experience will 'feel' as they spend scouring type libraries for that perfect font, or adjusting 1px bevels on a button. Actually, we should probably be spending more time on it.<!--more-->

Let's look at the videogame industry--a profession that has been publishing extremely complex interactive experiences for decades. If you've ever looked at an early build of many games, you'll notice something: The visuals are generally not so hot. That's because the first thing any game designer needs to create and test, is the actual gameplay. Rough models are used in basic environments to test the physics, game mechanics, and overall level architecture. Then heavy testing is done on these prototypes to figure out if the experience is working the way they imagined it would. Small things like how easy is it for people to cycle through their equipped items can make huge differences to a game's overall appeal, especially when you consider people will be playing the game for hours. Texturing, lighting, reflections, detailed models and the other visual trimmings are things that can come later. Because if you can't get your gameplay feeling right, your game will suffer, no matter how good the graphics are. And in much the same way, interactive design needs to 'feel' good. Many of us are designing products that are intended to be used by people on a fairly regular basis. And while pixel perfect buttons and beautiful typography will be nice to look at for the first day or two, none of that will keep me coming back if constant use results in a clunky experience.

#### The Process

So how do we do a better job of spending more time and energy on interactive design vs. just visual design? The main problem we face is using the outdated webdesign shop or agency process when it comes to building software style experiences. It tends to go something like this:

1.  Project discovery: What are the Requirements, what are the user needs?
2.  Information Architecture: Wireframes
3.  Design: Mockups of the wireframes
4.  Development: Build out the project based on designs and UX documentation.

Clearly I've oversimplified it, but in general this is the go-to-method project managers and clients love. There are clearly defined checkpoints and pieces of documentation every step of the way. But where this process fails is we only get a working prototype until the very last step: Development. This makes it incredibly difficult to give due diligence to designing the experience that exists between the pages of wireframes or design mockups. Imagine trying to design a game like this. Would you really consider designing the entire set of levels and characters, complete with finished textures and models, before you've even done a playthrough of your first level?

#### Applying this thinking to our process

Now I'm not suggesting we just completely copy the game design process. We don't have those time frames, nor do we need them. But I would suggest right from the start of a project, we try to get to a rough, working prototype as fast as possible. For example, instead of going into a full wireframe exercise after the project discovery, I would try a more quick and rough format of sketching.

<div class="imagecaption"><img class="aligncenter size-full wp-image-473" alt="schematic" src="{{site.url}}assets/schematic1.jpg" width="960" height="452" /><br />
<h4>A storyboard style sketched schematic is a great way to very quickly map out your experience</h4>
</div>
I've been finding it very helpful to keep all the my screens on a single canvas. This helps to check consistency across screens, and forces you to think more about things like screen transitions and how you're using different UI components across the entire experience. This document should be a collaboration between an IA and Designer, so that some thought is given to information visualization and layout priority. Once these have been completed and reviewed, START BUILDING! Have your developers use default component libraries, or themes like [Bootstrap](http://twitter.github.io/bootstrap/ "Bootstrap") so they don't need to spend any time styling or skinning this initial interface. They key is to quickly get to a prototype you can click around in. It's surprising how once you start to play with your product, you'll notice issues and opportunities for improvement that you would never have found from looking at flat comps. These are all things that should be informing the actual visual design that's later to come.

Once the experience is starting to feel pretty tight and all of your main elements are in place, then you can start getting into refining the design. You'll want to flag bigger overall layout changes first, since that will likely have a larger effect on the build. Focus on the nitty-gritty later on, since different type styles and graphic treatments are generally easier to swap in later. However, you really should have a working knowledge of how your software is being built so you can identify which design based changes would probably cause developers more grief than others.

#### Prettier won't always win you the game

I know it can be tempting for designers to jump straight into Photoshop and start mocking up pixel accurate screens. Your team and clients always seem to get a lot more excited about seeing high fidelity screens because, well...They just look so damn nice! But do your end users really care? Probably not as much as we'd like to think. People come back to good experiences. Now that should definitely include excellent typography, nice photography, well organized grids, and clean interfaces. But those are meaningless without a solid interactive experience working behind them.

<div class="imagecaption"><img class="aligncenter size-full wp-image-475" style="border: 1px solid #CCC;" alt="googlemaps" src="{{site.url}}assets/googlemaps.jpg" width="960" height="452" /><br />
<h4>Google vs Mapquest. Static screens don't show how vastly superior Google's product was to Mapquest.</h4>
</div>

A good example of this would be when Google maps was first launched back in 2005. It wasn't particularly beautiful or eye-catching from a visual perspective. It was probably a little cleaner than their competitor Mapquest, but these visual differences aren't what set Google Maps apart. What gave Google the edge was how vastly superior their experience was. Mapquest required you to click on arrow and zoom buttons to navigate, with the page refreshing each time. Google allowed you actually grab the map and start moving it around. With the flick of your mousewheel, you could quickly scroll in or out. All of this was done with asynchronous loading so there were no page refreshes between interactions. This all meant browsing a map was faster and more intuitive than ever before. And I'll wager that the team who built it started off with tons of rough prototyping and interactive testing, vs. designing high fidelity mockups.

None of this is to give any excuse for putting out shoddy looking design, even if the interaction feels nice. It's about finding excellent solutions in both your visual presentation and interactive experience. Just make sure your gameplay is AAA quality.
