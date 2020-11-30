var app = new Vue({

    el: "#root",

    data:{

        phone_number: "+1 (305) 1234-5678",
        e_mail: "hello@example.com",
        navbar_items: [
            "Home",
            "About",
            "Projects",
            "Process",
            "Testimonials"
        ],

        current_navbar_index: 0

    },

    methods:{
        navbar_select(i){
            console.log(i); 
            return this.current_navbar_index = i;
        }
    }

});
