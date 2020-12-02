var app = new Vue({

    el: "#root",

    data:{

        phone_number: "+1 (305) 1234-5678",
        e_mail: "hello@example.com",

        top_navbar_index: 0,
        top_navbar_items: [
            "Home",
            "About",
            "Projects",
            "Process",
            "Testimonials"
        ],

        actions_navbar_index: 0,
        actions_navbar_items:[
            "All",
            "Institutional",
            "Social",
            "Events",
            "Innovation",
            "Enviroment",
            "Technology"
        ],

        squares_img_root_path:"./img/squares/",
        squares:[
            {
                name: "project-1.jpg",
                text: "Academic professional program in social media"
            },
            {
                name: "project-2.jpg",
                text: "President's speech at the annual meeting"
            },
            {
                name: "project-3.jpg",
                text: "International business trip in Shangai"
            },
            {
                name: "project-4.jpg",
                text: "Technology workshop whith education theme"
            },
            {
                name: "project-5.jpg",
                text: "Donation of clothes and food to the partner NGO"
            },
            {
                name: "project-6.jpg",
                text: "Confraternization of the procurement team"
            },
        ],

        customers_folder: "./img/customers/",
        customers_logos:[
            {
                name: "Woocommerce",
                logo_path: "logo-1.png"
            },
            {
                name: "Wordpress",
                logo_path: "logo-2.png"
            },
            {
                name: "Pingdom",
                logo_path: "logo-3.png"
            }
        ]

    },

    methods:{

        top_navbar_select(i){
            console.log(i);
            return this.top_navbar_index = i;
        },

        actions_navbar_select(i){
            console.log(i);
            return this.actions_navbar_index = i;
        }
    }

});
