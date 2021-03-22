<!--
 * @Author: your name
 * @Date: 2021-03-22 11:40:06
 * @LastEditTime: 2021-03-22 14:21:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/Home.vue
-->
<template>
  <div class="home">
    <HelloWorld msg="hhh" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { Component } from "vue-property-decorator";

@Component({
  components: { HelloWorld },
})
export default class Home extends Vue {}
</script>
