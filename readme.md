# ⁢NodeJS Introduction⁡
Before 2009, JS was only available for the browsers, and every browser was competing with each other for in terms of speed and executing the JS code. For that, The needed a JS Engine. Every browser came up with its own Engine. A Javascript Engine is a software component that executes Javascript code, So the faster the engine, the faster the browser.
Chrome: uses V8 Engine (the fastest because it executes using c++)
MS Edge: uses Chakra Core.
Firefox: uses Spider Monkey Engine

As at 2009: a man named Ryan Dahl introduced the NodeJS using the V8 engine.

NodeJS is a free and open source runtime for Javascript, and works on a single thread at a time; meaning you can only do 1 task at a time.
Javascript executes the code, while nodeJS has additional server modules eg filesystem, http, os, etc. which were created using combination of (c, c++, and Javascript), which makes it extremely fast.

> __⁢Features of NodeJS:⁡__
* NodeJS is not a programming Language or a Framework.
* NodeJS is a runtime environment for executing Javascript code.
* NodeJS is ASYNCHRONOUS/Non-blocking in nature.
* its a single threaded platform designed to handle multiple requests.
* NodeJS apps are ASYNCHRONOUS by nature.
* NodeJS is ideal for I/O-intensive apps and highly scalable.
* Do not use Node for CPU-intensive apps.
___
*** 
### Async nature of NodeJS
NodeJs is asynchronous in nature. Asynchronous means no wait. ie; task B doesn't depends on task A.
Synchronous means to wait.
⁡
### Difference between Browser JS and NodeJs
1. Browser JS has the DOM, NodeJS doesn't have DOM
2. Browser JS has the Window elements, NodeJS doesn't have Window elements.
3 Browser offers interactive apps, NodeJS offers Server-side apps.
4. Browser doesn't have filesystem, NodeJS has the filesystem.
5. Browser => ES6 modules, NodeJS => commonJS.

__Notes__
  > Install node:
```
sudo apt-get install nodejs
sudo apt install npm
node --v // to check currently installed NodeJS version.
npm -v   // to check currently installed npm version.
Uninstall node:
sudo apt remove nodejs
sudo apt remove npm
```

### ⁡⁢⁣Node Module System
in node every file is a Module. and the functions and variables defined in that file are a scope to that module only.
```js
console.log(module) ---> outputs:
                        Module {
                          id: '.',
                          path: '/home/dking/node-course/first-app',
                          exports: {},
                          filename: '/home/dking/node-course/first-app/app.js',
                          loaded: false,
                          children: [],
                          paths: [
                            '/home/dking/node-course/first-app/node_modules',
                            '/home/dking/node-course/node_modules',
                            '/home/dking/node_modules',
                            '/home/node_modules',
                            '/node_modules'
                          ]
                        }
```
all these are within the scope of this file alone, so in order to make these visible in other files, you can then call the: module.exports.anyvalue or object or function or randomname = the particular value.

example: in another .js file for example log.js: 
```js
const url = "https://google.com"

function log(message) {
  console.log(message)
}

to make the url or function visible from the outside of this file:
  module.exports.url = url
  or it doesn't have to be same name to be called from the outside.
  module.exports.myUrl = url
  or
  exports.myUrl = url

  module.exports.log = log
  or
  exports.log = log
```

### LOADING A MODULE:⁡
we use the require('specify the path of the module/file u want to call..')
eg:
```js 
let logger = require('./logger')
console.log(logger) ---> outputs the value/file type you are calling. ie { log: [Function: log] }
```
To load a function:
```js
logger.the function name() --> logger.log() --> outputs your function.
or
require('./logger').log() --> outputs your function
```
or you can return a single function:
in the function.js file:
```js
function sum(a,b) {
  return a + b
}
// export the function
module.exports = sum
```
In the app.js file:
```js
const callSum = require("./logger")
// to call the function
console.log(callSum(5, 9))

MODULE WRAPPER FUNCTION:
(function (exports, require, module, __filename, __dirname)) {

}
```
___
## 2. Path Module
__Some of the Useful nodeJS modules you should know:__
+ File System => to work with files.
+ HTTP => creating web servers that listens for http requests.
+ OS => to work with the Operating System.
+ Path => gives us a bunch of utility functions for working with paths.
+ Process => gives us info about the latest process running.
+ Query Strings => useful in building http services.
+ Stream => allows us work with streams of data.

i. Path Module:
```js
syntax ==> const path = require('path')
// const path = require('path')

const pathObj = path.parse(__filename)
console.log(pathObj)  // outputs info about this module file
```
ii. OS Module:
```js
syntax ==> const os = require('os')
os.cpus(), os.freemem(), network ips etc.
```

