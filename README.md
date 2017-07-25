<h1> Introduction </h1>

The node-nmap-viewer is program for displaying a nmap scan file in a node web server. It is intended as a network scanner to list all active computers on a specific ip nett. The scanned list uses mongoDB to store state and description of scanned network. 

The program is made to run on Ubuntu 16.04 or later.

<h2> Getting started </h2>

Install nmap: `sudo apt install nmap`
Install Node.js: 
```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```
Install MongoDB: 
```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```
Verify that mongodb is running `sudo systemctl status mongodb` 
[Optional] Download mongodb viewer Robo 3T: https://robomongo.org/

Clone or download repository and unzip.
Open terminal and navigate to folder
run `npm install` to install dependencies
Run nmap and generate an output file. Change the IP with your subnet IP. 
`sudo nmap -oX output.xml -sP 192.168.10.*`

Open datapusher.js and change ipnett to your subnet.
run `nodejs datapuser.js`. This will continuesly monitor the output.xml for status updates and push to mongodb on change. 
[Optional] Set up the nmap command in a cron job to make nmap continuesly scan the network.

Open another terminal window and run `sudo nodejs server.js` to start server on port 8080. 
Open browser and navigate to http://localhost:8080 to verify system working.

