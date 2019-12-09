<template>
  <div>
    <p>This is Test2Layout</p>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Test2Layout extends Vue {}
</script>