iii. File System:
```js
const fs = require('fs')

//Synchronous
console.log(fs.readDirSync('./'))  // displays all files in current folder.

//ASYNCHRONOUS
// it takes 2 args: the path and a callback function
fs.readDir('./', function (err, val) {
  if (err) console.log('Error', err)
  else console.log("Result:", val)
})
```
> Note: Always use ASYNCHRONOUS method.....
___
___
## 3: EVENT: a signal that indicate something has happened.
A Class: (blueprint) defines the properties and behavior of a concept.
An Object is an actual instance of that class.

initializing a class, EventEmitter
```const EventEmitter = require('events')```

initializing an object
```const emitter = new EventEmitter()```


Registering a listener for the event
This has to come before the event declaration.
```js
emitter.on("messageLogged", function() {
console.log("Listener called...")
})
```


Raising an event using emit; means making a noise, producing or signalling
```emitter.emit('messageLogged')```

___
___
## 4: EVENT Arguments:

You can pass in arguments in the event i.e line 160

Registering a listener for the event
This has to come before the event declaration.
```js
emitter.on("messageLogged", function(arg) {
  console.log("Listener called...", arg)
})
````

Raising an event using emit; means making a noise, producing or signalling
```emitter.emit('messageLogged', {id: 1, url: "http://"})```

or

event class
```const EventHandler = require('events')```
object of the class
```const events = new EventHandler()```

listener
```js
events.on('onConnected', item => {
  console.log(item.age)
})
```

action/event
```events.emit("onConnected", {data: 'message', age: 15})```  this returns value of age which is ==> 15

___
___
## 5: HTTP Module
Creating a HTTP server, then listening for an event or connection...
> importing the http module⁡
```js
const http = require('http')
```
> creating a server
```js
const server = http.createServer()
```

> listener/handler
```js
server.on('connection', (socket) => {
  console.log("someone connected...")
})

server.listen(3000)
console.log("Listening on port 3000...")
```
> creating a server
```js
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // using .write to display content on webpage
    res.write("hello world")
    res.end()
  }
```

you can return a JSON file data on the screen.
```js
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
  data: 'Hello World!',
  }));
  });
})

server.listen(3000)
console.log("Listening on port 3000...")
```
___
___
## Create a package.json file:⁡
```npm init -y``` creates a package.json file, which is responsible for managing all the packages we import through npm.

```npm init -y``` // outputs:
```json
{
  "name": "full_stack",
  "version": "1.0.0",
  "description": "",
  "main": "auth.js",
  "scripts": {
    ⁡⁣⁣"dev": "node auth.js"⁡
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Elnatty/NodeJs.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Elnatty/NodeJs/issues"
  },
  "homepage": "https://github.com/Elnatty/NodeJs#readme"
}
```

  we can edit the 'scripts' key to "dev" and its value as the .js file we are working on, and use the ==> npm run dev; to execute the script/file

  Note: whenever the port number changes, we have to restart the server manually which is a pain in the ass. Hence we use the package.json file to do this automatically; we use the ```nodemon``` for this.

___
___
## Nodemon:⁡

nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

⁡⁢⁣⁣Installing nodemon as a global npm package in whole system/pc;⁡
run nodemon by: nodemon .js filename; eg nodemon auth.js

we can modify the "dev" value in the package.json file to use nodemon instead of npm run. ie;
```json
    {
      "name": "full_stack",
      "version": "1.0.0",
      "description": "",
      "main": "auth.js",
      "scripts": {
        ⁡⁣⁣⁢"dev": "nodemon auth.js"⁡
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/Elnatty/NodeJs.git"
      },
      "author": "",
      "license": "ISC",
      "bugs": {
        "url": "https://github.com/Elnatty/NodeJs/issues"
      },
      "homepage": "https://github.com/Elnatty/NodeJs#readme"
    }
```
then to run: npm run dev

⁡⁢⁣⁣Installing nodemon as a dependency in  project;⁡
cmd: ```npm install nodemon```
This adds as a dependencies in the package.json file.

after installing nodemon as a dependency, the node_modules folder and the package-lock.json file appears/becomes available.

⁡⁢⁣⁣The package-lock.json file⁡ locks all the versions of each dependencies we have inside the node_modules, so that whenever you want to reinstall the directory again, it doesn't take time to load the files again.

___
___
## HTTP Handle Routes:
⁡to view routes we use the ```console.log(req.url)```.
to specify content to display per routes, we use the if/else.
```js
const PORT = 4040
const htt = require('http')
const { connected } = require('process')

