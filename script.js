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
  // buttonタグにclickをバインドし、クリックしたら年と月を表示させる
  // buttonの表示部分を 「2020年○月」にする
  template: `<button @click="display(year, month)">
    {{ year | addYear }}{{ month | addMonth }}
  </button>`,
  // 年と月の引数を記述してください
  methods:{
    // 年と月を引数にする
    display: function(year, month) {
      // 子コンポーネントが持つ値を親コンポーネントに渡す
      // this.$emit('イベント名', 渡す引数A, 渡す引数B, ...)
      this.$emit('clicked-display-button', year, month);
    }
    }
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
},


// ボタンをクリックしたら、「年」と「月」を付与してアラートが表示される
methods: {
  getCalendar: function(year, month) {
    alert(year + "年" + month + "月")
  }
}
})
