# timeslotter
A small utility to create timeslots. To view, clone the repository the nrun bower install and npm install, that should be enouch to get it started. Then from the cli, run 'node run.js'. 

## warnings
Please note, imlementation is basic, styles are not too elaborate as I just coded on the fly and without a design, much of it should be refctored, both in terms of markup / styles and functionality.
I chose to use a Requirejs / Bckbone setup. I also chose to maintain the directory trees for the minified files rather then using r.js to export the app in one file: this can be changed to use r.js.
 I didn't implement any advanced form validation, just basic stuff. Of course this could be extended a lot, I did add methods for validation, just a matter of enhancing their logic in the form class: I did this on purpose as I wanted to focus more on application design / structure, so I coded a more advanced form management OO design.