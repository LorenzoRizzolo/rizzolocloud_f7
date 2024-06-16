<App { ...f7params }>

  {#if mobile()}
    <LeftPanel/>
  {/if}

  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/" />

</App>
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
    BlockTitle,
    List,
    ListItem
  } from 'framework7-svelte';
  import LeftPanel from './panel.svelte';
  import { mobile } from '../js/functions';

  import capacitorApp from '../js/capacitor-app';
  import routes from '../js/routes';
  import store from '../js/store';

  const device = getDevice();
  // Framework7 Parameters
  let f7params = {
    name: 'RizzoloCloud', // App name
    theme: 'auto', // Automatic theme detection
    colors: {
      primary: '#00dff1',
    },
    darkMode: true,

    // App store
    store: store,
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