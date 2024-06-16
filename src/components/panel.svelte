<Panel left reveal={!mobile()} dark visibleBreakpoint={960}>
    <View>
      <Page>
        <Navbar>
          <NavLeft>
            <img src="/icons/favicon.png" alt="">
          </NavLeft>
        </Navbar>
        <List>
          {#each pages.filter(item=>item.path!="(.*)") as p}
            <ListItem tabLink link={p.path} title={p.name} view=".view-main" panelClose/>
          {/each}
        </List>
      </Page>
    </View>
  </Panel>

<script>
    import { 
        Panel, 
        View,
        NavLeft,
        Page,
        Navbar,
        List,
        ListItem
    } from "framework7-svelte";
    import { mobile } from "../js/functions";
    import pages from "../js/routes"
</script>