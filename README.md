<h1> Introduction </h1>

The node-nmap-viewer is program to for displaying a nmap scan file in a node web server. It is intended as a network scanner to list all active computers on a specific ip nett. The list will be updated every minute. Database features will also be added with mongoDB to enable more features like computer description etc.

The program is made to run on Ubuntu 15.10 and the readme will include all relevant information to get it working on a stock Ubuntu 15.10 system.

<h2> Installation of packages </h2>

<h3> NMAP </h3>

NMAP is a sofisticated network scanning tool for both UNIX and Windows. https://nmap.org/

sudo apt-get install nmap

Test it by running

sudo nmap -oX output.xml -sP 192.168.1.*

This generates an xml file containing all active computers in the range specified. * = all addresser (0-255)

<h3> Node.js </h3>
This javascript language will run our web server install by typing the following into a terminal

``` bash
sudo apt-get install nodejs <br>
sudo apt-get install npm
```

<h3> BASH file </h3>

Edit ip address and filepath of the .sh files in the repository.

Make the file executable by typing
'''
chmod +x filename.sh  
'''
 Do this for all files

<b> Running a command as sudo inside a sh file. </b> <br>
Open a terminal and type
sudo visudo
Around line 25, you'll see this line: %sudo   ALL=(ALL:ALL) ALL
Below that line, insert the following line, where username is your username:
username  ALL=(ALL) NOPASSWD: /home/username/nmap.sh
Exit the editor (Ctrl+X if nano)

<h3> MongoDB </h3>

Open terminal and type:
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org
restart computer
Make a folder to store your data in. example folder /home/username/mongodata

Start the mongodb service by typing:
mongod --dbpath /home/username/mongodata

<h3> Robomongo </h3>
https://robomongo.org/download

Download coorect version and unpack file.
Install not nessecary, run directly from bin folder.

<h3> Configure CRON job </h3>

The bash file created above is going to be runned every minute. This is done via CRON.

Open a terminal and type
crontab -e

select edit via vim and type i

move to the bottom of the file and add the line. Make sure you are using the full and correct path to your sh file.

///
 * * * * * /bin/sh /home/kjetil/start_nmap.sh # JOB_ID_1

@reboot /bin/sh /home/kjetil/start_mongodb.sh # JOB_ID_2
@reboot /bin/sh /home/kjetil/start_datapusher.sh # JOB_ID_3
@reboot /bin/sh /home/kjetil/start_webserver.sh # JOB_ID_4
///
press ESC
press :wq

Verify that the xml file is updated every minute.

to view the cron file without editing type

crontab -l

<h2> Starting server</h2>

Download repository to your computer
Open a terminal and navigate to the software destination. Install dependencies by writing

sudo npm install
