
timestamp-microservice-test

Show
README.md
API Project: Timestamp Microservice for FCC
User stories :
The API endpoint is GET [project_url]/api/timestamp/:date_string?
A date string is valid if can be successfully parsed by new Date(date_string) (JS) . Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds. In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.
If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.
If the date string is valid the api returns a JSON having the structure {"unix": <date.getTime()>, "utc" : <date.toUTCString()> } e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}.
If the date string is invalid the api returns a JSON having the structure {"unix": null, "utc" : "Invalid Date" }. It is what you get from the date manipulation functions used above.
Example usage:
https://curse-arrow.hyperdev.space/api/timestamp/2015-12-15
https://curse-arrow.hyperdev.space/api/timestamp/1450137600000
Example output:
{ "unix": 1450137600, "natural": "December 15, 2015" }
Logs
NaN

undefined


Could not find node 4.4.5, using 10


🙉📉 Your app is listening on port 3000


Could not find node 4.4.5, using 10


/app/server.js:50

      res.json({"unix": new Date().getTime()/1000, "utc" : new Date().toUTCString()});

      ^^^


SyntaxError: Unexpected identifier

    at new Script (vm.js:80:7)

    at createScript (vm.js:274:10)

    at Object.runInThisContext (vm.js:326:10)

    at Module._compile (internal/modules/cjs/loader.js:664:28)

    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)

    at Module.load (internal/modules/cjs/loader.js:600:32)

    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)

    at Function.Module._load (internal/modules/cjs/loader.js:531:3)

    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)

    at startup (internal/bootstrap/node.js:283:19)


Could not find node 4.4.5, using 10


/app/server.js:49

      if()

         ^


SyntaxError: Unexpected token )

    at new Script (vm.js:80:7)

    at createScript (vm.js:274:10)

    at Object.runInThisContext (vm.js:326:10)

    at Module._compile (internal/modules/cjs/loader.js:664:28)

    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)

    at Module.load (internal/modules/cjs/loader.js:600:32)

    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)

    at Function.Module._load (internal/modules/cjs/loader.js:531:3)

    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)

    at startup (internal/bootstrap/node.js:283:19)


Could not find node 4.4.5, using 10


🛢🏌 Your app is listening on port 3000


Could not find node 4.4.5, using 10


/app/server.js:49

      if(date_string=)

                     ^


SyntaxError: Unexpected token )

    at new Script (vm.js:80:7)

    at createScript (vm.js:274:10)

    at Object.runInThisContext (vm.js:326:10)

    at Module._compile (internal/modules/cjs/loader.js:664:28)

    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)

    at Module.load (internal/modules/cjs/loader.js:600:32)

    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)

    at Function.Module._load (internal/modules/cjs/loader.js:531:3)

    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)

    at startup (internal/bootstrap/node.js:283:19)


Could not find node 4.4.5, using 10


/app/server.js:49

      if(date_string===)

                       ^


SyntaxError: Unexpected token )

    at new Script (vm.js:80:7)

    at createScript (vm.js:274:10)

    at Object.runInThisContext (vm.js:326:10)

    at Module._compile (internal/modules/cjs/loader.js:664:28)

    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)

    at Module.load (internal/modules/cjs/loader.js:600:32)

    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)

    at Function.Module._load (internal/modules/cjs/loader.js:531:3)

    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)

    at startup (internal/bootstrap/node.js:283:19)


Could not find node 4.4.5, using 10


🐘💿 Your app is listening on port 3000


Could not find node 4.4.5, using 10


🚉🏌 Your app is listening on port 3000


Could not find node 4.4.5, using 10


❣️💿 Your app is listening on port 3000


Could not find node 4.4.5, using 10


🏘🛎 Your app is listening on port 3000


Could not find node 4.4.5, using 10


👼😜 Your app is listening on port 3000


Could not find node 4.4.5, using 10


👝🎹 Your app is listening on port 3000


Could not find node 4.4.5, using 10


/app/server.js:53

    }

    ^


SyntaxError: Unexpected token }

    at new Script (vm.js:80:7)

    at createScript (vm.js:274:10)

    at Object.runInThisContext (vm.js:326:10)

    at Module._compile (internal/modules/cjs/loader.js:664:28)

    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)

    at Module.load (internal/modules/cjs/loader.js:600:32)

    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)

    at Function.Module._load (internal/modules/cjs/loader.js:531:3)

    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)

    at startup (internal/bootstrap/node.js:283:19)


Could not find node 4.4.5, using 10


😾👮 Your app is listening on port 3000


Could not find node 4.4.5, using 10


👰🕶 Your app is listening on port 3000


Could not find node 4.4.5, using 10


/app/server.js:52

        {"unix": null, "utc" : "Invalid Date" }

               ^


SyntaxError: Unexpected token :

    at new Script (vm.js:80:7)

    at createScript (vm.js:274:10)

    at Object.runInThisContext (vm.js:326:10)

    at Module._compile (internal/modules/cjs/loader.js:664:28)

    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)

    at Module.load (internal/modules/cjs/loader.js:600:32)

    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)

    at Function.Module._load (internal/modules/cjs/loader.js:531:3)

    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)

    at startup (internal/bootstrap/node.js:283:19)


Could not find node 4.4.5, using 10


/app/server.js:52

        {"unix": null, "utc" : "Invalid Date" }

               ^


SyntaxError: Unexpected token :

    at new Script (vm.js:80:7)

    at createScript (vm.js:274:10)

    at Object.runInThisContext (vm.js:326:10)

    at Module._compile (internal/modules/cjs/loader.js:664:28)

    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)

    at Module.load (internal/modules/cjs/loader.js:600:32)

    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)

    at Function.Module._load (internal/modules/cjs/loader.js:531:3)

    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)

    at startup (internal/bootstrap/node.js:283:19)


Could not find node 4.4.5, using 10


/app/server.js:52

        {"unix": null, "utc" : "Invalid Date" }

               ^


SyntaxError: Unexpected token :

    at new Script (vm.js:80:7)

    at createScript (vm.js:274:10)

    at Object.runInThisContext (vm.js:326:10)

    at Module._compile (internal/modules/cjs/loader.js:664:28)

    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)

    at Module.load (internal/modules/cjs/loader.js:600:32)

    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)

    at Function.Module._load (internal/modules/cjs/loader.js:531:3)

    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)

    at startup (internal/bootstrap/node.js:283:19)


Could not find node 4.4.5, using 10


⛰💽 Your app is listening on port 3000


Could not find node 4.4.5, using 10


/app/server.js:52

        res.json({);

                  ^


SyntaxError: Unexpected token )

    at new Script (vm.js:80:7)

    at createScript (vm.js:274:10)

    at Object.runInThisContext (vm.js:326:10)

    at Module._compile (internal/modules/cjs/loader.js:664:28)

    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)

    at Module.load (internal/modules/cjs/loader.js:600:32)

    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)

    at Function.Module._load (internal/modules/cjs/loader.js:531:3)

    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)

    at startup (internal/bootstrap/node.js:283:19)


Could not find node 4.4.5, using 10


🏋🎉 Your app is listening on port 3000


NaN

undefined

NaN

hello

NaN

2015-12-25

1450137600

1450137600


Could not find node 4.4.5, using 10


☝️😺 Your app is listening on port 3000


Could not find node 4.4.5, using 10


🍽⛰ Your app is listening on port 3000


NaN

2015-12-25

1450137600000

1450137600000


NaN

2015-12-25

1450137600000

1450137600000
