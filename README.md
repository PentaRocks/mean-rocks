# mean-rocks

###Project setup

1. Install virtual box (https://www.virtualbox.org/wiki/Downloads)
2. Install vagrant (https://www.vagrantup.com/docs/installation/)
3. Install VirtualBox Guest Additions: `vagrant plugin install vagrant-vbguest`
4. Move to the projects root and execute: `vagrant up` to start up the virtual environment. (Important: on windows machines you have to run this command from command line / cygwin which has administrator privilege otherwise you might have issues with mongodb or other tools installed in the VM)

###Useful tips
1. You can ssh into the machine using `vagrant ssh` from the project's root
2. To update npm packages/dependencies ssh into the VM than:
	* move to the backend directory: `cd /vagrant/backend`
	* install dependencies using: `npm install`
3. To start the nodejs application: 
	* move to the backend directory: `cd /vagrant/backend`
	* run the application using: `node app.js` (this will be added later to the provisioner so you will not have to run it manually)