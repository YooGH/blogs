[loading](https://www.cnblogs.com/shenStudy/p/15403877.html)



# [el-table](https://element.eleme.cn/#/zh-CN/component/table)


- table
  - stripe    (斑马）
  - row-key       ``:row-key="getRowKeys"``        (key)
  - @selection-change="handleSelectionChange" 多选    (选择回调)    
  - header-cell-* 表头属性设置     （）



- table-column

  - :formatter="fn"   // 数据过滤
  - :selectableFn="fn" // 是否禁用
  - fixed: true,left,right  // 固定
  - sortable: 'custom' // custom后端排序； 时间排序(table加sort-change时间监听 | 返回descending倒三角，ascending正三角)
  





```
<template>
<el-table
  ref="multipleTable"
  :data="tableData"
  size="medium"
  stripe
  tooltip-effect="dark"
  style="width: 100%"
>
  <el-table-column type="selection" width="55"></el-table-column>
  <el-table-column prop="ticketName" align="center" label="编号">
    <template slot-scope="scope">
        <div>{{scope.row.index}}</div>
    </template>
  </el-table-column>
  <el-table-column prop="ticketSubName" align="center" label="品牌名称"></el-table-column>
  <el-table-column prop="activity" align="center" label="排序">
  <template slot-scope="scope">
      <el-input>{{scope.row.index}}</el-input>
  </template>
  </el-table-column>
    
  </el-table-column>
  <el-table-column align="center" fixed="right" label="操作">
  <template>
      <el-button type="text">查看详情</el-button>
      <el-button type="text">删除</el-button>
  </template>
  </el-table-column>
</el-table>


couponTable: [
        {ticketSubName: 1,}
      ]
```

 

1. **多选**

:reserve-selection="true"（:row-key="getRowKey"）

@selection-change 选择回显

```
<el-table-column type="selection" :reserve-selection="true" />
```




2. **序号**

> **type="index"**

```
<el-table-column type="index"/>
```



3. **回显选框**

```
this.$refs.multipleTable.toggleRowSelection(row);
```



4. **清空选框**

  ```
  this.$refs.multipleTable.clearSelection();
  ```







# 提示

prop: ``<template slot-scope="scope">``创建自定义的不要用属性prop，不然渲染会乱序



```
this.$alert(
        `<strong>ssss</strong>ng>`,
        '您确定要批量上架所选的商品吗？',
        {
          showCancelButton: true,
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true // 开启富文本
        }
      )
        .then(()=> {}) // 确认
        .catch(()=> {}); // 取消
```

```\
 this.$message.info('请先选择所属机构！'); 灰色
 warning 橙色
 error 红色
 
```

