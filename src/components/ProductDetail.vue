<template>
        <!-- 1. Boostrap Card Component for Product Details -->
        <div class="container">
            <div class="alert alert-primary mb-4" role="alert">
                <h5>3: Instance Options and Properties</h5>
                <small>
                    <a href="https://git-academy.com">German IT Academy</a>
                </small>
            </div>

            <hr>
            <div class="row">
                <h5>Welcome {{ this.fullname }}!</h5>


                <div class="card" style="width:100%;">
                    <img src="" class="card-img-top" alt="">

                    <div class="card-body">


                        <!-- 2. Access a certain object in the array <products> and use the key <name>  -->
                        <h5 class="card-title">
                            {{ products[this.$route.params.productId].name }}
                        </h5>


                        <p class="card-text">
                            <!-- Use the key img in the products object to access the url of the image -->
                            <img :src="products[this.$route.params.productId].img" class="card-img-top" style="width:200px;"><br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>


                        <!-- Execute method to push an item to the <cart> array. Item = Product ID from the GET Param -->
                        <a @click="addItem($route.params.productId)" class="btn btn-primary" href="#">
                            Add to Cart
                        </a>
                    </div>
                </div>
                

                <div class="card border border-primary d-flex align-items-center" style="width:30%" id="myCartId">
                    <h5 class="card-header  p-3 mb-2 bg-primary text-white" style="width:100%">Your Cart</h5>


                    <!-- List all product in our cart -->
                    <div v-for="(item, key)  in this.cart" :key="key" class="card" style="width:70%;">


                        <!-- Access the products object by index and print the name -->
                        <h5 class="card-title">
                            {{ products[item].name }}
                        </h5>


                        <p class="card-text">
                            <!-- Use the key img in the products object to access the url of the image -->
                            <img :src="products[item].img" class="card-img-top" style="width:100px;"><br>
                            
                            {{ products[item].price }}$
                        </p>


                        <p class="card-actions">
                            <!-- Execute method to remove an item from the <cart> array -->
                            <a @click="removeItem(key)" class="btn btn-warning">Remove</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "ProductDetail",
    data() {
        return {
            firstname: "Andrey",
            lastname: "Bulezyuk",
            products: [
                {name:"T-Shirt Black", price: 100, img: 'https://bit.ly/2TJR5V1'},
                {name:"T-Shirt White", price: 120, img: 'https://bit.ly/2TJR5V1'},
                {name:"T-Shirt Green", price: 80, img: 'https://bit.ly/2TJR5V1'},
            ],
            cart: [],
            cartItems: 0
        }
    },
    computed: {
        fullname: {
            // Getter: Will be execute every time we retrieve the value of this computed property
            get() {
                return this.firstname + ' ' + this.lastname
            },
            // Setter: Will be executed every time we assing a value to this property
            set(value) {
                this.firstname = value.split(' ')[0]
                this.lastname = value.split(' ')[1]
            }
        }
    },
    methods: {
        // Simple methods that can be accessed inside <script> with thid.MethodName() and
        // inside <tempalte> with MethodName()
        addItem(itemIndex) {
            this.cart.push(itemIndex)
            this.cartItems =  this.cartItems + 1
        },
        removeItem(itemIndex) {
            this.cart.splice(itemIndex, 1)
            this.cartItems = this.cartItems -  1
        }
    },
    watch: {
        // Whenever the Cart changes (Item added or removed) we react to this change with a watcher
        cartItems: function(newValue, oldValue, b) {
            // New Iteam added to cart
            if (newValue > oldValue) {
                console.log("Item added to your cart. Good Choice.")
            
            // Item removed from cart
            } else {
                console.log("Item removed from your cart. There are plenty of alternatives.")
            }
        }
    },
    beforeCreate() {
        // Instance has not been created yet. We have no access to instance properties like data, methods, etc.
        try {
            this.addItem(1)
        } catch (e) {
            console.log(e)
        }
    },
    created() {
        // Instance created and thus we have access to methods, variables, properties, options, ...
        this.fullname = 'GermanIT Academy'
    },
    beforeMount() {
        // Instance is now created and available. It is not mounted to the #el yet. Thus have no access to 
        // DOM Elements generated by VueJS
        // Try to find the div tag where we display our Cart.
        console.log(window.document.getElementById('myCartId')) // Return null

    },
    mounted() {
        // Instance has been generated and mounted into the specified #el option.
        console.log(window.document.getElementById('myCartId')) // Returns the DOM Element
    },
    beforeUpdate() {
        console.log('VueInstance is about to be updated')
    },
    updated() {
        console.log("Vue Instance and it's Child Components have been re-rendered")
    }
}
</script>

<style scoped>

</style>