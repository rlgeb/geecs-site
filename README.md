# geecs-site

Website for the university of michigan girls in electrical engineering and computer science (geecs) student org.

url -> http://www.umich.edu/~geecs/



#### Location

to access the server login: uniqname@login.engin.umich.edu <br />
our website lives here: /afs/umich.edu/group/g/geecs/Public/html

#### Editing

Use spaces not tabs

#### Site Managment 

[set up your IFS directory to be able to serve web pages]

managing the site can be done here -> https://mfile.umich.edu/make-webspace/index.php

#### Website Permissions

Detailed documentation can be found here -> http://www.itcs.umich.edu/itcsdocs/s4349/

1. make sure you login to its.umich.edu NOT engin.umich.edu!

2. <code> pts membership geecs</code> will show you the people who have access and can add you

3. <code> pts adduser UNIQNAME geecs </code> will add a user to the group
    
   (you may need to contact someone in the group so that they can do this for you)

#### Getting Started

basic overview of the process

once you have permission you need to clone the repo in a location you prefer on your machine with the ssh url:

<code>git clone [ssh_url]</code>

the you will want to create a branch (and give it a name) to make you changes on

<code>git checkout -b [branch_name]</code>

hack away on you branch

when you are ready to commit add all the files

<code>
git add [file_name] 

git commit -m [message about what you change]
</code>
then push the changes you made to the remote origin

<code>git push origin [branch_name]</code>


finally right now you need to login to the server and do a git pull to pull down the latest version of the code.

<code>git pull</code>



For more info check out the Getting Started Guide <a href='https://github.com/rlgeb/geecs-site/wiki/Getting-Started-Example'>Here</a>
