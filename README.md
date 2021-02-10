# Get your mixtape!

Get your personalized playlist matching your mood/activity, powered by the Spotify API!
You can visit the site here:
https://get-your-mixtape.herokuapp.com/  *(recommended in Firefox)*

## About the project

My goal here was to create a pet project connected to a topic - or topics - I am really passionate about. This small project truly is a mixture of some of my favorite things: coding, design, art, front-end development, webdesign and music.

## Project Stack

This project is strongly front-end focused, it was written mainly in Vanilla Javascript, with heavy usage of HTML and CSS, and just a hint of JQuery. My main goal here was to learn more about front-end development in plain Javascript, to use a freely accessible API, and to use my design-oriented side to create a really eye-catching site. 
It also has a little back-end written in Java, with the usage of Jetty, the only thing the back-end currently does is rendering the main page ("/"); I decided to keep the back-end in case I would like to expand the website with more fearues, where the backend would come in handy.

## Project Status

I have a lot of future plans with this project. First of all, since the deployment of this project, I have started to learn coding in C#, I studied the whole .NET ecosystem, and I have participated in web projects using ASP.NET Core for backend develpoment. Thus I certainly want to change the Java backend to C# and to use ASP.NET Core. I have a different path for this project too: to leave the backend completely, make it entirely front-end based, and as I want to learn Angular and Typescript now, I aim to use this project as a learning material for those.

## Project Screenshots to make you excited

The way the site looks upon opening, without searching for anything:

![alt text: "Welcome page"](https://i.ibb.co/WcG9RdN/get-your-mixtape-01.png)

The page after looking up playlists matching the given keyword(s):

![alt text: "Search result with playlist"](https://i.ibb.co/c3P8Bpm/get-your-mixtape-04.png)

## Installation and Setup Instructions

You need Java, Jetty and Maven installed for this project.
From this point, my instructions are strongly related to accessing the site from the IntelliJ IDE as this was the environment I have used when working on this project.
1. Clone the repository, and open the repository folder with IntelliJ
2. Select Run/Edit Configurations...
3. With the help of the + icon, choose Maven project
4. On the top right side, for the Name, write **getyourplaylist [jetty:run]**
5. Make sure that the Working directory contains the path to the project you have just copied
6. To Command line, put **jetty:run**
7. Click on Apply, then click on Ok
8. Build and run the project
9. As this project uses Jetty for hosting purposes, you will see a lot of messages on the Run tab. At the end of these, you should see something similar to this:
   *[INFO] Started ServerConnector@7a9ceddf{HTTP/1.1, (http/1.1)}{0.0.0.0:8080}*
10. Take the port from the above, and go to http://localhost/[port] in your selected browser
11. *Enjoy!*
**Bonus: If this looks like too much of a fuss, just visit the website I deployed to Heroku: 
                    https://get-your-mixtape.herokuapp.com/**  *(recommended in Firefox)*


