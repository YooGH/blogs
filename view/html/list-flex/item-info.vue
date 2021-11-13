<template>
	<view style="background: #333;height: 100vh;padding: 100rpx 10rpx;">
		<!-- col -->
		<view class="text-white">Flex布局：<text>\ndisplay: flex;width: 100%;\npadding: 10rpx;background: #fff;</text></view>
		<view class="item-info">
			<view class="info-img">flex: 0 0 200rpx; height:200rpx;</view>
			<view class="info-main"><text>flex: 1;\npadding: 20rpx;撑开图片距离\ncolor: #333;(总颜色)\nfont-size: 28rpx;(总字体)</text></view>
		</view>
		
		
		<view class="text-white">内容左右两列Flex布局：<text>左边撑满，右边固定</text></view>
		<view class="item-info">
			<view class="info-img"></view>
			<view class="info-main">
				<view class="main-left">flex: 1;</view>
				<view class="main-right">flex: 0 0 20rpx;</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item: {
					activityPrice: 0,
					goodsId: "6e46eb529ab24fce8d38f846502a47bd",
					goodsName: "eve更新测试商品",
					goodsType: 2,
					isProprietary: true,
					buttonStatus: 2,
					providerId: "",
					show: false,
					templatePrice: 1,
					thumbnail: "http://testapi.huoban168.com.cn/public/upload/getFile?id=7805d7588a0b4d1cb5883d7f212252ca",
				}
			}
		}
	}
</script>

<style lang='scss'>
	.text-white {
		margin-top: 60rpx;
		color: #fff;
	}
	.item-info {
		display: flex;
		width: 100%;
		padding: 10rpx;
		background: #fff;
		.info-img {
			height: 260rpx;
			flex: 0 0 260rpx;
			background: #999;
		}
		.info-main {
			flex: 1;
			padding: 20rpx;
			background: #eee;
		}
	}
	
	
	.info-main {
		display: flex;
		width: 100%;
		background: #fff;
		color: #fff;
		.main-left {
			background: #333;
			flex: 1;
		}
		.main-right {
			background: #666;
			flex: 0 0 100rpx;
		}
	}
	
	
	
</style>
