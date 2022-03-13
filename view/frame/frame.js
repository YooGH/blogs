const FRAME = [
	{id: 1, name: '数据绑定', values: ['{{}}', '{{}}', '{}']},
	{id: 2, name: '列表渲染', values:
		[
			'wx:for \n (有index/item) \n wx:for-item="itemname"',
			'v-for \n v-for="aNews in news" \n (vue2版:$index and $key 移除)',
			'list.map'
		]
	},
	{id: 3, name: '条件渲染', values:
		[
			'wx:if',
			'v-if',
			'三元运算符'
		]
	},
	{id: 4, name: '模板', values:
		[
			'<template name="msgItem"> \n <view> \n  <text> {{index}}: {{msg}} </text> \n  <text> Time: {{time}} </text> \n </view> \n</template>',
			'',
			'{}'
		]
	},
	{id: 5, name: '事件', values:
		[
			'<view \n data-hi="{{item.name}}" \n id="{{item.id}}" \n bindtap="tapName"> \n  Click me! \n</view> \n (e.target.dataset)',
			'v-on:click="tapName(item.id)"',
			'onClick'
		]
	},
	{id: 6, name: '引用', values:
		[
			'在微信小程序中，是没有dom对象的，\n根节点是page，使用page{height:100%}',
			': v-bind \n @ v-on',
			''
		]
	},
	{id: 7, name: 'CSS', values:
		[
			'button::after{border:0;}（现在的微信）',
			':focus{outline: 0;}(以前的浏览器)',
			''
		]
	},
	{id: 8, name: '生命周期', values:
		[
			'onLoad--监听页面加载 \nonReady--监听页面初次渲染完成 \nonShow--监听页面显示 \nonHide--监听页面隐藏 \nonUnload--监听页面卸载 \n\nonPullDownRefresh--监听用户下拉动作 \nonReachBottom--页面上拉触底事件的处理函数 \nonShareAppMessage--用户点击右上角转发 \nonPageScroll--页面滚动触发事件的处理函数 \nonTabItemTap--当前是 tab 页时，点击 tab 时触发 \n其他--Any开发者可以添加任意的函数或数据到 object 参数中，在页面的函数中用 this 可以访问 \nhttps://blog.csdn.net/u014360817/article/details/52650973',
			'beforeCreate--创建前 \ncreated--创建后 \nbeforeMount--载入前 \nmounted--载入后 \nbeforeUpdate--更新前 \nupdated--更新后 \nbeforeDestroy--销毁前 \ndestroyed--销毁后',
			''
		]
	},

	


]