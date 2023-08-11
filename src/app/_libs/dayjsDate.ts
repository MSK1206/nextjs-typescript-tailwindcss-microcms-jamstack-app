import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

// Publish DateをDayjsで変換　例：2023/08/01
export const formatDate = (date: string) => {
  const utcDate = new Date(date)
  const jstDate = dayjs.tz(utcDate, 'Asia/Tokyo')
  return dayjs(jstDate, 'yyyy/MM/dd')
}
