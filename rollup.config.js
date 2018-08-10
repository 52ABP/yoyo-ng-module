import replace from 'rollup-plugin-replace';
import sourcemaps from 'rollup-plugin-sourcemaps';


const listOfDateFns = [
  'format',
  'parse',
  'addSeconds',
  'addWeeks',
  'startOfWeek',
  'endOfWeek',
  'subWeeks',
  'startOfMonth',
  'endOfMonth',
  'subMonths',
  'startOfYear',
  'endOfYear',
  'subYears',
  'addDays',
];

const listOfReplace = listOfDateFns.map(name => {
  const map = {};
  map[`import * as ${name}`] = `import ${name}`;
  return replace(map);
});
const plugins = [sourcemaps(), ...listOfReplace];

export default {
  plugins,
  entry: 'dist/index.js',
  dest: 'dist/bundles/yoyo-ng-module.umd.js',
  sourceMap: true,
  format: 'umd',
  moduleName: 'ng.yoyoModule',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/router': 'ng.router',
    '@angular/common/http': 'ng.common.http',
    '@angular/forms': 'ng.forms',

    'ng-zorro-antd': 'ngZorro.antd',
    'ng-zorro-antd-extra': 'ngZorro.antd_extra',
    'file-saver': 'saveAs',
    'ngx-countdown': 'ngxCountDown',

    'rxjs': 'Rx',
    'rxjs/operators': 'Rx.Observable.prototype',

    'date-fns/format': 'date-fns/format/index',
    'date-fns/parse': 'date-fns/parse/index',
    'date-fns/add_seconds': 'date-fns/add_seconds/index',
    'date-fns/add_weeks': 'date-fns/add_weeks/index',
    'date-fns/start_of_week': 'date-fns/start_of_week/index',
    'date-fns/end_of_week': 'date-fns/end_of_week/index',
    'date-fns/sub_weeks': 'date-fns/sub_weeks/index',
    'date-fns/start_of_month': 'date-fns/start_of_month/index',
    'date-fns/end_of_month': 'date-fns/end_of_month/index',
    'date-fns/sub_months': 'date-fns/sub_months/index',
    'date-fns/start_of_year': 'date-fns/start_of_year/index',
    'date-fns/end_of_year': 'date-fns/end_of_year/index',
    'date-fns/sub_years': 'date-fns/sub_years/index',
    'date-fns/add_days': 'date-fns/add_days/index',
    'date-fns/distance_in_words_to_now': 'date-fns/distance_in_words_to_now/index',

    'extend': 'extend',
  }
}