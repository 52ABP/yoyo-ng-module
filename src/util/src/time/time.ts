import * as parse_ from 'date-fns/parse';
import * as startOfWeek_ from 'date-fns/start_of_week';
import * as endOfWeek_ from 'date-fns/end_of_week';
import * as subWeeks_ from 'date-fns/sub_weeks';
import * as startOfMonth_ from 'date-fns/start_of_month';
import * as endOfMonth_ from 'date-fns/end_of_month';
import * as subMonths_ from 'date-fns/sub_months';
import * as startOfYear_ from 'date-fns/start_of_year';
import * as endOfYear_ from 'date-fns/end_of_year';
import * as subYears_ from 'date-fns/sub_years';
import * as addDays_ from 'date-fns/add_days';

const parse = parse_;
const startOfWeek = startOfWeek_;
const endOfWeek = endOfWeek_;
const subWeeks = subWeeks_;
const startOfMonth = startOfMonth_;
const endOfMonth = endOfMonth_;
const subMonths = subMonths_;
const startOfYear = startOfYear_;
const endOfYear = endOfYear_;
const subYears = subYears_;
const addDays = addDays_;

/**
 * 获取时间范围
 * @param type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param time 开始时间
 */
export function getTimeDistance(
  type:
    | 'today'
    | '-today'
    | 'week'
    | '-week'
    | 'month'
    | '-month'
    | 'year'
    | '-year'
    | number,
  time?: Date | string | number,
): [Date, Date] {
  time = parse(time || new Date());

  switch (type) {
    case 'today':
    case '-today':
      return [time, time];
    case 'week':
      return [startOfWeek(time), endOfWeek(time)];
    case '-week':
      return [startOfWeek(subWeeks(time, 1)), endOfWeek(subWeeks(time, 1))];
    case 'month':
      return [startOfMonth(time), endOfMonth(time)];
    case '-month':
      return [startOfMonth(subMonths(time, 1)), endOfMonth(subMonths(time, 1))];
    case 'year':
      return [startOfYear(time), endOfYear(time)];
    case '-year':
      return [startOfYear(subYears(time, 1)), endOfYear(subYears(time, 1))];
    default:
      return type > 0
        ? [time, addDays(time, type)]
        : [addDays(time, type), time];
  }
}
