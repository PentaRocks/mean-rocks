# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"
Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  
    config.vm.box = "ubuntu/trusty64"
  
    config.vm.provider "virtualbox" do |v|
        v.memory = 2048
    end

    config.vm.define "pentarocks" do |mean|
        mean.vm.hostname = "pentarocks.loc"
        mean.vm.network "forwarded_port", guest: 80, host: 8080
        mean.vm.network "forwarded_port", guest: 27017, host: 27017
        mean.vm.synced_folder "data", "/vagrant_data"        
        mean.vm.provision :shell, path: "bootstrap.sh"
    
    end


end