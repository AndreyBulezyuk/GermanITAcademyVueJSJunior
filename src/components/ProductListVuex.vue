<template>
    <div class="container">
        <div class="alert alert-primary mb-4" role="alert">
            <h5>4: Vuex Store</h5>
            <small>
                <a href="https://git-academy.com">German IT Academy</a>
            </small>
        </div>

        <hr>
         <div class="row">
            <div v-for="(product, key) in this.products" class="card" :key="key" style="width:33%">
                <img v-bind:src="product.imgUrl" class="card-img-top" alt="">
                
                <div class="card-body">
                    
                    <router-link :to="'/productDetail/' + key" >
                        <h4 class="card-title">{{ product.name }}</h4>
                    </router-link>

                    <span v-if="product.sale">
                        <div class="alert alert-primary mb-2" role="alert">
                            This product is on Sale!
                        </div>
                    </span>
                    
                    <span v-else-if="product.supersale">
                        <div class="alert alert-danger mb-2" role="alert">
                            This product is on SUPER Sale!
                        </div>
                    </span>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    

                </div>
            </div>
         </div>

    </div>
</template>

<script>
export default {
    name: "ProductListVuex",
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