<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import http from "../services/http";

@Component({
  props: {
    msg: String,
  }
})
export default class HelloWorld extends Vue {

  public mounted(): void {
    this.initData()
  }

  initData(): void {
    // const _this: any = this;
    http.getMethod("/api/v2/repos/httishere/blog/docs", {
        limit: 10,
        offset: 0,
    }).then((res: any) => {
      console.log(res)
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
