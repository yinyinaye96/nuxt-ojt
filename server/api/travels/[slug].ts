const travels = [
    {
        "slug": "beach",
        "title": "Beach Sunset",
        "image": "beach-sunset-thailand.jpg",
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, amet! Exercitationem dolore, excepturi sunt officia praesentium quo nam unde. Fugiat, qui a alias saepe recusandae eos architecto nemo nulla nostrum."
    },
    {
        "slug": "mountain",
        "title": "Green Mountain",
        "image": "green-mountain-peaks.jpg",
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, amet! Exercitationem dolore, excepturi sunt officia praesentium quo nam unde. Fugiat, qui a alias saepe recusandae eos architecto nemo nulla nostrum."
    },
    {
        "slug": "city",
        "title": "Cityscape",
        "image": "photo-of-a-cityscape-with-a-ferris-wheel.jpg",
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, amet! Exercitationem dolore, excepturi sunt officia praesentium quo nam unde. Fugiat, qui a alias saepe recusandae eos architecto nemo nulla nostrum."
    },
]

export default defineEventHandler((event) => {
    const { slug } = event.context.params;
    return travels.find(travel => travel.slug.toLowerCase() === slug.toLowerCase());
});