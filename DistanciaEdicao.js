function DistanciaEdicao(a, b) {
    const m = a.length, n = b.length;
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1));

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i; 
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // Fill dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; 
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,    
                    dp[i][j - 1] + 1,   
                    dp[i - 1][j - 1] + 1 
                );
            }
        }
    }

    return dp[m][n];
}


console.log(DistanciaEdicao("asar", "casa")); 
console.log(DistanciaEdicao("inserir", "inserção"));