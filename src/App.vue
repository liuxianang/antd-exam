<template>
    <a-locale-provider :locale="locale">
    <div id="app">
        <router-view></router-view>
    </div>
    </a-locale-provider>
</template>

<script>
    import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
    export default {
        name: 'app',
        data () {
            return {
                locale: zhCN
            }
        },
    }
</script>

<style>
    #app {
        height: 100%;
        width:100%;
        background: #f0f2f5;

    }
</style>
