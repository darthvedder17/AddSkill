This is a basic quote of the day extractor in the console. 
```npm init``` : the folder where you want to start the project
Install the packages involved like axios from the command : 
```npm install axios --save``` , this saves the module in package.json for future use
USECASE : 
Fetches the ```Zen API``` for a random quote when run from the Console.


RUNNING FROM CONSOLE : 
Open the package.json file and include 
```"bin":{
"qod": "./index.js"

}```

```#!/usr/bin/env node```
Also include this to let the compiler know about the executable to run.
