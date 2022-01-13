<template>
    <v-container class="ms-container">
        <v-row v-if="!pendingStatus" class="packagesList">
            <v-col 
                md="4" 
                sm="6" 
                cols="6"
                v-for="item in packages" 
                :key="item.name"  
                @click="openPopup(item)"
            >
                <PackageItem :name="item.name" :type="item.type" />
            </v-col>
        </v-row>   
        <v-row v-else>
            <v-col 
                md="4" 
                sm="6" 
                cols="6"
                v-for="(el, index) in 7"
                :key="index"
            >
                <v-skeleton-loader type="card"></v-skeleton-loader>
            </v-col>
        </v-row>
        <PackagePagination :pages="pages" /> 
        <PackageDetailPopup :popupStatus="popupStatus" :name="popupItemName" :type="popupItemType" @closePopup="closePopup" />
    </v-container>
</template>

<script>
import { mapGetters, mapActions  } from 'vuex';

export default {
    data() {
        return {
            filteredPackages: [],
            page: 1,
            pages: 9,
            limit: 10,
            packages: [],
            popupStatus: false,
            popupItemName: '',
            popupItemType: ''
        }
    },
    components: {
        PackageItem: () => import('./PackageItem.vue'),
        PackagePagination: () => import('./PackagePagination.vue'),
        PackageDetailPopup: () => import('./PackageDetailPopup.vue')
    },
    methods: {
        ...mapActions('packages', ['fetchPackageList']),
        filterPackages(value) {
            this.filteredPackages = this.packagesList.filter(el => {
                return el.name.indexOf(value) > -1 || el.type.indexOf(value) > -1
            })
            this.page = 1
            this.packages = this.filteredPackages
        },
        packageDivider() {
            if (this.filteredPackages.length > 10) {
                let paginateResult = this.paginate(this.filteredPackages, this.limit)
                this.pages = paginateResult.length - 1
                this.packages = paginateResult[this.page]
            } else {
                this.pages = 1
            }
        },
        paginate (arr, size) {
            return arr.reduce((acc, val, i) => {
                let idx = Math.floor(i / size)
                let page = acc[idx] || (acc[idx] = [])
                page.push(val)

                return acc
            }, [])
        },
        closePopup() {
            this.popupStatus = false
        },
        openPopup(item) {
            this.popupStatus = true
            this.popupItemName = item.name
            this.popupItemType = item.type
        }
    },
    computed: {
        ...mapGetters('packages', ['packagesList']),
        ...mapGetters('packages', ['pendingStatus']),
        ...mapGetters('packages', ['packagesPage']),
        ...mapGetters('search', ['getQuery'])
    },
    watch: {
        getQuery:  function (value) {
            this.filterPackages(value)
            this.packageDivider()   
        },
        pendingStatus: function (oldValue, newValue) {
            if (oldValue != newValue) {
                this.filteredPackages = this.packagesList
                this.packageDivider()
            }
        },
        packagesPage: function (oldValue, newValue) {
            if (oldValue != newValue) {
                this.page = this.packagesPage
                this.packageDivider()
            }
        },
    },
    mounted() {
        this.fetchPackageList()
        this.filteredPackages = this.packagesList
    }
}

</script>