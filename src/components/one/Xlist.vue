<template>
 <div id="list">
     <listSearch></listSearch>
    <labelList></labelList>
    <listMail></listMail>
    <listCotent></listCotent>
 </div>
</template>
<script>
import listSearch from "../page/list_search.vue"
import labelList from "../page/Xlabel.vue"
import listMail from "../page/list_mail.vue"
import listCotent from "../page/list_content.vue"
export default {
  name: "Xlist",
  data() {
    return {};
  },
  components: {
      listSearch,
      labelList,
      listMail,
      listCotent
  }
};
</script>
