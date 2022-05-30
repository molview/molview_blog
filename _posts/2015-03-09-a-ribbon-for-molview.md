---
layout:     post
title:      A ribbon for MolView
date:       2015-03-09
summary:    An MS Office style ribbon in MolView? This is what it might look like!
categories: posts
---

MolView currently uses a classic style, single level dropdown menu to provide
access to all tools (except for the sketcher tools)
There are two important drawbacks to this menu style:

1. **Not very scalable:** although it is possible to extend the menu bar with
  some conditional menu's (menu's which are only visible in certain situations)
  I don't think the current menu offers much extra space. Of course you can add
  more toolbars but I always find stacked toolbars quite annoying.
2. **Less useful on touch devices:** in my experience the current MolView menu
  is usable but not very practical on touch devices.

The solution
------------
I believe a [ribbon](http://en.wikipedia.org/wiki/Ribbon_(computing)) might be
the solution. A ribbon is basically a number of tabs containing various tools
including buttons, dropdown menu's, number entries and even so called
[galleries](https://msdn.microsoft.com/en-us/library/windows/desktop/dd940501%28v=vs.85%29.aspx)
Ribbons would fit perfectly in the add-on oriented architecture of MolView 3
since they are very scalable. All you have to do to get an empty panel for tools
is adding a new tab! I guess it will also be useful on touch devices since it
does not disappear each time you click an item like a classic menu does.

To get an idea of what a ribbon would look like, I created a simple mockup
(shown below) The mockup contains three main tool buttons and three tabs. Since
the ribbon offers a lot of space the toolbars around the sketcher would no
longer be required leaving more space for the actual sketcher!

![MolView 3 Ribbon](/img/2015-03-09-ribbon.png)
