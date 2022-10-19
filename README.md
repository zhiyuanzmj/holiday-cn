# holiday-cn

## 中国节假日API
数据源来自于 https://github.com/NateScarlet/holiday-cn 每年11月份更新下一年的节假日数据。

## 使用方式
https://holiday-cn.netlify.app/api/holiday?date=2022-10-01
### 参数:
- date: 日期查询
  - [date=2022-10-01](https://holiday-cn.netlify.app/api/holiday?date=2022-10-01): 可以使用任何可以被 `new Date` 解析的日期格式
  - [date=2022-10-01,2022-10-07](https://holiday-cn.netlify.app/api/holiday?date=2022-10-01,2022-10-07)
  - [date=2022-10-01&date=2022-10-10](https://holiday-cn.netlify.app/api/holiday?date=2022-10-01&date=2022-10-10): 数组批量查询
  - [空](https://holiday-cn.netlify.app/api/holiday): 默认返回今年所有的节假日列表

### 返回值:
``` json
{
  "type": 1,
  "name": "国庆节",
  "isOffDay": true,
  "date": "2022-10-01"
}
```

- type：类型
  - `0`: 工作日
  - `1`: 节假日
  - `2`: 双休日
  - `3`: 节假日调休

- isOffDay：是否为休息日
  - `true`: 双休日或节假日
  - `false`: 工作日或节假日调休

## 初始化
推荐使用 [pnpm](https://github.com/pnpm/pnpm) 来进行包管理，如果没有安装pnpm, 请先运行: `npm install -g pnpm`

``` sh
git clone zhiyuanzmj/holiday-cn
cd holiday-cn
pnpm i
```

### 开发
``` sh
pnpm dev
```
浏览器访问: http://localhost:3000/api/holiday

### 发布
``` sh
pnpm build
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2022 [zhiyuanzmj](https://github.com/zhiyuanzmj)
