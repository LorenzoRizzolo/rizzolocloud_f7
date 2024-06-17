<Page name={page.name}>

  <Block>
    <center>
      <h1 style="margin-bottom: 0;" class="title_font">Rizzolo Cloud</h1>
      <h2 class="title_font margin_0">Contatti</h2>
    </center>
  </Block>

  <Block strong inset class="pc_center pc_l_width">
    <BlockTitle>Come contattarci</BlockTitle>
    Per chidere maggiori informazioni su RizzoloCloud utilizza uno dei metodi qui sotto per contattarci e parlare con un esperto.
  </Block>

  <List strong inset class="pc_center pc_l_width">

    <ListItem>
      <Icon material="email"/>
      lorenzorizzolo@rizzolo.cloud
      <Button 
        tonal
        on:click={()=>{
          var copyText = "lorenzorizzolo@rizzolo.cloud";
          navigator.clipboard.writeText(copyText);
          let t = f7.toast.create({
            text: "Ho copiato la email nei tuoi appunti",
            icon:'<i class="material-icons">check</i>',
            position: 'center',
            closeTimeout: 3000,
          }); t.open();
        }}><Icon material="content_copy"/></Button>
    </ListItem>

    <ListItem>
      <Icon material="phone"/>
      3465133790
      <Button 
        tonal
        on:click={()=>{
          var copyText = "3465133790";
          navigator.clipboard.writeText(copyText);
          let t = f7.toast.create({
            text: "Ho copiato il numero nei tuoi appunti",
            icon:'<i class="material-icons">check</i>',
            position: 'center',
            closeTimeout: 3000,
          }); t.open();
        }}><Icon material="content_copy"/></Button>
    </ListItem>

  </List>


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