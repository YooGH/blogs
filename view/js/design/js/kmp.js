// 时间复杂度：O(n+m)
// i不回溯，j不一定回到头
// https://zhuanlan.zhihu.com/p/460521127


function indexBF(S, T, pos=1) {
	let [i, j] = [pos,1];
	while(i<=S.length && j<=T.length) {
		if(S[i-1] == T[j-1]) { // 主串和子串依次匹配下一个字符
			++i;
			++j;
		} else {  // 主串、子串指针回溯重新开始下一次匹配
			// ++i; BF算法区别
			// j = 1 BF算法区别
			j = getNext(j)     // KMP算法 i不回溯,j不一定回溯
		}
	}
	return j>T.length ? i-T.length-1 : 0;
}

console.log(indexBF('hyymanellbigo', 'man'))