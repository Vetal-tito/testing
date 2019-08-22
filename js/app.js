
 const app = new Vue({
  el:'#app',
  data: {
    hotdogs:[],
    newHotdog: null,
	 cart: 0,
  },
  mounted() {
    
    if(localStorage.getItem('hotdogs')) {
      try {
        this.hotdogs = JSON.parse(localStorage.getItem('hotdogs'));
      } catch(e) {
        localStorage.removeItem('hotdogs');
      }
    }
  },
  methods: {
    addHotdog() {
     
      if(!this.newHotdog) return;
      this.hotdogs.push(this.newHotdog);
      this.newHotdog = '';
      this.saveHotdogs();
    },
    removeHotdog(x) {
      this.hotdogs.splice(x,1);
      this.saveHotdogs();
    },
    saveHotdogs() {
      let parsed = JSON.stringify(this.hotdogs);
      localStorage.setItem('hotdogs', parsed);
    },
	
/*         addToCart: function() {
            this.cart += 1
        },
        updateProduct: function(index) {  
            this.selectedVariant = index
        } */
    },
 })
