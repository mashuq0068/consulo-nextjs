import Icons from "../components/Icons";

const Menus = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About Us',
        path: '/about-us'
    },
    {
        title: 'Our Offerings',
        path: '/services',
        // dropdown: [
        //     { title: 'Rice', path: '/services' },
        //     { title: 'Wheat', path: '/services' },
        //     { title: 'Sugar', path: '/services' },
        //     { title: 'Spices', path: '/services' },
        //     { title: 'Pulses', path: '/services' },
        //     { title: 'Animal Feeds', path: '/services' }
        // ]
    },
    // {
    //     title: 'Market Insights',
    //     path: '/market-insights',
    //     dropdown: [
    //         { title: 'Market Trends/Analysis weekly', path: '/market-insights' },
    //         { title: 'News/Updates', path: '/news-updates' }
    //     ]
    // },
    {
        title: 'Talent Asset',
        path: '/hr',
        // dropdown: [
        //     { title: 'Life at KB', path: '/hr' },
        //     { title: 'Careers', path: '/hr' },
        //     { title: 'Training', path: '/hr' },
        //     { title: 'Internships', path: '/hr' }
        // ]
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    }
    /*
    {
        title: 'Pages',
        path: '/projects',
        megamenu: [...]
    },
    {
        title: 'Blog',
        path: '/blogs',
        dropdown: [...]
    }
    */
]

export default Menus;