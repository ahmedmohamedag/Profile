interface NavLink {
    title: string,
    path: string,
}
interface ContactDATA {
    logo: string,
    url: string,
}
type talls = "html" | "css" | "javascript" | "tailwind" | "react" | "bootstrap" | "next"
interface project {
    image: string,
    title: string,
    type: "react" | "next" | "tasks" | "straoi" | "vanilla",
    demo: string,
    repo: string
    tolls: talls[]

}

export const navlinks: NavLink[] = [
    {
        title: "projects",
        path: "/",
    },
    {
        title: "services",
        path: "services",
    },
    {
        title: "about",
        path: "about",
    },
    {
        title: "contact",
        path: "contact",
    },
]

export const contactData: ContactDATA[] = [
    {
        logo: "messenger.png",
        url: "https://m.me/ahmedmohamedagg",
    },
    {
        logo: "5whatsapp.png",
        url: "https://api.whatsapp.com/send/?phone=201151101537&text&type=phone_number&app_absent=0 ",
    },

    {
        logo: "github.png",
        url: "https://github.com/ahmedmohamedag ",
    },

    {
        logo: "linkedin.png",
        url: "https://www.linkedin.com/in/ahmedmohamedagg/ ",
    },
    {
        logo: "facebook.png",
        url: "https://web.facebook.com/ahmedmohamedagg",
    },
    // {
    //     logo: "youtube.png",
    //     url: "https://www.youtube.com/@ahmedmohamedagg ",
    // },
    // {
    //     logo: "telegram.png",
    //     url: "http://t.me/ahmedmohamedag ",
    // },
    // {
    //     logo: "gmail.png",
    //     url:"https://mail.google.com/mail/u/0/?fs=1&to=ahmedmohamedprofile@gmail.com&tf=cm",
    // },
]

export const tabsTitle = [
    {
        title: "all",
    },
    {
        title: "react",
    },
    {
        title: "next",
    },
    {
        title: "tasks",
    },
    {
        title: "strapi",
    },
    {
        title: "vanilla",
    },




]

export const projectsData: project[] = [


    {
        image: "projects/hero-section.png",
        title: "hero section",
        type: "tasks",
        demo: "https://ahmedmohamedag.github.io/simble-task/",
        repo: "https://github.com/ahmedmohamedag/simble-task",
        tolls: ["html", "css"]
    },
    {
        image: "projects/wealthWise.png",
        title: "wealth wise",
        type: "react",
        demo: "https://wealth-wise-indol.vercel.app/",
        repo: "https://github.com/ahmedmohamedag/WealthWise",
        tolls: ["react", "tailwind"]
    },
    {
        image: "projects/linkter.png",
        title: "lenkater",
        type: "react",
        demo: "https://ahmed-mohamed-two.vercel.app/",
        repo: "https://github.com/ahmedmohamedag/ahmed-mohamed",
        tolls: ["react", "tailwind"]
    },
    {
        image: "projects/guarder.png",
        title: "guarder",
        type: "vanilla",
        demo: "https://ahmedmohamedag.github.io/guarder/",
        repo: "https://github.com/ahmedmohamedag/guarder",
        tolls: ["html", "css", "javascript"]
    },
    {
        image: "projects/slider.png",
        title: "slide",
        type: "tasks",
        demo: "https://ahmedmohamedag.github.io/Slider-Task/",
        repo: "https://github.com/ahmedmohamedag/Slider-Task",
        tolls: ["html", "css", "javascript"]
    },
    {
        image: "projects/calculator_1.png",
        title: "calculatir",
        type: "tasks",
        demo: "https://ahmedmohamedag.github.io/calculator_0/",
        repo: "https://github.com/ahmedmohamedag/calculator_0",
        tolls: ["html", "css", "javascript"]
    },
    {
        image: "projects/copy-text.png",
        title: "copy text",
        type: "tasks",
        demo: "https://ahmedmohamedag.github.io/copy-text/",
        repo: "https://github.com/ahmedmohamedag/copy-text",
        tolls: ["html", "css", "javascript"]
    },
    {
        image: "projects/QR-Generator.png",
        title: "QR Generator ",
        type: "tasks",
        demo: "https://ahmedmohamedag.github.io/QR-Generator/",
        repo: "https://github.com/ahmedmohamedag/QR-Generator",
        tolls: ["html", "css", "javascript"]
    },
    {
        image: "projects/calculator_0.png",
        title: "calculater",
        type: "tasks",
        demo: "https://ahmedmohamedag.github.io/Calculator/",
        repo: "https://github.com/ahmedmohamedag/Calculator",
        tolls: ["html", "css", "javascript"]
    },


    {
        image: "projects/change-bg.png",
        title: "change bg",
        type: "tasks",
        demo: "https://ahmedmohamedag.github.io/change-bg/",
        repo: "https://github.com/ahmedmohamedag/change-bg",
        tolls: ["css", "html"]
    },

]