window.addEventListener("load", eventWindowLoaded, false);
function eventWindowLoaded () {
  draw();
  drawTtl();
}

const draw = () => {
  const canvas = document.getElementById("wave");
  if(canvas.getContext) {
    let ctx = canvas.getContext("2d");
    //変数・定数を定義
    const waveHeight = 30;
    let height = canvas.height;
    let width = canvas.width;
    let yPos = Math.floor(height/2);
    let variation = 0;
    const amp = 0.25;

    setInterval(() => {
      let phi = variation * Math.PI  / 0.5;
      let y = Math.sin(phi);
      // 初期化
      ctx.clearRect(0, 0, width, height);

      // 空の描画開始
      //塗りつぶし色を黒に
      ctx.fillStyle="black";
      ctx.fillRect(0, 0, width, height)

      // 波の描画開始
      // パスの開始
      ctx.beginPath();
      //波のスタート位置
      ctx.moveTo(0, waveHeight * y + yPos);
      // 波型にパスを移動
      for (i = 0; i <= width + 10; i += 10) {
        y = amp * Math.sin( i / waveHeight + phi) ;
        ctx.lineTo(i, y * waveHeight + yPos);
      }
      // パスを右下へ移動
      ctx.lineTo(width + 10, height);
      // パスを左下へ移動
      ctx.lineTo(0, height);
      // パスの修了
      ctx.closePath();
      // 塗りつぶし色の指定
      ctx.fillStyle = "#428ABD";
      //上記の移動したパスの内側を塗りつぶす
      ctx.fill();

      // 月の描画開始
      // パスの開始
      ctx.beginPath();
      // 月の色
      ctx.fillStyle = "orange";
      // (100, 50)の位置に半径30pxの円
      ctx.arc(100, 50, 30, 0, 2 * Math.PI);
      // パスの修了
      ctx.closePath();
      // 軌跡の範囲を塗りつぶす
      ctx.fill();
      // パスの開始
      ctx.beginPath();
      // 月の色
      ctx.fillStyle = "black";
      // (100, 50)の位置に半径30pxの円
      ctx.arc(90, 40, 30, 0, 2 * Math.PI);
      // パスの修了
      ctx.closePath();
      // 軌跡の範囲を塗りつぶす
      ctx.fill();

      // 変化量（波の速さ）を更新
      variation += .002;

    }, 30);
  } else {
    alert("キャンバスに対応していません");
  }
}
