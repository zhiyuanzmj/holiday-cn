import dayjs from 'dayjs'
import { $fetch } from 'ohmyfetch'
export interface Day {
  type: 0 | 1 | 2 | 3
  name: string
  date: string
  isOffDay: boolean
}

export default eventHandler(async (event) => {
  const query = useQuery(event)
  const day = dayjs(query.date as string)
  const date = day.format('YYYY-MM-DD')
  const isWeekend = [6, 0].includes(day.day())

  const data = await $fetch<{ days: Day[] }>(`http://localhost:3000/${day.format('YYYY')}.json`)
  function getList(d?: Day) {
    return {
      type: d
        ? d.isOffDay ? 1 : 2
        : isWeekend ? 0 : 3,
      name: d
        ? d.isOffDay ? d.name : `${d.name}工作日`
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
