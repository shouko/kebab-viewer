<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="true"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="true"
      :dense="true"
      :hide-on-scroll="false"
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chat-processing-outline',
          title: 'Messages',
          to: '/messages'
        },
        {
          icon: 'mdi-wrench-outline',
          title: 'Settings',
          to: '/settings'
        },
        {
          icon: 'mdi-information-outline',
          title: 'About',
          to: '/about'
        }
      ],
      right: true,
      rightDrawer: false,
      title: '🥙'
    }
  }
}
</script>
