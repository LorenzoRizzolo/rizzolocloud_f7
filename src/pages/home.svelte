<Page name={page.name}>

  <Block>
    <center>
      <h1 class="title_font">Rizzolo Cloud</h1>
    </center>
  </Block>

  <Block strong inset class="pc_center pc_l_width">
    <BlockTitle>Cos'è RizzoloCloud?</BlockTitle>
    RizzoloCloud aiuta le aziende a creare portali tecnologici, all'avanguardia e funzionali utilizzando le tecnologie più recenti e sfruttando
    la potenza e la comodità di un'infrastruttura totalmente cloud.
  </Block>

  <Block strong inset class="pc_center pc_l_width">
    <BlockTitle>Come posso richiedere una consulenza?</BlockTitle>
    Hai in mente un progetto informatico ? RizzoloCloud è qui per te, per renderti la vita più semplice è veloce. Inviaci una mail al seguente indirizzo 
    <a on:click={()=>{
      let t = f7.toast.create({
        text: "Sto aprendo le email",
        icon:'<i class="material-icons">check</i>',
        position: 'center',
        closeTimeout: 3000,
      }); t.open();
    }} href="mailto:lorenzorizzolo@rizzolo.cloud" class="external">lorenzorizzolo@rizzolo.cloud</a> e descrivici brevemente ciò di cui hai bisogno.
    In caso di necessità potrai utilizzare un numero di telefono 
    <div class="link" on:click={()=>{
      var copyText = "3465133790";
      navigator.clipboard.writeText(copyText);
      let t = f7.toast.create({
        text: "Ho copiato il numero nei tuoi appunti",
        icon:'<i class="material-icons">check</i>',
        position: 'center',
        closeTimeout: 3000,
      }); t.open();
    }}>3465133790</div>.
    
    <BlockFooter>
      <Button on:click={()=>{f7.views.main.router.navigate("/contatti/"); $current_page="/contatti/"}} tonal class="my_button">Contatti <Icon material="keyboard_arrow_right"/></Button>
    </BlockFooter>
  </Block>

  <Block strong inset class="pc_center pc_l_width">
    <BlockTitle>Quali vantaggi mi offre RizzoloCloud?</BlockTitle>
    RizzoloCloud ti offre le tecnologie Web più moderne e accessibili, il supporto in cloud, applicazioni per mobile, tablet, pc e web. 
    Avrai sempre tutto a portata di mano ovunque ti trovi e con assistenza sempre presente.
  </Block>

  <Block strong inset class="pc_center pc_l_width">
    <BlockTitle>Cos'è il cloud e quali vantaggi mi offre?</BlockTitle>
    Il cloud è un concetto dove tutte le informazioni sono immagazzinate al di fuori della struttura fisica lavorativa e accessibili ovunque du voglia. 
    RizzoloCloud per i propri servizi e clienti si appoggia ad AWS, servizio che ti permette di sfruttare tutta la potenza del cloud a costi contenuti e 
    con maggior rapidità. Il cloud offre numerosi vantaggi come non dover progettare e studiare un'infrastruttura fisica che richiederebbe moltissimo tempo e 
    denaro, inoltre offre già diverse disposizioni molto utili nello sviluppo e quindi permette una maggior rapidità nella creazione di applicazioni.
  </Block>


</Page>
<script>
  import {
    Page,
    Navbar,
    NavLeft,
    NavRight,
    NavTitle,
    Icon,
    Block,
    BlockFooter,
    BlockTitle,
    Link,
    Button,
    f7
  } from 'framework7-svelte';
  import { mobile } from "../js/functions"
  import pages from "../js/routes"
  import { page as current_page } from '../js/store';

  let page = {
    name:"Home",
    path:"/"
  }

</script>

<style>
</style>