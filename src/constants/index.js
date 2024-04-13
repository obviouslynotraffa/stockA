import { Nike, Jordan, Yeezy, OffWhite } from '../assets/images'

import { NikeSBDunkLowxTS, NikeAirForce1LowxTS, NikeAirMax270ReactxTS } from '../assets/images'

import { supportIcon, shieldTick, truckFast } from '../assets/icons';

import { customer1, customer2 } from '../assets/images';

import { facebook, instagram, twitter } from '../assets/icons';

import { applestore, playstore } from '../assets/images';

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
];

export const BrandImages = [
    {
        src: Nike, 
        alt: "Nike logo",
    },
    {
        src: Jordan, 
        alt: "Jordan logo",
    },
    {
        src: OffWhite,
        alt: "Off-white logo",
    },
    {
        src: Yeezy,
        alt: "Yeezy logo",
    },
];


export const TravisScottSneakers = [
    {
        src: NikeSBDunkLowxTS,
        alt: "Nike SB Dunk Low x Travis Scott"
    },
    {
        src: NikeAirForce1LowxTS,
        alt: "Nike Air Force 1 Low x Travis Scott Cactus Jack"
    },
    {
        src: NikeAirMax270ReactxTS,
        alt: "Nike Air Max 270 React x Travis Scott Cactus Trails"
    }
];


export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: supportIcon,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.4,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.7,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const socials = [
    {
        src: facebook,
        alt: "Facebook logo"
    },
    {
        src: twitter,
        alt: "Twitter logo"
    },
    {
        src: instagram,
        alt: "Instagram logo"
    }
];


export const appStores = [
    {
        src: applestore,
        alt: "Apple Store logo"
    },
    {
        src: playstore,
        alt: "Play Store logo"
    }    
];

export const footerLinks = [
    {
        title: "Usefull links",
        links: [
            { name: "Coupons", link: "/" },
            { name: "Blog", link: "/" },
            { name: "Return policy", link: "/" },
            { name: "Join affiliate", link: "/" },
            { name: "Contanct us", link: "/" }
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    }
];