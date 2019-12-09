<template>
  <div>
    <p>This is Test2Component</p>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Test2 extends Vue {
  test2 = 'test2';
}
</script>