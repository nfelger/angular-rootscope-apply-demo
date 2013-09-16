angular-rootscope-apply-demo
============================

Demo app to show problem with angulartics and $rootScope.apply().

To reproduce:
- checkout project,
- run `python -m SimpleHTTPServer` in the project directory,
- open `localhost:8000/index.html`,
- you will see a blank page.

Now, if you comment out line 14 of app.js **or** if you uncomment line 1 and comment out line 2, and reload the page, "HI THERE" will appear. If either the `$rootScope.apply()` or the `angulartics` dependency is present, the view renders fine, but if **both** are present, it doesn't.
