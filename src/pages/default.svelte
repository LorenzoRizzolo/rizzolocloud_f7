<Page name={page.name}>
    <Navbar>
      <NavLeft>
        <center>
          <img src="/icons/favicon.png" alt="logo">
        </center>
      </NavLeft>
      <NavRight>
        {#if mobile()}
          <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
        {:else}
  
          {#each pages.filter(item=>item.path!=page.path && item.path!="(.*)") as p}
            <div class="route" on:click={()=>{f7.views.main.router.navigate(p.path)}}>
              {p.name}
            </div>
          {/each}
  
        {/if}
      </NavRight>
    </Navbar>
  
    <Block>
      <center>
        <h1 class="title_font">Rizzolo Cloud</h1>
      </center>
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
      name:"",
      path:"//"
    }
  
  </script>
  
  <style>
  </style>