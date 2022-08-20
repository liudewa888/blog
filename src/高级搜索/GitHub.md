# GitHub高级搜索
- [GitHub仓库搜索文档](https://docs.github.com/cn/search-github/searching-on-github/searching-for-repositories)
## 搜索语句
```javascript
"vue demo" in:name topic:vue3 stars:>500 language:java pushed:>2019-12-01

vue in:name // 名称含有vue的仓库
vue in:description,name // 描述和名称中含有vue
vue in:readme // readme文档含有vue

repo:biao/blog // 匹配特定仓库名称,用户名为biao的blog仓库
topic:vue3 // name含有vue 下方主题(tag/topic)含有vue3
language:xxx // 编程语言是xxx
label:"bug fix" // 具有标签"bug fix",含有"build"字样

stars:> ：筛选stars数量大于某个值的仓库
stars:start..end ：筛选stars数量在start和end区间的仓库

fork:start..end // 复刻
pushed:>YYYY-MM-DD // 最后更新时间大于YYYY-MM-DD
created:>2016-04-29 // 创建的时间

size:50..120 // 50kb - 120kb的仓库

node followers:>=1000 // 1000个关注作者的仓库

topics:>3 // 主题

// 排除特定结果(只适用字符串)
hello NOT world // 含hello不含world
cats NOT "hello world"
// - 前缀
mentions:biao -org:github // 匹配提及@biao, 且不在github组织仓库的议题

```