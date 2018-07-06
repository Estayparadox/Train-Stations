var pathPlanning = {
    dijkstra: function(obj, v0, n, Distance, prev, vn) {
        var s = new Array(n);
        var mindis = 0,
            dis = 0;
        var i = 0,
            j = 0,
            u = 0;
        for (i = 0; i < n; i++) {
            Distance[i] = obj[v0][i];
            s[i] = 0;
            if (Distance[i] == 999999) {
                prev[i] = -1;
            } else {
                prev[i] = v0;
            }
        }
        Distance[v0] = 0;
        s[v0] = 1;
        for (i = 1; i < n; i++) {
            mindis = 999999;
            u = v0;
            for (j = 0; j < n; j++) {
                if (s[j] == 0 && Distance[j] < mindis) {
                    mindis = Distance[j];
                    u = j;
                }
            }
            s[u] = 1;
            for (j = 0; j < n; j++) {
                if (s[j] == 0 && obj[u][j] < 999999) {
                    dis = Distance[u] + obj[u][j];
                    if (Distance[j] > dis) {
                        Distance[j] = dis;
                        prev[j] = u;
                    }
                }
            }
        }
        var sortArray = [];
        var finalStation = vn;
        do {
            sortArray.unshift(finalStation);
            finalStation = prev[finalStation];
        } while (finalStation !== v0);
        sortArray.unshift(v0);

        var all = {
            startStation: v0,
            endStation: vn,
            allDistance: Distance[vn],
            path: sortArray
        };
        return all;
    }
}
