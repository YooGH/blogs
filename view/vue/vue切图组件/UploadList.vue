<template>
  <div>
    <VueCropper :show="showDialog" :img="base64Img" @blobFn="doneFn" />
    <div class="img-list">
      <div class="img-item" v-for="(item, index) of imgList" :key="index">
        <i @click="delImg(index)" class="el-icon-remove-outline img-del"></i>
        <img alt="" :src="item.img || defaultImage" :fit="fit" />
      </div>
      <el-upload
        ref="upload"
        v-if="imgList.length < maxImg"
        class="img-upload"
        :headers="headerInfo"
        :action="action"
        :show-file-list="false"
        :auto-upload="false"
        :on-change="beforeUpload"
        :on-error="handleError"
        :on-success="handleSuccess"
      >
        <i class="el-icon-plus avatar-uploader-icon"></i>
        {{ submitBtnText }}
      </el-upload>
    </div>
  </div>
</template>

<script>
import { uploadFileUrl, uploadFileUrll } from '@/api/file';
import VueCropper from './vue-cropper';

export default {
  name: 'UploadList',
  components: {
    VueCropper
  },
  props: {
    maxImg: {
      // 最大多少张图片
      type: Number,
      default: 3
    },
    imageType: {
      type: Array,
      default: () => {
        return ['JPG', 'JPEG', 'PNG'];
        // return ['JPG', 'JPEG', 'PNG', 'GIF', 'BMP', 'WBMP'];
      }
    },
    fileSize: {
      type: Number,
      default: 2 // 默认2M（单位M）
    },
    action: {
      type: String,
      default: uploadFileUrl
    },
    avatarSize: {
      type: Number,
      default: 120
    },
    shape: {
      type: String,
      default: 'square'
    },
    fit: {
      type: String,
      default: 'cover'
    },
    defaultImage: {
      type: String,
      default:
        'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'
    },
    submitBtnText: {
      type: String,
      default: '上传头像'
    },
    headers: {
      type: Object,
      default: () => {}
    },
    disabled: {
      type: Boolean,
      default: false
    },
    editList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      base64Img: '',
      showDialog: false,
      index: 0, // 当前图片下标
      fileList: [],
      imgList: [],
      loading: false,
      privateHeaders: {
        'X-Authorization': this.$store.getters.token,
        uid: this.$store.getters.uid,
        scopes: this.$store.getters.userInfo.roleId.toString()
      }
    };
  },
  computed: {
    headerInfo() {
      return Object.assign({}, this.privateHeaders, this.headers);
    }
  },
  watch: {
    editList: {
      handler(newArr) {
        if (newArr.length) {
          this.imgList = newArr;
          this.$emit('listSuccess', newArr);
        }
      },
      immediate: true
    }
  },
  methods: {
    delImg(index) {
      this.imgList.splice(index, 1);
      this.$emit('listSuccess', this.imgList);
    },
    watchIndex(index) {
      this.index = index;
    },
    beforeUpload(file) {
      console.log(file);
      const imageType = this.imageType;
      const fileType = imageType.includes(
        file.name.split('.')[1].toLocaleUpperCase()
      );
      if (!fileType) {
        this.$message.error(`上传图片只能是 ${imageType.toString()} 格式!`);
        return false;
      }
      if (file.size > this.fileSize * 1048576) {
        this.$message.error(`图片不能大于${this.fileSize}M`);
        return false;
      }
      this.loading = true;
      this.getBase64(file.raw).then(res => {
        this.showDialog = true;
        this.base64Img = res;
      });
    },
    doneFn(info) {
      this.showDialog = false;
      if (info) {
        console.log('', info);
        let form = new FormData();
        form.append('file', info, Date.now() + '.jpg'); // 参1后端识别字段，2:blob, 图片名称
        uploadFileUrll(form).then(res => {
          this.handleSuccess(res);
        });
        // this.$refs.upload.submit();
      }
    },
    // 转base64
    getBase64(file) {
      return new Promise(function(resolve, reject) {
        const reader = new FileReader();
        let imgResult = '';
        reader.readAsDataURL(file);
        reader.onload = function() {
          imgResult = reader.result;
        };
        reader.onerror = function(error) {
          reject(error);
        };
        reader.onloadend = function() {
          resolve(imgResult);
        };
      });
    },
    handleSuccess(res, file) {
      console.log(res, file);
      this.imgList.splice(this.imgList.length, 0, {
        // img: URL.createObjectURL(file.raw),
        img: res.result.thumbUrl,
        ...res.result
      });
      console.log(this.imgList);
      this.loading = false;
      this.$emit('listSuccess', this.imgList);
      console.log('成功数组', this.imgList);
    },
    handleError(res, file) {
      console.log(res, file);
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.img-list {
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  .img-item {
    position: relative;
    margin: 0 10px 10px 0;
    flex: 0 0 200px;
    width: 200px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
    .img-del {
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 20px;
      color: #f00;
      background: #fff;
      border-radius: 50%;
    }
  }
  .img-upload {
    flex: 0 0 200px;
    height: 200px;
    border: 1px dashed #eee;
    line-height: 200px;
    text-align: center;
  }
}
</style>
