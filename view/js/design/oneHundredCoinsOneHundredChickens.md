# 百钱百鸡

> 百钱百鸡是一个古老的数学问题，最早记载于中国古代的数学著作《张丘建算经》中。问题描述是：一农夫要用100个铜钱买100只鸡，其中公鸡每只值5个铜钱，母鸡每值3个铜钱，小鸡三只值1个铜钱。农夫想要买齐100只鸡，同时又要用光100个铜钱。这个问题的解决方法涉及到代数方程的求解，最终得出公鸡、母鸡和小鸡各应该买多少只。


<br/><br/><br/>


王大爷把一些鸡和兔子关在同一个笼子里,共有8个头,20 条腿,请问这个笼子里有几只鸡?几只免子?<br/>
蛐蛐和蜘蛛共有 6个头,40 条腿,蛐蛐和蜘妹各有几只?<br/>

```
function headAndLeg(headNumber,legNumber,leg1,leg2,leg1Name,leg2Name) {
  for(let index=1;index<headNumber;index++) {
    let nn = headNumber-index;
 
    if((leg1*index + leg2*nn) === legNumber) {
      console.log(`${leg1Name}：${index}只，${leg1*index}腿`);
      console.log(`${leg2Name}：${headNumber-index}只，${leg2*(headNumber-index)}腿`);
    }
  }
}


headAndLeg(8,20,2,4,'鸡','兔')
headAndLeg(6,40,6,8,'蛐蛐','蜘蛛')
```


<br/><br/><br/>


#### 百钱百鸡

```
function headAndLeg(headNumber,legNumber) {
  for(let index=1;index<headNumber;index++) {
    for(let indexB=1;indexB<headNumber;indexB++) {
      let xjNumber = index;
      let mjNumber = indexB;
      let gjNumber = (headNumber-index-indexB);
      
      // 小鸡必须被3整除，保证是一只鸡不是半只鸡或无效分之一只鸡
      if((xjNumber+gjNumber+mjNumber === headNumber) && (xjNumber/3+mjNumber*3+gjNumber*5)===100 && xjNumber%3 ===0 && xjNumber>0 && mjNumber>0 && gjNumber>0) {
        console.log(`小鸡：${xjNumber}只，${xjNumber/3}钱`);
        console.log(`母鸡：${mjNumber}只，${mjNumber*3}钱`);
        console.log(`公鸡：${gjNumber}只，${gjNumber*5}钱`);
        // console.log(`${xjNumber}-${mjNumber}-${gjNumber}`)
      }
    }
  }
}


headAndLeg(100, 100)


"小鸡：78只，26钱"
"母鸡：18只，54钱"
"公鸡：4只，20钱"
"小鸡：81只，27钱"
"母鸡：11只，33钱"
"公鸡：8只，40钱"
"小鸡：84只，28钱"
"母鸡：4只，12钱"
"公鸡：12只，60钱"
```