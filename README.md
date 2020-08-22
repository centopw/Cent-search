
Cen-Search.
=============
[![Discord Users Online](https://discordapp.com/api/guilds/483209992980135936/widget.png?style=shield)](https://discord.gg/BVu2SaC)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=centopw_Cent-search&metric=alert_status)](https://sonarcloud.io/dashboard?id=ccentopw_Cent-search)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=centopw_Cent-search&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=centopw_Cent-search)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=centopw_Cent-search&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=centopw_Cent-search)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=centopw_Cent-search&metric=security_rating)](https://sonarcloud.io/dashboard?id=centopw_Cent-search)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=centopw_Cent-search&metric=ncloc)](https://sonarcloud.io/dashboard?id=centopw_Cent-search)

A Google clone using [Reactjs](https://reactjs.org/). and google custom search API

Demo.
=============
 You can see a live demo [here](https://cent-search.web.app)
 
 Since we are using Free API provide by google, the app only can request 100 search/Days
 
About.
=============

-Deploy using [Firebase](https://firebase.google.com/) 
-Using API from google custom search
-Using Reactjs

Setup.
=============

Make sure you have install [nodejs](https://nodejs.org)

Go to Google developer page [Here](https://developers.google.com/custom-search/v1/overview#api_key)  click "GET A KEY", Create a project and copy that key,go to ``./src/key.js`` replayce "YOUR_API_KEY" with the one you just get.

![Tut](https://github.com/centopw/Cent-search/blob/master/image/ezgif.com-gif-maker%20(1).gif)

After that navigate to Google custom search key [here](https://cse.google.com/cse/all) click on the project you just create and copy your Search engine ID (<b>MAKE SURE ``Search the entire web`` IS ON</b>), go to ``./src/useGoogleSearch.js`` replace ``ENGINE_ID`` with the ID you just copy

![Tut](https://github.com/centopw/Cent-search/blob/master/image/ezgif.com-crop.gif)

Navigate to project folder and Start the project:
   
   ``$ npm start``
   
All done and congratulation you just make your self a custom search engine!!!

ToDo.
====

 - Finish option bar
 - Optimize
 
 
Source code.
===========

https://github.com/centopw/Cent-search

Contact
=======
For all Question contact me:
centopw@gmail.com


[![Support Server](https://discordapp.com/api/guilds/483209992980135936/widget.png?style=banner3)](https://discord.gg/BVu2SaC)
