import Vue from 'vue'
import Vuex from 'vuex'
// <!-- #4 Vuex - German IT Academy - www.git-academy.com -->
        
// Tell our Vue Application to use the "Vuex" Plugin/Extension
Vue.use(Vuex)

export default new Vuex.Store({
  // Think of 'state' as the 'data'-Object which can be access from any component
  // in our application
  state: {
    // Static list of products. This list could/must come from an API or Database
    products: [{
        name: "T-Shirt Black",
        price: 100,
        sale: true,
        supersale: false,
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/5143LJ01xdL._UX385_.jpg',
        stock: 8
      },
      {
        name: "T-Shirt White",
        price: 120,
        sale: false,
        supersale: false,
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51k%2BDeysKVL._UX385_.jpg',
        stock: 24
      },
      {
        name: "T-Shirt Green",
        price: 80,
        sale: false,
        supersale: true,
        imgUrl: 'https://www.english-heritageshop.org.uk/imagprod/darwin-collection-i-think-tshirt.jpg',
        stock: 50
      }
    ],
    cart: []
  },
  mutations: {
    pushProduct (state, product) {
      // Mutate the State.
      state.products.push(product)
    },
    pushCart (state, key) {
      // Mutate the State.
      console.log('i am in mutation')
      state.cart.push(key)
    },
    removeCart (state, product) {
      // Find Product in the cart

      // Remove the Element from the cart
      state.products.push(product)
    }
  },
  // Basicly: Functions that will be used by our Components. Actions commit mutations.
  actions: {
    addProduct(context, productObject) {
      // set default values of a product. Value that must be set, but cannot be set through ui.
      productObject.stock = 100
      productObject.imgUrl = 'https://www.english-heritageshop.org.uk/imagprod/darwin-collection-i-think-tshirt.jpg'
      // Commit the mutation
      context.commit('pushProduct', productObject)
    },
    addProductCart(context, key) {
      // Check if Product in the cart
      console.log('i am in actions')
      context.commit('pushCart', key)
    },
    removeProductCart(context, productObject) {
      context.commit('pushProduct', productObject)
    }
  },
  getters: {
    allProducts: state => {
      return state.products
    },
    saleProducts: state => {
      return state.products.filter(product => product.sale)
    },
    superSaleProducts: state => {
      return state.products.filter(product => product.supersale)
    },
  }
})
