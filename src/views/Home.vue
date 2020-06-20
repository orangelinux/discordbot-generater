<style lang="scss">
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    /*align-items: center;*/
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .app {
    color: #2c3e50;
    text-align: center;
  }
  h1, h2 {
    font-weight: normal;
    margin: 16px 0;
  }
</style>

<template>
  <div class="container" id="app">

    <div class="app">
      <img src="../assets/logo.png">
      
      <h1>Discordbotジェネレーター</h1>
        <at-steps :current="count" class="l_steps">
        <at-step title="[name]とは？"></at-step>
        <at-step title="使用方法"></at-step>
        <at-step title="免責事項"></at-step>
        <at-step title="準備はできましたか？"></at-step>
      </at-steps>
      
      <div class="steps-content" style="margin-top: 16px; border: 1px solid #e9e9e9; border-radius: 6px;background-color: #fafafa; min-height: 200px; text-align: center; padding-top:20px;">
      <!--ここでエラー-->
      <div v-html="contentnow"></div>
</div>
  <div style="margin-top: 10px;">
      <at-button v-if="count < 3" size="large" @click="nextslide" icon="icon-chevron-right" type="primary">次へ</at-button>
      <at-button v-if="count > 2 && !AT" size="large" @click="ATmodal" icon="icon-play" type="primary">アクセストークンを入力</at-button>
      <at-button v-if="count > 2 && AT" size="large" @click="jump" icon="icon-play" type="primary">はじめる</at-button>
  </div>

  </div>

<footer-v></footer-v>
  </div>
</template>

<script>
import footer from '../components/footer.vue';
export default {
  name:'Home',
  props:{
  },
  components:{
    'footer-v': footer,
  },
  data: function () {
  return {
    content:Array,
    contentnow: String,
    count: 0,
    AT: false
  }},
  methods: {
    handleClick () {
      this.$Message('It works! We believe that you can save your time with AT-UI.')
    },
    nextslide () {
     this.count++;
     this.contentnow = this.content[this.count];
     if(this.count == 3){
      this.ATmodal();
     }
    },
    jump () {
      this.$router.push({ name: 'generater', params: { AT: this.AT } })
    },
    ATmodal () {
        this.$Modal.prompt({
          title: 'アクセストークンを入力してください。',
          content: 'アクセストークンはDeveloper.discord.comで取得できます。'
        }).then((data) => {
          console.log(data.value);
          if(data.value){
          this.AT = data.value;
          this.jump();
          } else {
          this.$Message('アクセストークンが入力されませんでした。下のアクセストークンを入力ボタンを押すと、再度ポップアップが表示されます。');
          }
        }).catch(() => {
          this.$Message('アクセストークンが入力されませんでした。下のアクセストークンを入力ボタンを押すと、再度ポップアップが表示されます。')
        })
      }
  },
  created(){
    this.content = [
      `<p>[name]は,Discordbotのコードを簡単に生成できるジェネレーターです。
      登録なしで使用可能で、プログラムの知識が無くてもdiscordbotを作成することができます。</p>
      <p>下の 次へ ボタンを押すと、簡単な使用方法が表示されます。</p>`,
      `3`,
      `<h2>免責事項に同意する場合、次へボタンを押してください。</h2>
      <div style="height: 100px; overflow: auto;">
      (1)　利用者は、本免責事項に同意頂いた上で、本サービスを利用できるものとします。
      (2)　利用者の承諾を得ることなく、いつでも、本免責事項の内容を改定することができるものとし、利用者はこれを異議なく承諾するものとします。
      (3)　本サービスの利用に際し、利用者に対し、次に掲げる行為を禁止します。禁止事項に違反したと認められる場合、利用の一時停止、その他運営者が必要と判断した措置を取ることができます。
      　(1)　知的財産権を侵害する行為
      　(2)　第三者の名誉・信用を毀損または不当に差別もしくは誹謗中傷する行為
      　(3)　上記の他、不適切と判断する行為
      <h3>生成されたコードに対する信頼性や、使用により発生した損害等の責任は使用者が各自で追うものとします。</h3>
      </div>
      `,
      `<p>アクセストークンをお持ちの場合は、次へ進んでください。</p>
      <p>アクセストークンをお持ちでない場合は、Developer.Discord.comから無料で発行できます。[参考リンク]</p>`,
    ];
    this.contentnow = this.content[this.count];
  }
}
</script>