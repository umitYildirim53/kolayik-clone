<template>
  <v-app :theme="theme">
    <sidebar @change-theme="changeTheme"> </sidebar>

    <v-main> <router-view></router-view></v-main>
  </v-app>
</template>
<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    changeTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      localStorage.theme = this.theme;
    },
  },
  mounted() {
    if (localStorage.theme) {
      this.theme = localStorage.theme;
    }
  },
};
</script>
