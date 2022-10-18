import dayjs from 'dayjs'
import { $fetch } from 'ohmyfetch'
import list from '../data'

export interface Day {
  type?: 0 | 1 | 2 | 3
  name: string
  date: string
  isOffDay: boolean
}

export default eventHandler(async (event) => {
  const query = useQuery(event)
  const day = dayjs(query.date as string)
  const date = day.format('YYYY-MM-DD')
  const isWeekend = [6, 0].includes(day.day())

  let data = list[`_${day.format('YYYY')}` as '_2022']
  if (!data?.days.length) {
    data = await Promise.any([
      $fetch(`https://cdn.jsdelivr.net/gh/NateScarlet/holiday-cn@master/${day.format('YYYY')}.json`, { responseType: 'json' }),
      $fetch(`https://raw.githubusercontent.com/NateScarlet/holiday-cn/master/${day.format('YYYY')}.json`, { responseType: 'json' }),
      $fetch(`https://ghproxy.com/https://raw.githubusercontent.com/NateScarlet/holiday-cn/master/${day.format('YYYY')}.json`, { responseType: 'json' }),
    ])
  }

  function getList(d?: Day) {
    return {
      type: d
        ? d.isOffDay ? 1 : 3
        : isWeekend ? 2 : 0,
      name: d
        ? d.isOffDay ? d.name : `${d.name}调休`
        : isWeekend ? '休息日' : '工作日',
      isOffDay: d
        ? d.isOffDay
        : isWeekend,
      date: d?.date || date,
    }
  }
  const days = data?.days.map(getList)

  return query.date
    ? getList(data.days.find(i => i.date === date))
    : days
})
