---
layout: post
title:  "An Atom setup guide"
categories: posts
tag: cp ex
---

I have been using Atom for a while and enjoyed it quite a lot so I decided to write a short guide for those who want to try Atom (you won't be disappointed!).

First and foremost, check out their [homepage](https://atom.io/) for the main features. They did quite a good job of convincing me to at least try it out in the first place.

## Why I choose Atom

### 1.Nice syntax highlighting

<img style="width:100%" src="/assets/posts/2020-4-24-Setting-up-Atom/preview.jpg" alt="C++ in Atom">

I love the color schemes of Atom and its simple yet elegant UI in general. The syntax highlighting for (almost) every popular language is **built-in**, so I didn't have to do any tweaking and fixing.

### 2. Working with Git becomes so much easier

<img style="width:100%" src="/assets/posts/2020-4-24-Setting-up-Atom/git.jpg" alt="Git features in Atom">

This website is rendered by Github Pages (Jekyll) and I built the whole thing inside Atom. Atom git automatically tracks changes, allows you to review them and helps with some extra _thingy_ related to git functions.

### 3. Plugins

<img style="width:100%" src="/assets/posts/2020-4-24-Setting-up-Atom/packages.jpg" alt="Atom packages">

Atom has [a huge library of plugins](https://atom.io/packages) built by its community which allows you to customize the text editor at will. I always say to my friend _"Atom is simple yet so flexible that it can become anything you want"_.

### 4. Speed

Atom is a **light-weight and fast text editor**, that is why I choose it over VS Code which is a more popular alternative. VS Code can do a bit more, but runs slower. I prioritize performance over functions I don't need.

<br>

## Installation and configuration

### 1. Download and install Atom

Download available [here](https://atom.io/). Baby step. You can do it yourself.

### 2. Packages I use

Bring up **Command Palette** by hitting **Ctrl + Shift + P**. Type in _install package_ then select _Setting View: Install Packages And Themes_. Then search for these 2 packages:

<img style="width:100%" src="/assets/posts/2020-4-24-Setting-up-Atom/setting2.jpg" alt="My package">

The first one allows you to fix inconsistent indentation, add/remove spacing so that the code is easier to read. Highlight the code by **Ctrl + A** or just the part you need fixing, then press **Ctrl + Alt + B**. This package is a lifesaver when you have to import / use code from other sources, especially if they are in HTML.

The 2nd one adds a function to create a console at your current directory so you don't have to manually do it every time you want to work on your project folder. This is useful in most cases, however, when it comes to compiling and running programs which take huge input/output from `stdin`, I would prefer a separate console.

<img style="width:100%" src="/assets/posts/2020-4-24-Setting-up-Atom/setting3.jpg" alt="Shell override">

Upon successful installation, go to its settings and override the default shell type with cmd.exe like shown.

Then to create a cmd window, click the **+** button on the bottom left of the screen:

<img style="width:100%" src="/assets/posts/2020-4-24-Setting-up-Atom/command.jpg" alt="Creating cmd instance">

**That's it!** I will now let you explore the endless possibilities of Atom yourself.

<br>