const ser = htt.createServer((req, res) => {
  ⁡⁢⁣⁣// view the specified routes⁡
  console.log(req.url)

  ⁡⁢⁣⁣// view the result for root/home route⁡
  if (req.url === "/") {
    res.write(`This is root folder..`)
  }
  if (req.url === "/about") {
    res.write(`This is th about page..`)
  }
  ⁡⁢⁣⁣// specifying result for unsupported routes.⁡
  else {
    res.write(`ERROR 404! Page not found`)
  }
})

ser.on('connection', socket => {
  console.log("Someone connected..")
})

console.log(`server is running at http://localhost:${PORT}`)
ser.listen(PORT)
```
___
___
## Showing HTML Contents:
just specify what you want to display in html tags
```js
const PORT = 4040
const htt = require('http')

const ser = htt.createServer((req, res) => {
  if (req.url === '/') {
    res.write(`Server on port ${PORT} is live..`)
  }

  or
  
  if (req.url === '/about') {
    res.writeHead(200, {"Content-type": "text/html"})
    res.write(`<h1>I am displaying on the about page..</h1>`)
  }
  else {
    ⁡⁢⁣⁣// embed the message in html tags⁡
    res.write(`<h1>ERROR 404! Page not found</h1>`)
  }

  res.end()
})

ser.on('connection', socket => {
  console.log("Someone connected..")
})


console.log(`server is running at http://localhost:${PORT}`)
ser.listen(PORT)
```
___
___
## File System Module ReadFIle:
invoke the 'fs' import method:
```js
const fs = require('fs)
fs.readFile('file location', (err, data) => {

// handle any error with the if/else statement
if (err) throw err

// then write the data.
res.write(data)
})
```
Example:
```js
const http = require('http')
const fs = require("fs")

http.createServer((req, res) => {
if (req.url === "/") {
  ⁡⁢⁣⁣// specify the .html file location.⁡
  fs.readFile("index.html", (err, data) => {
    if (err) throw err
    res.write(data)
    // data/html elements can also be put in the .end() method to display html content on webpage. example;
    res.end(data)
  })
}

}).listen(2000).on('connection', (stream) => {
console.log('someone connected!')
})
console.log("http://localhost:2000")
```
___
___
## FS Write Large File:
```js
const http = require('http')
const fs = require('fs')
const PORT = 5000


http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('root/home.html', (err, data) => {
      res.write(data)
      res.end()
    })
  }
  else if (req.url === '/about') {
    fs.readFile('root/about.html', (err, data) => {
      res.write(data)
      res.end()
    })
  }
  else if (req.url === '/createFile') {
      ⁡⁢⁣// using the .writeFIle; create a path, the specify the data and (err) callback. A folder named temp i created then with the test.html inside it.
      const data = ⁡"<h1>This is a test file</h1>"
      fs.writeFile("temp/test.html", data, (err) => {
        if (err) throw err
        res.write("File has been created..")
        res.end()
      })
  }
```

⁣you can add a for loop:⁡
```js
const data = "<h1>This is a test file appended..</h1>"
// to append the data file 20 times.
for (let i=0; i<20; i++) {
    fs.appendFile("temp/test.html", data, (err) => {
    if (err) throw err
  })
}

⁡⁣⁣⁢and display on webpage:⁡

// display content 20 times on webpage.
if (req.url === '/createFile') {
  const data = "<h1>This is a test file appended..</h1>"

  for (let i=0; i<20; i++) {
    fs.appendFile("temp/test.html", data, (err) => {
    if (err) throw err
  })
}
```       
      
Note: fs.writeFIle writes new content to the file, appendFile appends new content to a file.

___
___
## Event Loop Explanation:⁡⁡
From the features of nodeJS, we found out that nodeJS:
can be asynchronous and have non-blocking I/Object
it runs on a single thread.
These is a limitation, hence; this limitation was converted into a helpful feature using the Event Loop and Call Stack system.

Event Loop: continuously checking the callstack to see if there is any function that needs to run.
example:
```js⁡
const func1 = () => console.log("func1")
const func2 = () => console.log("func2")
const func3 = () => {
  console.log("func3")
  func1() //--> will be executed from the callstack .
  func2() //--> this will also be executed from callstack.

  // but when we use the setTimeout() function, nodeJS keeps it in the callstack for last, then executes others before going back to the setTimeout function, example;

  setTimeout(func1, 0)

  // even after a promise is defined, it still gets called from the callstack before the setTimeout() function. Y is this??

  new Promise((resolve, reject) => {
    resolve("I am a promise")
  }).then(res => console.log(res))
}

results: 
        func3
        func2
        I am a promise
        func1
```

Event Loop Task Sequence:
event task loop execution:
1. mini tasks -> eg nextTick()
2. micro tasks -> eg promise()
3. macro tasks -> eg setTimeout() or setInterval etc..