<Page name={page.name}>

  <Block>
    <center>
      <h1 style="margin-bottom: 0;" class="title_font">Rizzolo Cloud</h1>
      <h2 class="title_font margin_0">Contatti</h2>
    </center>
  </Block>

  <Block strong inset class="pc_center pc_l_width">
    <BlockTitle>Cos'è RizzoloCloud?</BlockTitle>
    RizzoloCloud aiuta le aziende a creare portali tecnologici, all'avanguardia e funzionali utilizzando le tecnologie più recenti e sfruttando
    la potenza e la comodità di un'infrastruttura totalmente cloud.
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
    f7
  } from 'framework7-svelte';
  import { mobile } from "../js/functions"
  import pages from "../js/routes"

  let page = {
    name:"contatti",
    path:"/contatti/"
  }
</script>

<style>
</style>