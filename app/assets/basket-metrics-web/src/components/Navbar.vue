<template>
  <nav>
    <v-toolbar app dark class="indigo">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Basket</span>
        <span>Metrics</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <span>Sair</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app>
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar-5.png" alt="">
          </v-avatar>
          <p class="subheading mt-1">
            Basket Metrics
          </p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Início", route: "/" },
        { icon: "ac_unit", text: "Minhas Partidas", route: "/partidas" },
        { icon: "group", text: "Times", route: "/times" }
      ]
    };
  }
};
</script>

<style>
</style>
