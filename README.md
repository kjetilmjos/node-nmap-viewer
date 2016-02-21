<b> Introduction: </b>




namp for network scanning:
sudo nmap -oX output.xml -sP 192.168.1.*


--lag en sh fil. 
#!/bin/bash         

nmap -oX /home/kjetil/output.xml -sP 192.168.1.*
---

Step 2. Set up sudo to allow pydatertc.sh to execute without requiring a password
Type sudo visudo at the terminal to open the sudo permissions (sudoers) file
Around line 25, you'll see this line: %sudo   ALL=(ALL:ALL) ALL
Below that line, insert the following line, where username is your username:
username  ALL=(ALL) NOPASSWD: /home/username/pydatertc.sh
Exit the editor (Ctrl+X if nano)

Set up crontab

crontab -e

running every minute: * * * * * /bin/sh /home/kjetil/nmap.sh

lista the crontab file 

crontab -l



