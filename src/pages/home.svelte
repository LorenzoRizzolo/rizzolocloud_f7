<Page name="home">
  <!-- Top Navbar -->
  <Navbar>
    <NavLeft>
      <NavLeft>
        {#if mobile()}
          <center>
            <img src="/icons/favicon.png" alt="logo">
          </center>
        {/if}
      </NavLeft>
    </NavLeft>
    <NavRight>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavRight>
  </Navbar>

  <Block>
    <center>
      <h1 class="title_font">RizzoloCloud</h1>
    </center>
  </Block>

  <Block strong inset>
    <BlockTitle>Cos'è RizzoloCloud?</BlockTitle>
    RizzoloCloud aiuta le aziende a creare portali tecnologici, all'avanguardia e funzionali utilizzando le tecnologie più recenti e sfruttando
    la potenza e la comodità di un'infrastruttura totalmente cloud.
  </Block>

  <Block strong inset>
    <BlockTitle>Come posso richiedere una consulenza?</BlockTitle>
  </Block>

  <Block strong inset>
    <BlockTitle>Quali vantaggi mi offre RizzoloCloud?</BlockTitle>
  </Block>

  <Block strong inset>
    <BlockTitle>Cos'è il cloud e quali vantaggi mi offre?</BlockTitle>
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
    Link
  } from 'framework7-svelte';
  import { mobile } from "../js/functions"
</script>

<style>
</style>