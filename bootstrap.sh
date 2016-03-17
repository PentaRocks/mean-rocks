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
sudo npm install -g nodemon
sudo sed  -i "s/dbPath\: \/var\/lib\/mongodb/dbPath\: \/vagrant_data/" /etc/mongod.conf
sudo sed  -r -i "s/root .*/root \/vagrant\/frontend\/public_html;/" /etc/nginx/sites-enabled/default;
sudo sed -r -i "s/^(\s*server_name.*)/\1\n\tlocation \/api\/{\n\t\tproxy_set_header X-Forwarded-Host \$host;\n\t\tproxy_set_header X-Forwarded-Server \$host;\n\t\tproxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;\n\t\tproxy_pass http:\/\/127.0.0.1:3001\/api\/;\n\t}/" /etc/nginx/sites-enabled/default
sudo service nginx reload
echo nginx -v
echo mongo --version
echo "node installed: ` node -v `"
echo ""
echo "Provisioning VM finished"
cd /vagrant/backend && sudo npm install
cat <<"EOT"
Happy CODING                    |     |
                                \\_V_//
                                \/=|=\/
                                 [=v=]
                               __\___/_____
                              /..[  _____  ]
                             /_  [ [  M /] ]
                            /../.[ [ M /@] ]
                           <-->[_[ [M /@/] ]
                          /../ [.[ [ /@/ ] ]
     _________________]\ /__/  [_[ [/@/ C] ]
    <_________________>>0---]  [=\ \@/ C / /
       ___      ___   ]/000o   /__\ \ C / /
          \    /              /....\ \_/ /
       ....\||/....           [___/=\___/
      .    .  .    .          [...] [...]
     .      ..      .         [___/ \___]
     .    0 .. 0    .         <---> <--->
  /\/\.    .  .    ./\/\      [..]   [..]
 / / / .../|  |\... \ \ \    _[__]   [__]_
/ / /       \/       \ \ \  [____>   <____]
EOT