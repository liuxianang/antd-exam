<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">

        <a-layout-header style="background: #fff; padding: 0" >
            <div class="headBack">
                    <!-- pc端导航 -->
                    <a-menu style="background-color: #ffffff"
                            :default-active="activeIndex"
                            mode="horizontal"
                            active-text-color="#409EFF">
                        <a-menu-item index="1"> <router-link to="/index">首页</router-link></a-menu-item>
                        <a-menu-item index="2" style="float: right"> <a href="http://114.115.178.160:8100/">登录后台 </a></a-menu-item>
                        <a-menu-item index="5" style="float: right">  <a href="http://114.115.178.160:8200/">在线考试 </a></a-menu-item>
                        <a-menu-item index="4" style="float: right">  <a href="http://114.115.178.160:8400/">在线商城 </a></a-menu-item>
                        <a-menu-item index="3" style="float: right">  <a href="http://114.115.178.160:8300/">我的博客 </a></a-menu-item>


                    </a-menu>



            </div>
        </a-layout-header>
            <a-layout-content style="margin: 10px 10px">
                <router-view></router-view>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>

</template>
<script>

    export default {
        components: {

        },
        data() {
            const panes = [
                { title: '主页', content: '/Home', key: 'Home' ,closable: false},
            ];
            return {
                activeKey: panes[0].key,
                panes,
                nickname:'',
                menus: [],
                newTabIndex: 0,
                collapsed: false,
            };
        },
        methods: {
            logout() {
               alert("退出登录")
            }
        },
        created(){

            this.$router.push("/index/main"); //用go刷新


        },
    };
</script>

<style lang="less" >
    #components-layout-demo-side .logo {
        height: 32px;
        background: #002140;
        margin: 16px;
    }
 .user-wrapper {
        float: right;
        height: 100%;

        .action {
            cursor: pointer;
            padding: 0 12px;
            display: inline-block;
            transition: all 0.3s;
            height: 100%;
            color: rgba(0, 0, 0, 0.65);

            &:hover {
                background: rgba(0, 0, 0, 0.025);
            }

            .avatar {
                margin: 20px 8px 20px 0;
                color: #1890ff;
                background: hsla(0, 0%, 100%, 0.85);
                vertical-align: middle;
            }

            .icon {
                font-size: 16px;
                padding: 4px;
            }
        }
    }


</style>
