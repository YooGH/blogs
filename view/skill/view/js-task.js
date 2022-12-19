setTimeout(function() {
	console.log(1)
})


new Promise(function(resolve, reject){
	console.log(2)
	resolve()
}).then(function() {
	console.log(3)
})


console.log(4)


// 2431