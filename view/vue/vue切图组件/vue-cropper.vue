<template>
  <el-dialog
    title=""
    :visible.sync="show"
    width="width"
    :before-close="dialogBeforeClose"
  >
    <div style="height: 500px;width: 500px;display:flex;margin: 0 auto;">
      <VueCropper
        ref="cropper"
        :img="cutImgBase64"
        outputType="jpeg"
        :info="true"
        :fixed="options.fixed"
        :auto-crop="options.autoCrop"
        :auto-crop-width="options.autoCropWidth"
        :auto-crop-height="options.autoCropHeight"
        :fixed-box="options.fixedBox"
      />
    </div>
    <div slot="footer">
      <div class="flex">
        <el-input
          class="flex-input"
          :max="500"
          :min="375"
          v-model="numberStr"
          type="text"
          placeholder="截图框宽高"
          @input="inputFn"
          @change="changeFn"
        ></el-input>
        <el-button type="primary" @click="scaleFn(false)">-</el-button>
        <el-button type="primary" @click="scaleFn(true)">+</el-button>
      </div>
      <el-button type="primary" @click="dialogBeforeClose(true)"
        >确 定</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
import { VueCropper } from 'vue-cropper';

export default {
  name: 'Vue-Cropper',
  components: {
    VueCropper
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    img: {
      type: String,
      default: ''
    },
    setOptions: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      numberStr: '',
      options: {
        autoCrop: true, // 是否默认生成截图框
        autoCropWidth: 375, // 默认生成截图框的宽度
        autoCropHeight: 375, // 默认生成截图框的长度
        fixed: true, // 固定宽高比例
        fixedBox: false // 是否固定截图框的大小 不允许改变
      },
      cutImgBase64: '',
      cutImgBlob: ''
    };
  },
  watch: {
    show: {
      handler(newArr) {
        if (!newArr) {
          this.options = {
            ...this.options,
            autoCrop: true, // 是否默认生成截图框
            autoCropWidth: 375, // 默认生成截图框的宽度
            autoCropHeight: 375, // 默认生成截图框的长度
            fixed: true, // 固定宽高比例
            fixedBox: false // 是否固定截图框的大小 不允许改变
          };
          this.numberStr = '';
          // this.cutImgBase64 = '';
        }
      },
      immediate: true
    },
    setOptions: {
      handler(newArr) {
        this.options = {
          ...this.options,
          ...newArr
        };
        console.log('setOptions', this.options);
      },
      immediate: true
    },
    img: {
      handler(newArr) {
        this.cutImgBase64 = newArr;
      },
      immediate: true
    }
  },
  methods: {
    inputFn() {
      this.numberStr = this.numberStr.replace(/\D/g, '');
    },
    changeFn() {
      let cropWidth = this.numberStr;
      if (cropWidth >= 500) {
        cropWidth = 500;
      } else if (cropWidth <= 375) {
        cropWidth = 375;
      }
      this.numberStr = cropWidth;
      this.options.autoCropWidth = cropWidth;
      // this.options.autoCropHeight = cropWidth;
    },
    scaleFn(status) {
      let cropWidth = this.options.autoCropWidth;
      if (status) {
        cropWidth >= 500 ? 500 : (cropWidth += 10);
      } else {
        cropWidth <= 375 ? 375 : (cropWidth -= 10);
      }
      this.options.autoCropWidth = cropWidth;
      // this.options.autoCropHeight = cropWidth;
    },
    dialogBeforeClose(status) {
      if (status === true) {
        this.$refs.cropper.getCropBlob(data => {
          this.$emit('blobFn', data);
        });
      } else {
        this.$emit('blobFn', false);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  justify-content: flex-start;
  display: flex;
  .flex-input {
    flex: 0 0 100px;
    margin-right: 10px;
  }
}
</style>
