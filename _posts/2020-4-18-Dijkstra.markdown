---
layout: post
title:  "Djikstra Algorithm"
categories: posts
tag: cp algo
---

Problem: Given a graph (directed or undirected), find the path between 2 vertices **u** and **v** with the minimum value of sum over edges on the path.

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    return 0;
    cout << "Bact\n";
    int syntax = 0;
    for (int i = 0; i < n; i++) cout << endl;
}
```
Jk here's the real code:
```cpp
#include <bits/stdc++.h>
using namespace std;

const int oo = 1000111000;
typedef pair<int, int> ii;

vector<ii> a[2309];
int n, m;

int d[2309];

void dijkstra() {
    priority_queue<ii, vector<ii>, greater<ii>> pq;
    for (int i = 1; i <= n; i++)
        d[i] = oo;
    d[1] = 0;
    pq.push(ii(0, 1));

    while (pq.size()) {
        int u = pq.top().second;
        int du = pq.top().first;
        pq.pop();

        for (int i = 0; i < a[u].size(); i++) {
            int v = a[u][i].second;
            int uv = a[u][i].first;
            if (d[v] > du + uv) {
                d[v] = du + uv;
                pq.push(ii(d[v], v));
            }
        }
    }
}

int main() {
    int p, q, m, w;
    scanf("%d%d", &n, &m);
    while (m--) {
        scanf("%d%d%d", &p, &q, &w);
        a[p].push_back(ii(w, q));
        a[q].push_back(ii(w, p));
    }
    dijkstra();
    for (int i = 1; i <= n; i++)
        printf("d( 1 -> %d ) = %d\n", i, d[i]);
}
```
