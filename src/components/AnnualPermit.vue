<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card prepend-icon="mdi-home" title="Card title">
          <v-container>
            <v-row justify="space-between">
              <v-col> Kalan</v-col>
              <v-col class="text-right"> Kullanılan</v-col>
            </v-row>
            <v-row justify="space-between">
              <v-col>
                <h1 class="text-blue">365 gün</h1>
              </v-col>
              <v-col class="text-right">
                <h1>0 gün</h1>
              </v-col>
            </v-row>
            <v-row>
              <v-col>Son İzinlerim:</v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-icon icon="mdi-check" size="x-large" color="green"></v-icon>
                13 Tem 2022(Yıllık izin)
              </v-col>
              <v-col class="text-right">
                <v-btn icon color="primary">
                  <v-icon>mdi-cached</v-icon>

                  <v-menu activator="parent">
                    <v-list>
                      <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        :value="index"
                      >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-icon icon="mdi-check" size="x-large" color="green"></v-icon>
                13 Tem 2022(Yıllık izin)
              </v-col>
              <v-col class="text-right">
                <v-btn icon color="primary">
                  <v-icon>mdi-cached</v-icon>

                  <v-menu activator="parent">
                    <v-list>
                      <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        :value="index"
                      >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-container>
              <v-row justify="end">
                <v-btn>İzinlerim</v-btn>
              </v-row>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: [{ title: "Detayları görüntüle" }, { title: "İptal et" }],
  }),
};
</script>
