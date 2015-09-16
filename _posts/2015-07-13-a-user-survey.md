---
layout:     post
title:      A user survey
date:       2015-07-13
summary:    What MolView users really want.
categories: posts
---

I wanted to get an overview of who the users of MolView are and which features
they really like, so I created a survey using Google Forms and asked users to
fill it out. It's been over a month now and I got 57 replies. That's probably
not enough for solid stats. However, it was definitely fun to read how much
everyone likes MolView! In this post I'll show a couple of charts from the
survey. I'll also respond to some comments. If your question remains unanswered,
please do not hesitate to ask it in the comments or send me an email!

Who uses MolView?
-----------------
First, users had select to which user category they belonged (high school
students, university students, teachers, researchers or enthusiasts), and how
often they used MolView on a scale of one (occasionally) to five (often). In the
chart below, I added this last number from all users in a specific user category
to get an impression of how much each user category uses MolView (so a user who
uses MolView often adds five points to his/her user category while a user who
uses MolView occasionally only adds one point).

<canvas class="chartjs-chart" data-chart-source="charts/2015-07-13-user-representation.json" height="200"></canvas>

The chart below shows the average experience with similar software, such as
ChemDoodle, PyMOL, Jmol and ChemWriter, per user category. Users were again
asked to choose a number between 1 (no experience) and 5 (much experience).

<canvas class="chartjs-chart" data-chart-source="charts/2015-07-13-user-experience.json" height="250"></canvas>

Which features are most popular?
--------------------------------

<canvas class="chartjs-chart" data-chart-source="charts/2015-07-13-feature-usage.json" height="250"></canvas>

Which future features are popular?
----------------------------------
<canvas class="chartjs-chart" data-chart-source="charts/2015-07-13-next-features.json" height="250"></canvas>

1. 3D tools (like: 3D editing, more color schemes, show/hide hydrogen)
2. 2D editing tools (like: polymers, fisher projection, copy/paste)
3. Computational chemistry (like: orbitals, molecular dynamics)
4. Loading/saving files from MolView (to the cloud)
5. Search tools (like: sort/filter/search by properties)
6. Molecular spectra analysis (like: NMR active nuclei, IR characteristics)
7. Jmol scripting (or exposing more Jmol features)
8. Rendering images using ray-tracing (QuteMol, POV-Ray)

<br/>

<ul class="remark">
    <li>Some users submitted new ideas. These are covered in the comments section below.</li>
</ul>

How should MolView 3 look?
--------------------------

<canvas class="chartjs-chart" data-chart-source="charts/2015-07-13-new-design.json" height="250"></canvas>

<ul class="remark">
    <li>Users were able to pick a number between one (negative) and five (positive). Note that the differences have been magnified for convenience.</li>
</ul>

What are typical devices and limitations?
-----------------------------------------

<canvas class="chartjs-chart" data-chart-source="charts/2015-07-13-devices.json" height="250"></canvas>

<ul class="remark">
    <li>ChromeOS was included in the form because it is a very important target OS for MolView.</li>
</ul>

What applications are used together with MolView?
-------------------------------------------------

<canvas class="chartjs-chart" data-chart-source="charts/2015-07-13-other-programs.json" height="250"></canvas>

Comments from users
-------------------
Below are some fragments from user comments in the form that I want to reply to.
The form was anonymous so I don't know who submitted the comments. Feel free to
email me if you want me to remove or edit your comment. I slightly edited some
comments to remove errors or to detach it from the rest of the comment.

<br/>

**Q. An offline application**

**A.** Good point! I am redesigning the architecture of MolView 3 in such a way
that it can be distributed as a Chrome App where a couple of important features
can be used offline.

<br/>

**Q. A drawing layer to mark a part of a molecule**

**A.** Great idea! In MolView 3 I will add support for add-on modules. This
might just become such an add-on!

<br/>

**Q. Rotate 3D molecules independent of each other (to compare configurations
for example)**

**A.** This feature has been requested before. It's definitely useful, but
technically it's surprisingly difficult. I'll keep thinking about it!

<br/>

**Q. Ability to draw reactions and isomers with R**

**A.** I'm planning to add a lot of new features to the sketcher of MolView 3.
There will be all sorts of new sketching features like functional groups and
perhaps also R.

<br/>

**Q. It would be awesome if you continued to provide HTML embed codes because it
is one of the killer features in your app which make me use MolView from other
apps.**

**A.** I definitely will! I added a deprecation message because the <u>http://molview.org/embed</u>
endpoint will no longer be available in MolView 3. However, I silently updated
MolView to use <u>http://embed.molview.org/v1/</u> for embedding. MolView 3 will
keep supporting this endpoint including the *v1* embedding parameters! You'll
have to update your embed codes to the new endpoint though. By the way,
embedding will get even more awesome in MolView 3!

<br/>

**Q. It would be awesome if there were a Google Docs add-on&hellip;**

**A.** Absolutely! I have been thinking about a Google Docs add-on too. I also
want to provide a so called gadget so you can embed MolView in Google Sites!

<br/>

**Q. To prepare my school course, I search for the molecules I want to show. It
would be nice if there is be a possibility to choose the last molecules, even if
they are not in a database.**

**A.** In theory the molecule is saved to the URL as soon as you convert it to a
3D model. If there is no database record (which is rare because PubChem has over
50 million compounds), a SMILES string is stored in the URL. A SMILES string can
store (almost) any molecular structure. Therefore you can simply copy/paste the
URL into your notes.

However, MolView 3 will add a more elegant solution for this issue! It will
store all recent searches in your HTML5 local storage (in contrast with cookies,
this is 100% client-side). You'll also be able to save molecules to a file. A
third idea I came up with while writing this answer is to not only store recent
searches to your local storage, but also the entire edit history. This way you
can continue where you left when you re-open MolView!

<br/>

**Q. Let me know if you ever need translational help (German).**

**A.** Thank you for offering! I want to build a community-driven localization
platform for MolView 3 and everyone is welcome to join!

<br/>

**Q. I love MolView! I am hoping to use it as a replacement for Spartan
software, so I would love to see more as far as calculations (dipole magnitude,
energy of formation, etc).**

**A.** MolView is still much simpler than Spartan and is actually not intended
to entirely replace software like Spartan. However, making computational
chemistry more intuitive is an important purpose of MolView, so there will
definitely be more tools over time! And everyone will be able to contribute more
tools to MolView by building add-ons!

Conclusion
----------
MolView has gained a lot of users since it was first released on
<u>molview.org</u> one year ago. I've collected some analytics in the line chart
below. There have been over 30.000 sessions in the past year! Traffic has
sextupled (&hellip;) since July 2014 (it's not entirely a fair comparison, but
let's forget that for a second) If MolView can maintain this growth there will
be 30k sessions per month by July next year! And to think there has barely been
any advertisement yet.

<canvas class="chartjs-chart" data-chart-source="charts/2015-07-13-analytics.json" height="250"></canvas>

I've been working on an out of the box design for MolView in the past month.
I'll publish the mockups soon. Stay tuned!
