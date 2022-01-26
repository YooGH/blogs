
- el-input
  + show-word-limit(展示输入数量 )
  + clearable
- el-select
  - filterable
  
  - clearable
  
- 多级多选框``el-cascader``
  
    - data-center/store-report/clerk-salesDetails（门店报表: 15698457856）
- el-form
  + clearable
  
  + :hide-required-asterisk =“false”(展示星)
  
- el-date-picker（多选日期）
  + type="dates" （多选）
  
  + format （展示的格式: yyyy-MM-dd）
  
  + value-format（接受到的格式，可选时间戳: timestamp）
  
  + picker-options  (某个其他的设置)
    
      + cellClassName  指定某个日期"类选择器"（函数不是字符串）
      
      + disabledDate  禁止选择日期（函数， return true则是禁止）
      
        访问响应对象需要methods return一个闭包对象，问题1↓
      
      + shortcuts  设置快捷选项，在日期组件左边展示（数组对象）
      
      + onPick 选中某个日期的回调 （函数）
      
      + firstDayOfWeek 七天哪个排第一（数字：1~7中选一个）
      
      ```
      :picker-options="{
        cellClassName (info) { return info.getTime() <= Date.now() ? 'text-red' : 'text-blue';} (单个日期类选择器限制),
        disabledDate(time) {
          return time.getTime() <= Date.now();
        },
        shortcuts: [
          {
            text: '本月',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }
        ]
        firstDayOfWeek: 1, // 星期一展示在第一
      }"
      ```



# from

 ```
<template>
  <el-form :model="ruleForm" class="table-search" label-width="100px" size="small">
    <el-form-item label="">
      <el-input placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="">
      <!-- <el-select v-model="" placeholder="全部类型"> -->
      <el-select placeholder="全部类型">
        <el-option label="启用" value="0"></el-option>
        <el-option label="禁用" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="提交时间:" style="margin-left:10px">
      <el-date-picker :clearable="false" format="yyyy-MM-dd" value-format="yyyy-MM-dd" v-model="" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="商品分类：" >
      <el-select v-model="" size="small" @change="">
        <el-option label="全部" value=""></el-option>
        <el-option label="应收" value="1"></el-option>
        <el-option label="应付" value="2"></el-option>
      </el-select>
      <el-select v-model="" size="small" @change="">
        <el-option label="全部" value=""></el-option>
        <el-option label="应收" value="1"></el-option>
        <el-option label="应付" value="2"></el-option>
      </el-select>
      <el-select v-model="" size="small" @change="">
        <el-option label="全部" value=""></el-option>
        <el-option label="应收" value="1"></el-option>
        <el-option label="应付" value="2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label-width="30px">
      <el-button type="" size="mini"> 重置 </el-button>
      <el-button type="primary" size="mini"> 搜索 </el-button>
    </el-form-item>
  </el-form>
</template>
 ```



# 重置
> ``ref`` ``:model``  ``prop``
```
<el-form 
	ref="searchData"
	:model="ruleForm"
>
	<el-form-item label="名称：" prop="name">
    	<el-input size="mini" v-model="ruleForm.name" placeholder="请输入名称"></el-input>
    </el-form-item>
</el-from>


<el-button size="mini" @click="resetForm('searchData')">重置</el-button>
resetForm(formName) {
    this.$refs[formName].resetFields();
    this.pageData.currentPage = 1;
    this.ruleForm.categoryId = ''
    this.searchFn()
},
```









问题

- [问题1、Element 时间选择器 disabledDate如何访问响应的数据](https://juejin.cn/post/6844903855763767309)
