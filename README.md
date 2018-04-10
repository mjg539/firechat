# forum

> simple vue js chat application with firebase

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

## User Guide ##

Once the program is running on localhost:8080, any number of web clients can connect to the web page and join the chat. If deployed to a web host, multiple users could connect from distinct machines. 

If no conversations exist, one must be initialized by clicking the initialize button. Otherwise, click Start talking to join the chat. All users share the same default name, but the display name can be changed at any point using the input field under user info.

The chat is stored within the Firestore database. As long as a chat instance exists, the start talking button adds the user to the chat. 
