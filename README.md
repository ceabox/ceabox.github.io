
# 模拟京东网页demo
## 项目介绍
- 项目模拟3个页面，首页[index](https://github.com/Jerome1580/jd-demo/blob/master/index.html),列表页[list](https://github.com/Jerome1580/jd-demo/blob/master/list.html),产品详情页[detail](https://github.com/Jerome1580/jd-demo/blob/master/detail.html)
- 项目主要做了电商网站的布局，样式css，交互，ajax请求等，实现了大部分网站的前端效果
- **【重点】**产品detail页
 1. 创建原型对象，构造产品__product原型__、购物车__cart原型__，将product相关的属性*（如：标题、价格）*、方法*（如：加入购物车）*封装到product原型中，模块化管理。
 2. 实现了添加产品到购物车功能；并在购物车中删除、修改产品信息。
 3. 所有产品数据是由后台*（前台模拟的）*json传过来的，解析到页面上；实现不同产品的不同数据及展示*（如：该产品是否参加活动）*。

## 使用技术
- html，css，css3，js，jquery
- 使用修改第三方框架jquery-ui，封装原生js的[animate动画](https://github.com/Jerome1580/Package-plug-in/tree/master/js)
- jq封装的Ajax，调用淘宝api搜索联想词数据；调用聚合数据（菜谱大全）api接口[练习](https://github.com/Jerome1580/Ajax)
- 使用[template](https://github.com/Jerome1580/Package-plug-in/tree/master/template)等插件模板，提高效率

## 效果图
首页|列表页|详情页
------------ | ------------- | ------------
![首页][1]|![列表页][2]|![详情页][3]



**17.02.15 版本更新**<br/>
1. 新增网站搜索框，关键词搜索联想词功能，ajax请求，淘宝api接口

[1]: images/index.png
[2]: images/list.png
[3]: images/detail.png



