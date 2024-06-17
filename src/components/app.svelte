<App { ...f7params }>
  <!-- Top Navbar -->

  {#if mobile()}
    <LeftPanel/>
  {/if}

  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/" >
    
    <Navbar>
      <NavLeft>
        <center>
          <img src="/icons/favicon.png" alt="logo">
        </center>
      </NavLeft>
        {#if !mobile()}
          <div class="routes">
            {#each pages.filter(item=>item.path!="(.*)" && item.path!=$page) as p}
              <div class="route" on:click={()=>{f7.views.main.router.navigate(p.path); $page=p.path}}>
                {p.name}
              </div>
            {/each}
          </div>
        {/if}
  
        <NavRight>
          {#if mobile()}
            <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
          {/if}
        </NavRight>
    </Navbar>
  
  </View>

</App>


<!-- background -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.globe.min.js"></script> -->

<script>
  import { onMount } from 'svelte';
  import { getDevice }  from 'framework7/lite-bundle';
  import {
    f7,
    f7ready,
    App,
    Panel,
    View,
    Page,
    Navbar,
    NavLeft,
    NavRight,
    Link,
    BlockTitle,
    List,
    ListItem
  } from 'framework7-svelte';
  import LeftPanel from './panel.svelte';
  import { mobile } from '../js/functions';
  import pages from "../js/routes"

  import capacitorApp from '../js/capacitor-app';
  import routes from '../js/routes';
  import { page } from "../js/store"

  const device = getDevice();
  // Framework7 Parameters
  let f7params = {
    name: 'RizzoloCloud', // App name
    theme: 'md', // Automatic theme detection
    colors: {
      primary: '#00ffdd',
    },
    darkMode: true,
    // App routes
    routes: routes,

    // Register service worker (only on production build)
    serviceWorker: process.env.NODE_ENV ==='production' ? {
      path: '/service-worker.js',
    } : {},
    // Input settings
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };
  
  onMount(() => {
    f7ready(() => {
      if (f7.device.capacitor) {
        capacitorApp.init(f7);
      }
    });
  })
</script>