flex布局

- 图片(flex: 0 0 宽度;高度)

- 内容(flex: 1;不设置高度)  （图片与内容距离用整体padding撑开）

  x = goods/product/info/chat

##### 0. item-x 层(padding和margin扯开高度)

```
display: flex;
width: 100%;
padding: 内边距可能需要;
background: #fff;

border-radius: 20rpx;
margin: 10rpx auto;
```

##### 1.1 图片（x-img）

```
height: 高度;
flex: 0 0 宽度;
```

##### 1.2内容（x-main）

```
flex: 1;
padding: 0;
```

- 1.2.1左右两栏的(左边撑满，右边固定)

````
.x-main {
	display: flex;
	.main-left {
		flex: 1;
		padding: 0;
	}
	.magin-right {
		flex: 宽度;
		padding: 0;
	}
}
````

左边命名

```
.x-titile(.text-twocut/.text-cut)   .title-icon(.title-block>.title-icon和x-title)
.x-subtitle (又名.goods-price>.y-bold)
.x-btn(相对x-main定位)
```

右边命名

```
.x-time
.x-count/.x-num/.x-msg
```









```
.text-twocut {
  display: -webkit-box;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
```

```
.text-cut {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  
  width: 80%;
}
```