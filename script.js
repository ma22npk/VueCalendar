// filter名に「addYear」、引数に「value」
Vue.filter('addYear', function(value) {
  // 「条件が空欄でないとき」の条件式を記述
  if(value != "") {
    // valueに「年」を追記
    value = value + "年";
  }
  // 戻り値に「value」を返す。
  return value;
})

  // filter名に「addMonth」、引数に「value」
  Vue.filter('addMonth', function(value) {
    // 「条件が空欄でないとき」の条件式を記述
    if(value != "") {
      // valueに「月」を追記
      value = value + "月";
    }
    // 戻り値に「value」を返す。
    return value;
  })

  // filter名に「addDate」、引数に「value」
  Vue.filter('addDate', function(value) {
    // 「条件が空欄でないとき」の条件式を記述
    if(value != "") {
      // valueに「日」を追記
      value = value + "日";
    }
    // 戻り値に「value」を返す。
    return value;
  })

Vue.component('month-menu', {
  // 親コンポーネントから子コンポーネントに値を渡す
  props: ['year', 'month'],
  // 受け取ったデータを代入するコードを記述
  template: `<button>{{ year }}年{{ month }}月</button><br>`
})

new Vue({
el: "#app",
data: {
  dates: [
    // 2021年の月の要素を記述
    {year: 2021, month: 1},
    {year: 2021, month: 2},
    {year: 2021, month: 3},
    {year: 2021, month: 4},
    {year: 2021, month: 5},
    {year: 2021, month: 6},
    {year: 2021, month: 7},
    {year: 2021, month: 8},
    {year: 2021, month: 9},
    {year: 2021, month: 10},
    {year: 2021, month: 11},
    {year: 2021, month: 12},
  ]
}
})
