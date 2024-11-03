import { StaticImageData } from "next/image";
// import photo1 from './photos/1.jpg';
// import photo2 from './photos/2.jpg';
import photo3 from './photos/3.jpg';
import photo4 from './photos/4.jpg';
import photo5 from './photos/5.jpg';
import photo6 from './photos/6.jpg';
import photo7 from './photos/7.jpg';
import photo8 from './photos/8.jpg';
import photo9 from './photos/9.jpg';
import photo10 from './photos/10.jpg';
import photo11 from './photos/11.jpg';
import photo12 from './photos/12.jpg';

export type wonderImage = {
    id: string,
    name: string,
    src: StaticImageData,
    photographer: string,
    location: string
};

const wonderImages: wonderImage[] = [
    // {
    //     id: "1",
    //     name: "thakur",
    //     src: photo1,
    //     photographer: "Thakur Mahendar Singh",
    //     location: "Tunganath"
    // },
    // {
    //     id: "2",
    //     name: "thakur",
    //     src: photo2,
    //     photographer: "Thakur Mahendar Singh",
    //     location: "Tunganath"
    // },
    {
        id: "3",
        name: "thakur",
        src: photo3,
        photographer: "Thakur Mahendar Singh",
        location: "Tunganath"
    },
    {
        id: "4",
        name: "thakur",
        src: photo4,
        photographer: "Thakur Mahendar Singh",
        location: "Tunganath"
    },
    {
        id: "5",
        name: "thakur",
        src: photo5,
        photographer: "Thakur Mahendar Singh",
        location: "Tunganath"
    },
    {
        id: "6",
        name: "thakur",
        src: photo6,
        photographer: "Thakur Mahendar Singh",
        location: "Tunganath"
    },
    {
        id: "7",
        name: "thakur",
        src: photo7,
        photographer: "Thakur Mahendar Singh",
        location: "Tunganath"
    },
    {
        id: "8",
        name: "thakur",
        src: photo8,
        photographer: "Thakur Mahendar Singh",
        location: "Tunganath"
    },
    {
        id: "9",
        name: "thakur",
        src: photo9,
        photographer: "Thakur Mahendar Singh",
        location: "Tunganath"
    },
    {
        id: "10",
        name: "thakur",
        src: photo10,
        photographer: "Thakur Mahendar Singh",
        location: "Tunganath"
    },
    {
        id: "11",
        name: "thakur",
        src: photo11,
        photographer: "Thakur Mahendar Singh",
        location: "Tunganath"
    },
    {
        id: "12",
        name: "thakur",
        src: photo12,
        photographer: "Thakur Mahendar Singh",
        location: "Tunganath"
    },

]

export default wonderImages;
