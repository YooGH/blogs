1. ``img``标签 ``{display: block; width: 200px;};`` 苹果手机真机是自适应不了高度，要套一层块级标签，里面``img{display: block;宽高100%}``

2. 网络地址上传公司服务器=> 
 网站地址<br/>
 绘制成canvas<br/>
 canvas转二进制<br/>
 二进制文件上传服务器<br/> 

 ```
  <meta name="referrer" content="no-referrer" />
 	function urlToBase64(imgUrl) {
	  let that = this;
	  return new Promise(resolve => {
	    let image = new Image();
	    // 解决跨域问题
	    image.setAttribute('crossOrigin', 'anonymous');
	    image.src = imgUrl;
	    image.onload = function() {
	      const canvas = this.canvas
	        ? this.canvas
	        : (this.canvas = document.createElement('canvas'));
	      canvas.width = image.width;
	      canvas.height = image.height;
	      const ctx = canvas.getContext('2d');
	      ctx.drawImage(image, 0, 0, image.width, image.height);
	      canvas.toBlob(res => {
          that.uploadFn(res).then(res => {
            resolve(res);
          });
        });
	    };
	  });
	},
	uploadFn(file) {
    let that = this;
    return new Promise(resolve => {
      const form = new FormData();
      form.append('file', file, Date.now() + '.jpg'); // 参1后端识别字段，2:blob, 图片名称
      upload(form)
        .then(res => {
          res.result.dynamicDomain &&
            (that.dynamicDomain = res.result.dynamicDomain);
          resolve(`${res.result.dynamicDomain}${res.result.sourcePath}`);
        })
        .catch(() => {});
    });
  },
 ```

 base64转blob
 ```
  urlToBase64(imgUrl) {
    let that = this;
    return new Promise(resolve => {
      let image = new Image();
      // 解决跨域问题
      image.setAttribute('crossOrigin', 'anonymous');
      image.src = imgUrl;
      // console.log('imgUrl', imgUrl);
      image.onload = function() {
        // console.log('imageObj', image);
        const canvas = this.canvas
          ? this.canvas
          : (this.canvas = document.createElement('canvas'));
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, image.width, image.height);
        var ext = image.src
          .substring(image.src.lastIndexOf('.') + 1)
          .toLowerCase();
        var dataURL = canvas.toDataURL('image/' + ext);
        that.uploadFn(that.dataURLtoBlob(dataURL)).then(res => {
          resolve(res);
        });
      };
    });
  },
	dataURLtoBlob(dataUrl) {
	  console.log('dataUrl', dataUrl.split(',')[0].match(/:(.*?);/)[1]);
	  var arr = dataUrl.split(','),
	    mime = arr[0].match(/:(.*?);/)[1],
	    bstr = window.atob(arr[1]),
	    n = bstr.length,
	    u8arr = new Uint8Array(n);
	  while (n--) {
	    u8arr[n] = bstr.charCodeAt(n);
	  }
	  return new Blob([u8arr], {
	    type: mime
	  });
	},
 ```