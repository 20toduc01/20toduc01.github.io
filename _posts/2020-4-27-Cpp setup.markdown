---
layout: post
title:  "My C++ competitive programming setup"
categories: posts
tag: cp ex
---

The title is pretty self-explanatory, so here we go.

## IDE/Editors I use

I had been using [Codeblocks](http://www.codeblocks.org/) ever since I started competitive programming until a month ago. The good thing about Codeblocks is definitely its auto-completion feature with built-in library lookup support. If you sometimes forget what-does-what and you need assistance in C-family languages only, [Codeblocks IDE](http://www.codeblocks.org/downloads) might be the perfect choice for you.

<img style="width:100%" src="/assets/posts/2020-4-27-Cpp-Setup/codeblocks.jpg" alt="Codeblocks">

However, when I started working on other languages (Python, HTML/CSS/Javascript,...), I felt like I needed a **customizable text editor** instead. I tried Sublime Text, which worked just fine, then VS Code, even better, but a bit slow, then Atom. I am currently using Atom for the various reasons mentioned in my [earlier post](/posts/Setting-up-Atom).

## Compilation/Running

I created a folder which stores user-defined executables (eg: C:\Executables). Add it to your `PATH` in environment variable settings.

<img style="width:100%" src="/assets/posts/2020-4-27-Cpp-Setup/path.jpg" alt="PATH">

Inside `C:\Executables`, I created 3 batch files, 1 for compilation only (`cp.bat`), 1 which compiles then runs the program (`cpr.bat`) and 1 to delete all `.exe` and `.o` files in current code folder (`deltrash.bat`).

`cp.bat`
```
g++ -std=c++17 %1.cpp -o %1
```

`cpr.bat`
```
g++ -std=c++17 %1.cpp -o %1
%1.exe
```

`deltrash.bat`
```
del *.o
del *.exe
```

Make sure to save them. Now, say, I want to compile and run my `1324F.cpp`. I can do it like this:

<img style="width:100%" src="/assets/posts/2020-4-27-Cpp-Setup/ex.jpg" alt="cpr">

## Default snippet

In most of the programs you write, there exists a common structure you will always need (e.g. the header of your program). That is why I created a snippet so that I don't have to type them in every time.

If you are using Atom, press **Ctrl + Shift + P** to bring up **Command Palette**, then type in _Snippets_ and choose _Application: Open Your Snippets_. Add this in _snippets.cson_ :

```cpp
'.source.cpp':
    'default':
        'prefix': 'codeforces'
        'body': """
        #include <bits/stdc++.h>
        #define ll long long
        #define pb push_back
        using namespace std;
        const ll INF = 9e18;
        const int MOD = 998244353;
        const bool _DEBUG = false;
        typedef pair<int,int> ii;

        int main(){
            ios_base::sync_with_stdio(0);
            if (_DEBUG){
                freopen("input.txt","r+",stdin);
            }
            int t;
            cin >> t;
            while (t--){
                $1
            }
            return 0;
        }
"""
```
You can change the `prefix` to whatever trigger word you want and modify the content of `body`. The above `body` is what I use for Codeforces problems. To use the snippet, in your .cpp files just type in the trigger word (`codeforces` in this case) then hit `Tab`.
