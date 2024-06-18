<Panel left reveal={!mobile()} dark visibleBreakpoint={960}>
    <View>
      <Page>
        <Navbar>
          <NavLeft>
            <img src="/icons/favicon.png" alt="">
          </NavLeft>
        </Navbar>
        <List strong inset>
          {#each pages.filter(item=>item.path!="(.*)") as p}
            <div class="item">
              <ListItem tabLink link={p.path} view=".view-main" panelClose>
                <div class="item-title">
                  <Icon material={p.icon}/>
                  {p.name}
                </div>
              </ListItem>
            </div>
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
        Icon,
        ListItem
    } from "framework7-svelte";
    import { mobile } from "../js/functions";
    import pages from "../js/routes"
</script>

<style>
  .item{
    
  }
</style>