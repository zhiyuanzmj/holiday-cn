import { describe, expect, it } from 'vitest'
import { $fetch } from 'ohmyfetch'
import type { Day } from '../src/api/holiday'

describe('holiday type', () => {
  it('2022-10-01 is 1', async () => {
    const data = await $fetch<Day>('http://localhost:3000/api/holiday', {
      params: {
        date: '2022-10-01',
      },
    })
    expect(data.type).toEqual(1)
    expect(data.name).toEqual('国庆节')
    expect(data.isOffDay).toEqual(true)
  })

  it('2022-10-08 is 2', async () => {
    const data = await $fetch<any>('http://localhost:3000/api/holiday', {
      params: {
        date: '2022-10-08',
      },
    })
    expect(data.type).toEqual(2)
    expect(data.name).toEqual('国庆节工作日')
    expect(data.isOffDay).toEqual(false)
  })

  it('2022-10-10 is 3', async () => {
    const data = await $fetch<any>('http://localhost:3000/api/holiday', {
      params: {
        date: '2022-10-10',
      },
    })
    expect(data.type).toEqual(3)
    expect(data.name).toEqual('工作日')
    expect(data.isOffDay).toEqual(false)
  })

  it('2022-10-15 is 0', async () => {
    const data = await $fetch<any>('http://localhost:3000/api/holiday', {
      params: {
        date: '2022-10-15',
      },
    })
    expect(data.type).toEqual(0)
    expect(data.name).toEqual('休息日')
    expect(data.isOffDay).toEqual(true)
  })
})
