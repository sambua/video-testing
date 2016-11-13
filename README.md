### START

### Install selenium
- run server `node index` It will run new localhost server on port 3031
- after run `node test.js` it will open new chrome window with video streaming




## AVOID THIS PART, ALL BELOW ONLY TEXT
- Be sure java is installed `java -version` It has to be minimum 6th version. In Mac full path of new versio of Java could be located in path `/Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin/Contents/Home/bin/java`. You can check from preferences -> java -> java(tab) -> view 
- After install selenium `cd ziggeo/video/ && curl -O http://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar`
- Run command `java -jar selenium-server-standalone-3.0.1.jar` In mac it can be `/Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin/Contents/Home/bin/java -jar selenium-server-standalone-3.0.1.jar`
- It should run new server, most probably on localhost and port 4444 `http://localhost:4444`
- Configure with `./node_modules/.bin/wdio config` 1. Local Machine, 2. Framework mocha, 3. install framework 'yes', 4. OK, 5. Spec reporter, 6. PhantomJS, 7. Silent, 8. OK, 9. OK, 
- `wdio wdio.conf.js`  

- Browser divers Chrome: 'http://chromedriver.storage.googleapis.com/index.html'

/Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin/Contents/Home/bin/java -jar selenium-server-standalone-3.0.1.jar -role node  -hub http://localhost:4444/grid/register


“must”, “must not”, “required”, “should”, “should not”, “recommended”, “may”, and “optional
“OPTIONALLY” == “may” || “optional”
