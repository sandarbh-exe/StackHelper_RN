#!/bin/bash
#A basic shell script to commit and push quickly through terminal

git status
read -p 'OK? (y/n) ' bool
if [ "$bool" == "y" ]
then
    git add .
    read -e -p 'Commit Message : ' commitMessage
    git commit -m "$commitMessage"
    read -e -p 'Push? : (y/n) ' bool
    if [ "$bool" == "y" ]
    then
        git push
    fi
fi
