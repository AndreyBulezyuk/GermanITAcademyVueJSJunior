<template>
    <div class="container">
        <!--#5 Parent Child Components - German IT Academy - www.git-academy.com -->
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">
                    
                    <!-- Use the key img in the products object to access the url of the image -->
                    <img :src="products[productId].imgUrl" class="card-img-top" style="width:200px;"><br>
                   
                </h5>
                <p class="card-text">
                    <h3>{{ products[productId].name }}</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <!-- Execute method to push an item to the <cart> array. Item = Product ID from the GET Param -->
                <button class="btn btn-primary" href="#">
                    Add to Cart
                </button>
                <p style="color: #bbbbbb;">
                    <!-- The Content that was placed between the Child Component Tag <product-box> wil be
                    displayed by the <slot> tag. -->
                    <slot></slot>
                </p>
            </div>
            <button @click="$emit('DeleteItem', productId)">Emit Event</button>
        </div>

        <!-- Global Component that we import globally in main.js. It is accessible from every Part of our App -->
        <blog-post :post="{title:'Global Component', content: 'Component Text'}"/>
        <hr>
    </div>
</template>

<script>
export default {
    name: "ProductBoxParentChild",
    // Parameters that this Component will expect from the Parent/Importer.
    props: ['productId', 'someDataName'],
    mounted() {
        console.log(this.someDataName)
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