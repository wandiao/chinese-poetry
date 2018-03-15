# 修改内容
添加nodejs版mysql导入脚本

## 数据说明
先在mysql数据库导入db.sql，添加表结构

* poems - 宋词数据表 
* poems_author - 宋词对应作者数据表 
* poetry - 唐宋诗数据表 
* poetry_author - 唐宋诗作者数据表


## 导入数据

``` bash
# 安装依赖
npm i

# 把繁体诗转换成简体
node t2s.js

# 导入数据
node insert.js
```
