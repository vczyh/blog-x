<template>
  <div>
    <v-btn
      outlined
      depressed
      @click="dialog = true">封面设置
    </v-btn>
    <v-dialog
      style="z-index: 10000"
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <!--      <template v-slot:activator="{ on, attrs }">-->
      <!--        <v-btn-->
      <!--          outlined-->
      <!--          depressed-->
      <!--          v-bind="attrs"-->
      <!--          v-on="on">封面设置-->
      <!--        </v-btn>-->
      <!--      </template>-->
      <v-card>
        <v-card-title>
          <span class="headline">封面设置</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="currentCover.url"
                  label="封面URL*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="currentCover.desc"
                  label="封面描述*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false">关闭
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="save">保存
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Cover',
  // url desc
  props: ['cover'],
  data() {
    return {
      dialog: false,
      currentCover: {
        url: this.cover.url,
        desc: this.cover.desc,
      },
    };
  },
  watch: {
    cover: {
      handler(val) {
        this.currentCover.url = val.url;
        this.currentCover.desc = val.desc;
      },
      deep: true,
    },
  },
  methods: {
    save() {
      this.$emit('save', this.currentCover);
      this.dialog = false;
    },
  },
};
</script>

<style scoped>

</style>
