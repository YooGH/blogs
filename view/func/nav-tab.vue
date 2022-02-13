<template>
	<view>
		<view :style="relativeBlock"></view>
		<view class="cu-custom" :style="[{ height: CUSTOMBAR + 'px', opacity: headerOpacity, color: color, background: background}]" @touchmove.stop.prevent="moveHandle">
			<view class="cu-bar fixed" :style="contentStyle">
				<!-- 左边 -->
				<view class="left-style" :class="leftMore ? 'after-line' : 'left-stylee'" :style="leftStyle">
						<!-- 单个 -->
						<u-icon class="icon-padding" v-if="!imgIcon && !leftMore" :size="iconSize" @click="leftJump" :name="leftIcon"></u-icon>
						<!-- 两个 -->
						<u-icon class="icon-padding" v-if="leftMore" :size="iconSize" @click="leftJump" :name="leftIcon"></u-icon>
						<u-icon class="icon-padding" v-if="leftMore" :size="iconSize" @click="rightJump" :name="rightIcon"></u-icon>
						<!-- 图片 -->
						<slot v-if="imgIcon" name="left"></slot>
				</view>
				
				<!-- 中间 -->
				<view class="content-style" :style="rightStyle">
					<slot name="content"></slot>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>

  export default {
		data() {
		  return {
				iconSize: 40,
				relativeBlock: '', // 样式
		    leftStyle: '', // 样式
				rightStyle: '', // 样式
		    isShowHome: true,
		    title: '',
		    contentStyle: '',
		    STATUSBAR: 20, 
		    CUSTOMBAR: 60,
				customW: 0,
		  }
		},
    /**
     * 组件的属性列表
     * 用于组件自定义设置
     */
    props: {
      color: {
				type: String,
				default: '',
			},
			imgIcon: {
				type: Boolean,
				default: false 
			},
      headerOpacity: {
				type: Number,
				default: 1
			},
			leftMore: {
				type: Boolean,
				default: false 
			},
			leftIcon: {
				type: String,
				default: 'arrow-left'
			},
			background: {
				type: String,
				default: '#fff'
			},
			rightIcon: {
				type: String,
				default: 'list'
			},
			dropDownShow: {
				type: Boolean,
				default: false
			}
    },
		
		mounted() {
			let that = this;
			uni.getSystemInfo({
				success: function(res) {
				// #ifdef MP-WEIXIN
				if (uni.getMenuButtonBoundingClientRect()) {
					const custom = uni.getMenuButtonBoundingClientRect();
					// console.log('系统信息', res)
					// console.log('胶囊信息', custom)
					const [
						winW,
						statusH,
						statusW,
						customT,
						customB,
						customR,
						customW,
						customH,
					] = [
						res.windowWidth,
						res.statusBarHeight,
						res.statusBarWidth,
						custom.top,
						custom.bottom,
						custom.right,
						custom.width,
						custom.height,
					]
					const contentHeight = customT - statusH;
					that.STATUSBAR = statusH; // 状态栏高度
					that.CUSTOMBAR = contentHeight + customB; // 导航栏高度
					
					that.contentStyle = `height:${that.CUSTOMBAR}px;padding-top:${statusH}px;margin-right: ${winW-customR}px`
					that.customW = customW
					that.rightStyle = `padding-right: ${customW}px`;
					that.leftStyle = `margin:${contentHeight}px 0 ${contentHeight}px ${winW-customR}px;width:${customW}px;height:${customH}px;`
					that.relativeBlock = `width: 100%;height:${that.CUSTOMBAR}px`
					that.$emit('info', {
						statusH,
						navH: contentHeight + customB
					})
				}
				// #endif
				},
			})
			this.title = 'kk'
		},
    /**
     * 组件的方法列表
     * 更新属性和数据的方法与更新页面数据的方法类似
     */
    methods: {
			leftJump() {
				let pages = getCurrentPages();
				console.log(pages)
				uni.navigateBack({
					delta: 1
				});
			},
			rightJump() {
				let pages = getCurrentPages();
				console.log(pages)
				this.$emit('dropDownFn',!this.dropDownShow)
				// uni.navigateBack({
				// 	delta: 1
				// });
			}

    }

  }
</script>

<style lang="scss" scoped>
	$gray: #fdfdfd;
	$deepgray: #e4e4e4;
	.cu-custom {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999;
	}
	.cu-bar {
		display: flex;
		// background: #fff;
	}
	.after-line {
		position: relative;
		&:after {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 1rpx;
			height: 60%;
			background: $deepgray;
		}
	}
	.left-style {
		display: flex;
		justify-content: space-around;
		align-items: center;
		border: 1px solid $deepgray;
		border-radius: 80rpx;
		background: $gray;
		box-sizing: border-box;
	}
	.left-stylee {
		justify-content: flex-start;
		border: 0;
		background: transparent;
	}
	.icon-padding {
		padding: 6rpx 10rpx;
	}
	.content-style {
		flex: 1;
		text-align: center;
		height: 100%;
	}
</style>
