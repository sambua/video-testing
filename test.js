/**
 * Created by rashad on 11/13/16.
 */
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var By = webdriver.By;
var until = webdriver.until;

var chromeOptions = new chrome.Options();
  //args: ['--use-fake-ui-for-media-stream']
  //args: ['--disable-notifications']
//});

chromeOptions.addArguments(['--use-fake-ui-for-media-stream']);

// IN firefox avoid selection of streams:
// media.navigator.permission.disabled:true

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions( chromeOptions )
  .build();

driver.navigate().to('http://localhost:3031')
  .then(function () {
    driver.findElement(By.css('body'))
  })
  .then(element => console.log(element))
  // .then( function(element) { console.log(element)})
  // .then(function (element) {
  //   console.log(element);
  // })
;

