---
layout:     post
title:      A ribbon for MolView
date:       2015-03-09
summary:    An MS Office style ribbon in MolView? This is what it might look like!
categories: posts
---

MolView is currently using a classic style single level dropdown menu to store
all of its tools, except for the sketcher tools which are stored in a couple of
toolbars around the sketcher. There are two important drawbacks to this menu
style:

1. **Not very scalable:** although it is possible to extend the menu bar with some
    conditional menu's (menu's which are only visible in certain situations) I
    don't think the current menu offers much extra space. Of course you can add
    toolbars like in Google Docs. This solution might even hold out for quite
    some time but I always find those stacked toolbars pretty annoying.
2. **Less useful on touch devices:** in my experience the current MolView menu is
    usable but not very useful on touch devices.

The solution
------------
I believe a [ribbon](http://en.wikipedia.org/wiki/Ribbon_(computing)) might be
the solution. A ribbon is basically a number of tabs containing various tools
including buttons, dropdowns, number entries and even so called
[galleries](https://msdn.microsoft.com/en-us/library/windows/desktop/dd940501%28v=vs.85%29.aspx).
Ribbons would fit perfectly in the add-on oriented architecture of MolView 3 since
they are very scalable. All you have to do to get an empty panel for tools is
adding a new tab! I guess it will also be useful on tXouch devices since it does
not disappear each time you click an item like a classic menu would.

To get an idea of what a ribbon would look like, I created a very simple drawing
(shown below) The drawing contains three main tool buttons and three tabs. Since
the ribbon offers a lot of space the toolbars around the sketcher would no longer
be required leaving more space for the actual editor!

![MolView 3 Ribbon]({{ site.url }}/img/2015-03-09-ribbon.png)
