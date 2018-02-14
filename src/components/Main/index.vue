<template>
    <div class="rm-main">
        <div class="rm-main-left">
            <main-left></main-left>
        </div>
        <div class="rm-main-right">
            <main-right></main-right>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Left from './Left';
    import Right from './Right';

    Vue.component('main-left', Left);
    Vue.component('main-right', Right);
    export default {
        data() {
            return {};
        }
    };
</script>

<style lang="less" scoped>
    .rm-main {
        display: flex;
        .rm-main-left {
            flex: 0.25;
            padding: 30px 35px;
            overflow: hidden;
            background: #eeeeee;
        }
        .rm-main-right {
            flex: 0.8;
            padding: 30px 35px;
            padding-bottom: 0;
            overflow: hidden;
        }
    }
</style>
