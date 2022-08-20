# Google高级搜索
```javascript
"vue" // "" 双引号 精确搜索
大河*东流 // * 模糊搜索
好?哥 // ? 配置单个字符
~good // ~ 近义词
-key // - 排除
-url // -baidu.com 排除baidu.com
key1 key2 key3 // 多个关键词

OR/AND
python OR java
python AND java

intitle:key // 页面标题含有key
inurl:key // url中含有key
intext:key // 正文中含有key
inanchor: // 锚文本含有key

site
key site:juejin.cn // 只要juejin.cn结果

filetype
key filetype:pdf // 类型pdf
// 支持type: pdf、doc、docx（Word）、ppt、pptx（PPT）、xls、xlsx（Excel）、txt、text、tex（Tex/LaTex）

define key // 搜索key 定义
weather city // 城市天气


```