interface NavLink{
    title:string,
    path:string,
}
interface ContactDATA{
    logo:string,
    url:string,
}

export const navlinks:NavLink[]=[
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

export const contactData:ContactDATA[] = [
    {
        logo: "whatsapp.png",
        url: "https://api.whatsapp.com/send/?phone=201151101537&text&type=phone_number&app_absent=0 ",
    },
    {
        logo: "messenger.png",
        url: "https://m.me/ahmedmohamedagg",
    },
    {
        logo: "github.png",
        url: "https://github.com/ahmedmohamedag ",
    },
    {
        logo: "facebook.png",
        url: "https://web.facebook.com/ahmedmohamedagg",
    },
    {
        logo: "linkedin.png",
        url: "https://www.linkedin.com/in/ahmedmohamedagg/ ",
    },
    {
        logo: "youtube.png",
        url: "https://www.youtube.com/@ahmedmohamedagg ",
    },
    {
        logo: "telegram.png",
        url: "http://t.me/ahmedmohamedag ",
    },
    {
        logo: "gmail.png",
        url:"https://mail.google.com/mail/u/0/?fs=1&to=ahmedmohamedprofile@gmail.com&tf=cm",
    },
]

export const tabsTitle =[
    {
        title:"all",
    },
    {
        title:"react",
    },
    {
        title:"next",
    },
    {
        title:"tasks",
    },
    {
        title:"strapi",
    },
    {
        title:"vanilla",
    },




]

export const projectsData =[
    
    {
        image:"projects/change-bg.png",
        title:"change bg",
        type :"tasks",
        demo:"https://github.com/ahmedmohamedag/change-bg ",
        repo:"https://github.com/ahmedmohamedag/change-bg",
        tolls:[""]
    },
    {
        image:"projects/hero-section.png",
        title:"hero section",
        type :"tasks",
        demo:"https://ahmedmohamedag.github.io/simble-task/",
        repo:"https://github.com/ahmedmohamedag/simble-task",
        tolls:["html","css"]
    },
    {
        image:"projects/wealthWise.png",
        title:"wealth wise",
        type :"react",
        demo:"https://wealth-wise-indol.vercel.app/",
        repo:"https://github.com/ahmedmohamedag/WealthWise",
        tolls:["react","tailwind"]
    },
 
]