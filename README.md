<h1> Introduction </h1>

The node-nmap-viewer is program for displaying a nmap scan file in a node web server. It is intended as a network scanner to list all active computers on a specific ip nett. The list will be updated every minute. Database features will also be added with mongoDB to enable more features like computer description etc.

The program is made to run on Ubuntu 15.10 or later and the readme will include all relevant information to get it working on a stock Ubuntu system.

The picture below shows the webpage that will be displayed when the program is running.

![alt tag](https://raw.githubusercontent.com/kjetilmjos/node-nmap-viewer/master/Ip overview.PNG)

<h2> Installation of packages </h2>

# NMAP
Install Nmap. Refer to knowledge page for instructions on how to do that.
https://github.com/kjetilmjos/SW-KnowledgeDB/wiki/Nmap

# Node.js
Install Node.js. Refer to knowledge page for instructions on how to do that.
https://github.com/kjetilmjos/SW-KnowledgeDB/wiki/NodeJS

# MongoDB
Install MongoDB. Refer to knowledge page for instructions on how to do that.
https://github.com/kjetilmjos/SW-KnowledgeDB/wiki/MongoDB

# NPM
Make sure you have NPM package manager for node installed.
See https://github.com/kjetilmjos/SW-KnowledgeDB/wiki/NodeJS for install and usage instructions.


<h3> Configure CRON job </h3>

https://github.com/kjetilmjos/SW-KnowledgeDB/wiki/CRON

Verify that the xml file is updated every minute.

<h2> Install dependencies</h2>

'npm install'

<h2> Starting server</h2>

Restart your computer and visit http://localhost to verify that the server is working.
