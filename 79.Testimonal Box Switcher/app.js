const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-avatar');
const userName = document.querySelector('.username');
const twitterHandle = document.querySelector('.twitter-handle');

const testimonials = [
    {
        name: "Gani Fetahi",
        position: "@webdew",
        photo:
            "https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-man-s-profile-with-a-bright-blue-light-showing-over-his-image_2952387.jpg",
        text: "If I had to recommend a way of getting into programming today, it would be HTML + CSS with @tailwindcss The RoI is just incredible. This responsive demo is just ~21 custom CSS props. The whole thing is mostly built-in tailwind classes and vanilla HTML.",
    },
    {
        name: "Hana Fetahi",
        position: "@han_fetahi",
        photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq6Kk0pzeAx9JRxXBWwEcoRrqeVEZreffz9qe680Kaic97-st2byEVO1TqnEGa_7QCpSk&usqp=CAU",
        text: "I started using @tailwindcss. I instantly fell in love with their responsive modifiers, thorough documentation, and how easy it was customizing color palettes.",
    },
    {
        name: "Jusuf Fetahi",
        position: "@jfrontstuff_io",
        photo:
            "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-man-in-glasses-has-a-colorful-background-image_2914884.jpg",
        text: "Tailwind CSS is bridging the gap between design systems and products. It's becoming the defacto API for styling.",
    },
    {
        name: "Lorem Ipsum",
        position: "@loripsum",
        photo:
            "https://pbs.twimg.com/profile_images/970109919444824064/X0XU8ZD9_400x400.jpg",
        text: "Tailwind clicked for me almost immediately. I can't picture myself writing another BEM class ever again. Happy user since the first public release! Productivity is at an all time high, thanks to @tailwindcss",
    },
    {
        name: "Jeta Fetahi",
        position: "@jfetahi",
        photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSNd6Esuwfes8e4XjfObQ6T5LMsylwk39nmN2U1ALwUvX457Z6hYVIlMksqM3xgPNRDSo&usqp=CAU",
        text: "CSS has always been the hardest part of offering a digital service. It made me feel like a bad developer. Tailwind gives me confidence in web development again. Their docs are my first port of call.",
    },
    {
        name: "Unknown Person",
        position: "@unknown",
        photo:
            "https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-male-silhouette-in-a-business-suit-image_2874057.jpg",
        text: "I thought 'Why would I need Tailwind CSS? I already know CSS and use Bootstrap', but after giving it a try I decided to switch all my projects to Tailwind.",
    },
    {
        name: "Anonimous",
        position: "@anonimous",
        photo:
        "https://png.pngtree.com/background/20230611/original/pngtree-the-person-s-avatar-in-silhouette-on-a-blue-background-picture-image_3140936.jpg",
        text: "Before Tailwind CSS I was banging my head against the wall trying to make sense of my CSS spaghetti. Now I am banging my head against the wall wondering why I didn't try it earlier. My head hurts and my wall has a big hole in it. But at least using CSS is pleasant again!",
    },
];

let counter = 1;

function showNextTestimonial() {
    const { name, position, photo, text } = testimonials[counter];

    testimonial.innerHTML = text;
    userImage.src = photo;
    userName.innerHTML = name;
    twitterHandle.innerHTML = position;

    counter++;

    if (counter > testimonials.length -1) {
        counter = 0;
    }
}

setInterval(showNextTestimonial, 10000);