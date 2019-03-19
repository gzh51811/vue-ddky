<template>
   <div class="footerBox">
        <div class="totalBox cl">
            <div class="totalPrice fl">
                <p>总计：￥0.00</p>
               <!--  <span>金额：￥0.00</span>
                <span>优惠：￥-0.00</span> -->
            </div>
            <p class="settle fr">结算(0)</p>
        </div>
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
    .footerBox{
        position: fixed;
        bottom:50px;
        width: 100%;
        height: 60px;
        background: #fff;
        border:1px solid  #ccc;
        line-height: 60px;
        color:#E94544 ;
    }
    .settle{
        display: inline-block;
        height: 60px;
        width: 30%;       
        background:#E94544; 
        color: #fff;
        line-height: 60px;
        text-align: center;
    }
</style>