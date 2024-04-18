# TicTacToe


To run project:
1. install node.js (which automatically installs npm)
2. run the following command: 'npm install' to install all necessary dependencies (such as react)
3. run the following command: 'npm run build' to build the project
4. open the index.html file in the browser (You can just drag it into the search bar of the browser if you want)

When you make a change to the project:
1. run the following command: 'npm run build' to build the project
2. open the index.html file in the browser (You can just drag it into the search bar of the browser if you want)

Getting Started:
- dont worry about all the weird files at the root level. Its all just boilerplate required for most modern js projects
- all react components should go in a subfolder of the src/components directory.

Helpful Documentation:
- React Docs: https://react.dev/learn

Git cheatSheet:
- Git Clone: to get a local copy of this repo on your machine, navigate to a directory and run: 'git clone https://github.com/gitnasty555/TicTacToe.git'
- Git Add: when you make some changes to a file, you can stage your changes to that file with 'git add <relative-path-to-file>' (or 'git add .' to stage all changes in current directory and subdirectories)
- Git Commit: commit your staged changes to your local copy of the repo with 'git commit -m"my commit message"'
- Git Push: push the commits on your current branch to the shared github repo
- Git Pull: update your local branch with the latest changes from the shared github repo

- Git Branch: create a new branch in your local repo with 'git branch <your-branch-name>'
- Git Checkout: checkout an existing branch with 'git checkout <your-branch-name>'
- Git Merge: merge a different branch into your current branch with 'git merge <some-other-branch-name>

- Git Status: check which branch you are on and what the status is of your staged changes with 'git status'
- Git Log: check the commit history of your current branch with 'git log'

Typical Git workflow:
- clone the remote repo if you havent already so that you have a local copy
- run git status to verify you are on the 'main' branch
- run git branch to create a new branch to do some work on
- git checkout the branch you just created
- make some changes
- git add your changes as you go
- git commit your changes when you are happy with them
- git push your committed changes to the remote git repo so everyone can see your work
- open up a 'pull request' via github web ui to merge your branch into the 'main' branch
- someone else will review your pull request and merge your changes into 'main' if they approve
- make a new branch to do some more work and rinse/repeat
