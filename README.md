<h1> Introduction </h1>

The node-nmap-viewer is program for displaying a nmap scan file in a node web server. It is intended as a network scanner to list all active computers on a specific ip nett. The list will be updated every minute. Database features will also be added with mongoDB to enable more features like computer description etc.

The program is made to run on Ubuntu 15.10 or later and the readme will include all relevant information to get it working on a stock Ubuntu system.

The picture below shows the webpage that will be displayed when the program is running.

![alt tag](https://raw.githubusercontent.com/kjetilmjos/node-nmap-viewer/master/Ip overview.PNG)

<h2> Getting started </h2>
Install nmap: 'sudo apt install nmap'
Install Node.js: 'curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -'
'sudo apt-get install -y nodejs'
Install MongoDB: 'sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6'
'echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list'
'sudo apt-get update'
'sudo apt-get install -y mongodb-org'

verify that mongodb is running 'sudo systemctl status mongodb'
Download mongodb viewer Robo 3T: https://robomongo.org/

Clone or download repository and unzip.
Open terminal and navigate to folder
run 'npm install' to install dependencies
Run nmap and generate an output file. Change the IP with your subnet IP. 
'sudo nmap -oX output.xml -sP 192.168.10.*'
Open datapusher.js and change ipnett to your subnet.
run 'nodejs datapuser.js'. This will continuesly monitor the output.xml for status updates and push to mongodb. 
Set up the nmap command in a cron job to make a network scanner that is always running.
In another terminal window write 'sudo nodejs server.js' to start server on port 8080. 
Navigate to http://localhost:8080 to verify system working.


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
