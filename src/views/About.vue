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

<style lang="scss" scoped>
.about{
  position: relative;
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: linear-gradient(15deg,#fff 50%, #222 50%);
    z-index: -1;
  }
  &__ttl {
    padding: 20px;
    font-size: 32px;
    letter-spacing: 5px;
  }
  &-table {
    width: 80%;
    margin: 0 auto 50px;
    background-color: #fff;
    &__th {
      position: relative;
      width: 150px;
      font-weight: bold;
      background-color: #ddd;
      box-shadow: 0 0 4px #000;
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 1px solid #222;
        width: 105%;
        transform: rotate(-18deg);
        transform-origin: left;
      }
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-bottom: 1px solid #222;
        width: 105%;
        transform: rotate(18deg);
        transform-origin: right;
      }
      &-txt {
        position: relative;
        padding: 5px 10px;
        color: #222;
        background-color: #fff;
        border-radius: 4px;
        z-index: 1;
      }
    }
    &__td {
      position: relative;
      text-align: center;
    }
    &__th, &__td {
      padding: 20px 10px;
      border: 5px solid #dcdcdc;
      border-collapse: collapse;
    }
  }
}

@media screen and (max-width: 650px) {
  .about-table__th {
    width: auto;
    text-align: left;
    box-shadow: none;
    background-color: #000;
  }
  .about-table__th-txt {
    position: relative;
    margin-left: 20px;
    background-color: transparent;
    color: #fff;
  }
  .about-table__th-txt::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: -30px;
    width: 30px;
    border-bottom: 1px solid #fff;
  }
  .about-table__th, .about-table__td {
    display: block;
    border: 1px solid #000;
  }
  .about-table__th::before, .about-table__th::after {
    content: none;
  }
}
</style>
