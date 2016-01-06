# Cascade Effect
Cascade Effect is a tabletop RPG designed to be played either with pencil and paper or with the companion mobile application, all around the same table.
This repo is for the development of both the mobile application and the current ruleset. The html files in the /rulebook/ directory are the most current version of the ruleset. Major changes to the ruleset are tracked in the internal changelog file, changes to the application are just tracked through commit comments.

## Usage
The final intended form for the application is a hybrid app packaged up by Phonegap or Cordova. The settings for this are not implemented yet, so if you wish to run it as an app you'll have to package it up on your own.
The application can be previewed without being packaged just by opening index.html in a browser. This is good enough for creating, saving, and using characters, but it has two drawbacks. First, is that character data is saved to localStorage, while this is permanent in a packaged app, it only lasts until you clear your browser history in a browser. Second, is that the rulebook display depends on jQuery.load(), which, for security reasons, doesn't allow you to load files from your local machine. In order to read the rulebook with this limitation the files need to be viewed from a web server.

##### Public Preview
For the time being, a preview version is hosted at cascade-effect.com/cascade/. This preview version will remain publically available until development and playtesting of the game is complete.

##Libraries
Cascade Effect makes use of jQuery Resize Event by benalman.com, and TinySort by ronvalstar.nl, in addition to vanilla jQuery and jQuery Mobile's touch library.
