<template>
  <div class="about">
    <h2 class="about__ttl">About</h2>
    <table class="about-table">
      <tbody class="about-table__tbody">
        <tr class="about-table__tr">
          <th class="about-table__th">
            <span class="about-table__th-txt">名前</span>
          </th><td class="about-table__td">
            <ruby>
              <rb>角川 拓夢</rb>
              <rp>(</rp>
              <rt>すみかわ たくむ</rt>
              <rp>)</rp>
            </ruby>
          </td>
        </tr>
        <tr class="about-table__tr">
          <th class="about-table__th">
            <span class="about-table__th-txt">生年月日</span>
          </th><td class="about-table__td">1997年10月11日</td>
        </tr>
        <tr class="about-table__tr">
          <th class="about-table__th">
            <span class="about-table__th-txt">年齢</span>
          </th><td class="about-table__td">22歳</td>
        </tr>
        <tr class="about-table__tr">
          <th class="about-table__th">
            <span class="about-table__th-txt">血液型</span>
          </th><td class="about-table__td">A型</td>
        </tr>
        <tr class="about-table__tr">
          <th class="about-table__th">
            <span class="about-table__th-txt">干支</span>
          </th><td class="about-table__td">丑</td>
        </tr>
        <tr class="about-table__tr">
          <th class="about-table__th">
            <span class="about-table__th-txt">星座</span>
          </th><td class="about-table__td">てんびん座</td>
        </tr>
        <tr class="about-table__tr">
          <th class="about-table__th">
            <span class="about-table__th-txt">出身地</span>
          </th><td class="about-table__td">愛媛県</td>
        </tr>
        <tr class="about-table__tr">
          <th class="about-table__th">
            <span class="about-table__th-txt">趣味</span>
          </th><td class="about-table__td">書店に行くこと</td>
        </tr>
        <tr class="about-table__tr">
          <th class="about-table__th">
            <span class="about-table__th-txt">好きなスポーツ</span>
          </th><td class="about-table__td">サッカー</td>
        </tr>
        <tr class="about-table__tr">
          <th class="about-table__th">
            <span class="about-table__th-txt">メールアドレス</span>
          </th><td class="about-table__td">
            <a href="mailto:sumikawa.web@gmail.com" target="_blank" rel="noopener">sumikawa.web@gmail.com</a>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.about{
}
.about__ttl {
  margin: 20px;
  font-size: 32px;
}
.about-table {
  width: 80%;
  margin: 0 auto;
}
.about-table__tbody {

}
.about-table__tr {
}
.about-table__th {
  position: relative;
  width: 150px;
  font-weight: bold;
  background-color: #ddd;
  box-shadow: 0 0 4px #000;
}
.about-table__th::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom: 1px solid #222;
  width: 105%;
  transform: rotate(-18deg);
  transform-origin: left;
}
.about-table__th::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom: 1px solid #222;
  width: 105%;
  transform: rotate(18deg);
  transform-origin: right;
}
.about-table__th-txt {
  position: relative;
  padding: 5px 10px;
  color: #222;
  background-color: #fff;
  border-radius: 4px;
  z-index: 1;
}
.about-table__td {
  position: relative;
}
.about-table__th, .about-table__td {
  padding: 20px 10px;
  text-align: center;
  border: 1px solid #000;
  border-collapse: collapse;
}
@media screen and (max-width: 650px) {
  .about-table__th {
    width: auto;
    text-align: left;
    box-shadow: none;
  }
  .about-table__th-txt {
    margin-left: 20px;
  }
  .about-table__th, .about-table__td {
    display: block;
  }
  .about-table__th::before, .about-table__th::after {
    content: none;
  }
}
</style>
