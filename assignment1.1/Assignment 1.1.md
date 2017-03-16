# Assignment 1.1 - Breaking the web
For this assignment I disabled JavaScript and LocalStorage in my browser, to see how big their influence is on our experience of the web. I will discuss what these two features are meant to do, how to disable them in the browser, and what kind of issues arise if you disable them.

## Javascript
JavaScript is a commonly used scripting language to make webpages interactive.

### Why disable it?
Almost nobody would intentionally disable their Javascript in their browser. But there are circumstances where the JavaScript of the user is blocked or just doesn't work. There could be adblockers, plugins or errors that prevents your script from running. That's why it is a useful exercise to research what happens when you disable it, although it is an extreme condition.

### How to disable it?
I used Chrome when researching this and it's fairly easy to disable JavaScript:

- Go to **setting**
- Click **Show advanced settings**
- Beneath the Privacy section, click on **Content setting**
- And select **Do not allow any site to run JavaScript**

### How is the web without JavaScript?
I tested a couple of websites to see if the main goal of the website can still be achieved without JavaScript.

Websites with mainly text content were overall still usable. I could easily read any article of theguardian.com and medium.com without any trouble. And surprisingly it is difficult to see any differences between reddit.com with JavaScript and reddit.com without it.

What seems to be the largest issue on websites, that are not that big, is of course the interaction with the webpage. On many sites the navigation is hidden an can normally be activated by clicking on an icon. Without JavaScript this is often not possible and that makes navigating the webpage impossible.

The website awwwards.com hand outs awards to other websites on how good there site is. The navigation on their own site is not usable and none of the images are visible. 


![The website of awwwards.com without JS](https://github.com/dylanvans/browser-technology/blob/master/assignment1.1/img/awwwards.png)

The 'Site of the Day'  on march 7 according to awwwards.com was voltafootwear.com. Without any JavaScript this website gives us a blank page(With JavaScript enabled, this website is beautiful).

On soundcloud.com we only get to see a warning that our JavaScript is disabled and we can not do anything with the site.

![The website of soundcloud.com without JS](https://github.com/dylanvans/browser-technology/blob/master/assignment1.1/img/soundcloud.png)


## LocalStorage
Using LocalStorage you can store application data in the browser of the user. The difference between LocalStorage and SessionStorage is that LocalStorage has no expiration time. LocalStorage is mostly used to store the state the application is in, so when a user returns to the page you can serve the right state of the app.

### How to test it?
Go into a private mode of a browser. Like the incognito mode of Chrome or the Private Browsing in Safari. 

### What happens when you disable it?
When there is no LocalStorage available, the state of the page you are visiting is not stored. Also with every login you need to type in your username every time you visit, instead of the username automatically filled in using LocalStorage.