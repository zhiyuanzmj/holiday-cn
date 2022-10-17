# holiday-cn

[![NPM version](https://img.shields.io/npm/v/holiday-cn?color=a1b858&label=)](https://www.npmjs.com/package/holiday-cn)

## 中国节假日API
数据源使用了: https://github.com/NateScarlet/holiday-cn，每年11月份更新下一年的节假日数据。

## 使用方式
https://holiday-cn.netlify.app/api/holiday?date=2022-10-01
- `date`参数:
可以使用任何可以被 `new Date` 解析的字符串，不传则默认返回今年所有的节假日列表。

### 返回值:
``` json
{
  "type": 1,
  "name": "国庆节",
  "isOffDay": true,
  "date": "2022-10-01"
}
```
- `type`：0 | 1 | 2 | 3
`0`为双休日，`1`为节假日，2为节假日工作日，3为工作日。

- `isOffDay`：是否为休息日



## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2022 [zhiyuanzmj](https://github.com/zhiyuanzmj)
