<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
      persistent
      @click:outside="closePopup"
    >
      <v-card v-if="packageDetailData">
        <v-card-title class="text-h5 grey lighten-2">
          {{ name }}
        </v-card-title>

        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>{{ type }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>Tags</v-list-item-title>
                <v-list-item-subtitle>
                   <v-chip
                        class="ma-1"
                        color="primary"
                        small
                         v-for="(value, index) in packageDetailData.tags" 
                        :key="index"
                    >
                        {{ value }} 
                    </v-chip>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>Versions</v-list-item-title>
                <v-list-item-subtitle>
                    <v-chip
                        class="ma-1"
                        color="primary"
                        small
                         v-for="(value, index) in packageDetailData.versions" 
                        :key="index"
                    >
                        {{ value }} 
                    </v-chip>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="closePopup"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-else>
        <v-skeleton-loader
          type="list-item-two-line"
        ></v-skeleton-loader>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapGetters, mapActions  } from 'vuex'

  export default {
    data () {
      return {
        dialog: false
      }
    },
    props: {
      popupStatus: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: ''
      }
    },
    methods: {
        ...mapActions('packages', ['fetchPackageDetail']),
        closePopup() {
            this.$emit('closePopup', {
                dialog: false
            })
        }
    },
    watch: {
        popupStatus: function (newValue, oldValue) {
            this.dialog = newValue
            if (this.dialog && newValue != oldValue) {
                this.fetchPackageDetail([this.type, this.name])
            }
        }
    },
    computed: {
        ...mapGetters('packages', ['packageDetailData'])
    }
  }
</script>