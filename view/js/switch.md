switch做判断

```
function getStar (grade) {
    switch (true) {
        case grade == 100:
            console.log('5星');
            break;
        case grade >= 80:
            console.log('4星');
            break;
        case grade >= 60:
            console.log('3星');
            break;
        case grade >= 50:
            console.log('2星');
            break;
        default:
            console.log('1星');
            break;
    }
}
getStar(40)     //  '1星'
```

<br/><br/><br/>

[博客](https://www.cnblogs.com/lgyong/p/10374324.html)