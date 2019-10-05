<template>
    <div class="container">
        <div class="alert alert-primary mb-4" role="alert">
            <h5>6: Template Syntax</h5>
            <small>
                <a href="https://git-academy.com">German IT Academy</a>
            </small>
        </div>
        <div class="row">
            

            <!-- v-for directive. Looping trough an array. The <product> becomes a new variable that is avaiable
            only inside v-for div tag -->
            <div v-for="(product, key) in this.products" class="card" :key="key" style="width:33%">


                <!-- Inject a value from vue instance (like a data var or computed property) into an html attribute.  
                Syntax is "v-bind:attribute_name" in our case attribute_name = src -->
                <img v-bind:src="product.imgUrl" class="card-img-top" alt="">
                <hr>
                <div class="card-body">

                    <!-- :attribute_name is a shortcut for v-bind:attribute_name. In our case attribute_name = to -->
                    <router-link :to="'/productDetail/' + key">
                        <h4 class="card-title">{{ product.name }}</h4>
                    </router-link>
                    

                     <!-- if, if-else Conditions. Based on the condition whole DOM Elements will be rendered 
                    or left out of rendering completely. -->
                    <span v-if="product.sale">
                        <div class="alert alert-primary mb-2" role="alert">
                            This product is on Sale!
                        </div>
                    </span>
                    

                    <!-- a v-else or v-else-if directive must be placed immediatly after v-if tag -->
                    <span v-else-if="product.supersale">
                        <div class="alert alert-danger mb-2" role="alert">
                            This product is on SUPER Sale!
                        </div>
                    </span>


                    <!-- Replaces the TEXT or InnerHTML Part of the Tag with the content of Variable <html>
                    Following Line is the same as <p class="card-text">{{ html }}</p>  -->
                    <p class="card-text" v-text="html"></p>
                    

                    <!-- Important difference to v-text: HTML Tags are not escaped! -->
                    <p class="card-text" v-html="html"></p>
                    
                    
                        <!-- v-model is a directive for the so called "double way binding". Double way means that the data flows from vue
                        instance into the DOM Elements, and from DOM Elements (Users input and Activity) into the Vue Instance  -->
                        <input type="text" v-model="products[key].quantity" style="width:40px;margin: 10px 0 10px 10px">


                        <!-- v-on:event_name (shortcut: @event_name) ensures you can execute a predefined action 
                        whenever an event (like a mouseup, click or your custom event) occurs. -->
                        <input type="button" v-on:click="addToCart()" value="Add to Cart" class=" btn-primary m-1">


                        <!-- v-once ensures that the following DOM Elements and Components Children will not be re-rendered. This
                        will enhance performance and save loading time. Example: In Stock!-->
                        Quantity: <span v-text="products[key].quantity"/> <br>
                        Quantity (v-once): <span v-once v-text="products[key].quantity"/>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductList",
    data () {
    return {
            html: `<b>Lorem ipsum dolor</b> sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.`,
            imgUrl: 'https://bit.ly/2TJR5V1',
            products: [
                {
                    name: "T-Shirt Black",
                    price: 100,
                    sale: true,
                    supersale: false,
                    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/5143LJ01xdL._UX385_.jpg',
                    stock: 8,
                    quantity: 1
                },
                {
                    name: "T-Shirt White",
                    price: 120,
                    sale: false,
                    supersale: false,
                    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51k%2BDeysKVL._UX385_.jpg',
                    stock: 24,
                    quantity: 0
                },
                {
                    name: "T-Shirt Green",
                    price: 80,
                    sale: false,
                    supersale: true,
                    imgUrl: 'https://www.english-heritageshop.org.uk/imagprod/darwin-collection-i-think-tshirt.jpg',
                    stock: 50,
                    quantity: 0
                }
            ]
        }
    },
    methods: {
        addToCart() {
            console.log('Add to Cart Method executed.')
        }
    }
}
</script>

<style scoped>

</style>