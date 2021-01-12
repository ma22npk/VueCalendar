// filter名に「addYear」、引数に「value」
Vue.filter('addYear', function(value) {
  // 「条件が空欄でないとき」の条件式を記述
  if(value != "") {
    // valueに「年」を追記
    value = value + ". ";
  }
  // 戻り値に「value」を返す。
  return value;
})

  // filter名に「addMonth」、引数に「value」
  Vue.filter('addMonth', function(value) {
    // 「条件が空欄でないとき」の条件式を記述
    if(value != "") {
      // valueに「月」を追記
      value = value + "";
    }
    // 戻り値に「value」を返す。
    return value;
  })

  // filter名に「addDate」、引数に「value」
  Vue.filter('addDate', function(value) {
    // 「条件が空欄でないとき」の条件式を記述
    if(value != "") {
      // valueに「日」を追記
      value = value;
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
  template: `<button class="button" @click="display(year, month)">
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
  ],
      // dateObjectsに空の配列を定義
      dateObjects: [],
      // headersに曜日を表示させる
      headers: ["SUN","MON","TUE","WED", "THU", "FRI", "SAT"]
},




// ボタンをクリックしたら、「年」と「月」を付与してアラートが表示される
// alert(year + "年" + month + "月")
methods: {
  getCalendar: function(year, month) {
    // 翌月の0日で生成し、当月末日のDateオブジェクトを取得
    const lastDate = new Date(Number(year), Number(month), 0);
    //曜日を取得するためのDateオブジェクト
    const checkDay = new Date(lastDate)
    this.dateObjects = [];
    let oneweek = [];
    // 曜日を描画
    for(let i = 0; i < lastDate.getDate(); i++) {
      checkDay.setDate(i + 1);
      if(i === 0) {
        for(let j = 0; j < checkDay.getDay(); j++) {
        // 1日が日曜日でない場合、空欄を描画
        oneweek.push("");
        }
      }
      // 土曜日まで描画されたとき、下段に表を追加する
      oneweek.push(i+1);
      if(checkDay.getDay() === 6) {
      this.dateObjects.push(oneweek);
      oneweek = [];
      }
    }


//もし、土曜日でない場合、日付をそのまま描画する
    if(checkDay.getDay != 6) {
      this.dateObjects.push(oneweek);
      }
    }
  }
})

// [第1週日,第1週月,第1週火,第1週水,第1週木,第1週金,第1週土]
// [第2週日,第2週月,第2週火,第2週水,第2週木,第2週金,第2週土]
// [第3週日,第3週月,第3週火,第3週水,第3週木,第3週金,第3週土]
// [第4週日,第4週月,第4週火,第4週水,第4週木,第4週金,第4週土]
// [第5週日,第5週月,第5週火,第5週水,第5週木,第5週金,第5週土]

// ["","","","","1","2","3","4"]
