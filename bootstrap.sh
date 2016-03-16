#!/usr/bin/env bash

sudo apt-get -y autoremove > /dev/null
sudo apt-get -y update > /dev/null
sudo apt-get -y upgrade > /dev/null
sudo apt-get -y install python-software-properties curl wget vim git > /dev/null
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get -y update > /dev/null
sudo apt-get -y install nginx nodejs mongodb-org build-essential
sudo npm install -g n
sudo npm install -g bower
sudo npm install -g grunt-cli
sudo npm install -g yo
sudo sed  -i "s/dbPath\: \/var\/lib\/mongodb/dbPath\: \/vagrant_data/" /etc/mongod.conf
echo nginx -v
echo mongo --version
echo "node installed: ` node -v `"
echo ""
echo "Provisioning VM finished"