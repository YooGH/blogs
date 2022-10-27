// 时间复杂度：O(n*m)
// （Brute-Force，暴力破解）————穷举法思路;找不到子串回溯
// https://zhuanlan.zhihu.com/p/460521127


function indexBF(S, T, pos=1) {
	let [i, j] = [pos,1];
	while(i<=S.length && j<=T.length) {
		if(S[i-1] == T[j-1]) { // 主串和子串依次匹配下一个字符
			++i;
			++j;
		} else {  // 主串、子串指针回溯重新开始下一次匹配
			++i;
			console.log('i', i)
			j = 1
		}
	}
	return j>T.length ? i-T.length-1 : 0;
}

console.log(indexBF('hyymanellbigo', 'man'))