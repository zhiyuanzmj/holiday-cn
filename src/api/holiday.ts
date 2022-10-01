import dayjs from 'dayjs'
import list from '../data'

export interface Day {
  type?: 0 | 1 | 2 | 3
  name: string
  date: string
  isOffDay: boolean
}

function getList(value: string) {
  const day = dayjs(value)
  const date = day.format('YYYY-MM-DD')
  const isWeekend = [6, 0].includes(day.day())
  const d = list[`_${day.format('YYYY')}` as '_2022']?.days.find(i => i.date === date)

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

export default eventHandler(async (event) => {
  const { date } = useQuery(event)

  if (Array.isArray(date)) {
    return date.map(getList)
  }
  else if (date?.includes(',')) {
    const dates = date.split(',')
    return Array(dayjs(dates[1]).diff(dates[0], 'd') + 1).fill('').map((_, index) =>
      getList(dayjs(dates[0]).add(index, 'd').format('YYYY-MM-DD')),
    )
  }
  else if (date) {
    return getList(date)
  }
  else {
    return list[`_${dayjs().format('YYYY')}` as '_2022']?.days.map(i => getList(i.date))
  }
})
