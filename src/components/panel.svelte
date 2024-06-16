<Panel left dark visibleBreakpoint={960}>
    <View>
      <Page>
        <Navbar>
          <NavLeft>
            <img src="/icons/favicon.png" alt="">
          </NavLeft>
        </Navbar>
        <BlockTitle>Pages</BlockTitle>
        <List>
          <ListItem link title="Left Page 1"/>
          <ListItem link title="Left Page 2"/>
        </List>
      </Page>
    </View>
  </Panel>

<script>
    import { 
        Panel, 
        View,
        NavLeft,
        Link,
        Page,
        BlockTitle,
        Navbar,
        List,
        ListItem
    } from "framework7-svelte";
</script>