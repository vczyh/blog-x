import dayjs from 'dayjs';

export const format = (str) => dayjs(str)
  .locale('zh-cn')
  .format('YYYY-MM-DD');

export const monthAndDay = (str) => dayjs(str)
  .locale('zh-cn')
  .format('MM-DD');

// export default format;
