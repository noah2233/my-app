<template>
  <p>This is Test1Component</p>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Test1 extends Vue {
  test1 = 'test1';
}
</script>