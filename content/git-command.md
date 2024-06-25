+++
title = "Git starter: just basic commands"
date = "2023-04-09"
+++

I created this article as a reminder on how to use git, sometimes I forget some 
commands and thanks to this article I can find everything I need.

## Commit conventional messages

These are the best practices for writing messages in various commits, the main structure is:

```
<type>[optional scope]: <description>
```

[Here](https://www.conventionalcommits.org/en/v1.0.0/) the full documentation.

## Create a commit

This series of commands is used to create a commit and push it to the current branch.
To add all changed file in the current directoty use . character.

```
git add .

git commit -m "feat: just message placeholder"

git push
```

## Show current branch

To view the current branch you are working on just run this command

```
git rev-parse --abbrev-ref HEAD
```

## Switch to a new branch

To switch to a new branch (not existing) use this command

```
git switch -c "features/new-component"
```

if you want to avoid synchronization errors between git and local branches change this setting

```
git config --global push.autoSetupRemote true
```