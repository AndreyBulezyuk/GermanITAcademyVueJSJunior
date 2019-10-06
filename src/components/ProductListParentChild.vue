<template>
    <div class="container">
         <!-- #5 Parent Child Components - German IT Academy - www.git-academy.com -->
        <div class="alert alert-primary mb-4" role="alert">
            <h5>5: Parent Child Components</h5>
            <small>
                <a href="https://git-academy.com">German IT Academy</a>
            </small>
        </div>


        <hr>
        <h5 style="position:center;">Every Product Item is a Child Component</h5>


        <div class="row">
             <!-- Same v-for loop as previously discussed. Only this time the array with products is stored
             in the centralized vuex-store.  -->
            <div v-for="(product, key) in this.products" class="card" :key="key" style="width:33%">
                <product-box @DeleteItem="handleEvent" :someDataName="someObject" :productId="key">
                    <hr>
                    <h6>Note: This Product is new!</h6>
                    <hr>
                </product-box>
            </div>
         </div>
        <hr>


        <!-- Global Component that we import globally in main.js. It is accessible from every Part of our App -->
        <blog-post :post="{title:'Global Component', content: 'Component Text'}"/>
    </div>
</template>

<script>
// Import the Components (Child-Component)
import ProductBoxParentChild from './products/ProductBoxParentChild'

export default {
    name: "ProductListParentChild",
    // specify the Child-Components that should be imported into this Component
    // You can access the Child Component trough this.$children 
    // You can also access the Child Component in <template> with <product-box>.
    components: {
        'product-box' : ProductBoxParentChild,

    },
    methods: {
        handleEvent(payload) {
            console.log('Event incoming')
            console.log(payload)
        }
    },
    data(){
        return {
            someObject: {
                key1: 'value1',
                key2: 'value2'
            }
        }
    },
    computed: {
        products: {
            get() {
                // Retrieve store state directly. Alternative: Retrieve the value via vuex getter
                return this.$store.getters.allProducts
            },
            set(value) {
                this.$store.dispatch('addProduct', value)
            }
        }
    }
}
</script>