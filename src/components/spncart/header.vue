<template>
    <div>
        <header>
            <span class="bianji-txt">编辑</span>
            <h1 class="title">清单列表</h1>
        </header>
    </div>
</template>
<script type="text/javascript">
     export default{
        data(){
            return{};
        },
     }
</script>
<style type="text/css">
    /*头部的样式开始*/
header {
    height: 35px;
    padding: 0 10px;
    background-color: #FFf;
    border-bottom: 1px solid #CBCBCB;
    position: relative;
}
header>.bianji-txt {
    position: absolute;
    font-size: 12px;
    right: 10px;
    top: 0;
}
header>.bianji-txt, header>h1 {
    color: #333;
}
header>h1 {
    font-size: 15px;
    text-align: center;
    font-weight: 400;
}

/*头部的样式结束*/
</style>