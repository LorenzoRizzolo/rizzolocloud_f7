<Page name={page.name}>

  <Block>
    <center>
      <h1 style="margin-bottom: 0;" class="title_font">Rizzolo Cloud</h1>
      <h2 class="title_font margin_0">titolo</h2>
    </center>
  </Block>

  <Block strong inset class="pc_center pc_l_width">
    <BlockTitle>titolo</BlockTitle>
    testo
  </Block>



</Page>
<script>
  import {
    Page,
    Navbar,
    NavLeft,
    NavRight,
    NavTitle,
    Block,
    BlockTitle,
    Link,
    List,
    Icon,
    ListItem,
    Button,
    f7
  } from 'framework7-svelte';

  let page = {
    name:"contatti",
    path:"/contatti/"
  }
</script>

<style>
</style>