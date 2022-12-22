<template>
  <v-navigation-drawer v-model="drawer">
    <div class="d-flex justify-center">
      <v-list-item class="py-10" title="Logo"> </v-list-item>
    </div>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-city"
        title="Home"
        value="home"
      ></v-list-item>
      <v-list-item
        @click="this.$route.push('/profile')"
        prepend-icon="mdi-account"
        title="My Account"
        value="account"
      ></v-list-item>
      <v-list-item
        @click="this.$route.push('/home')"
        prepend-icon="mdi-account-group-outline"
        title="Users"
        value="users"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Merhaba Ümit</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn
      :prepend-icon="
        theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
      "
      @click="this.$emit('change-theme')"
      >Toggle Theme</v-btn
    >
  </v-app-bar>
</template>
<script>
export default {
  emits: ["change-theme"],
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      theme: "light",
    };
  },
};
</script>
