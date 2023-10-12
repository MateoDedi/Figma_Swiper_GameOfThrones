document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
    });

    const imageElements = document.querySelectorAll('img');
    const background = document.body.style;

    imageElements.forEach((image, index) => {
        image.addEventListener('click', () => {
            const houseName = getHouseNameFromImage(image);
            setHouseBackground(houseName);

            swiper.slideTo(index + 1);

            // Reset opacity for all images to 0.4
            imageElements.forEach((img) => {
                img.style.opacity = '0.4';
            });

            // Set opacity to 1 for the clicked image
            image.style.opacity = '1';
        });
    });

    function getHouseNameFromImage(image) {
        // Extract the house name from the alt attribute of the image
        return image.alt;
    }

    function setHouseBackground(houseName) {
        // Define background images for each house
        const backgroundImages = {
            Stark: 'backgrounds/Stark.jpg',
            Lannister: 'backgrounds/lannister.jpg',
            Targaryen: 'backgrounds/house targaryen.jpg',
        };
    
        // Set the background image based on the house name
        if (backgroundImages.hasOwnProperty(houseName)) {
            background.backgroundImage = `url(${backgroundImages[houseName]})`;
            background.backgroundRepeat = 'no-repeat';
            background.backgroundSize = 'cover';
            background.backgroundAttachment = 'fixed';
        } else {
            // If the house name is not found, set the background to the default
            background.backgroundImage = 'url(backgrounds/game_of_thrones_hbo_world_map_by_crlyle_d4vvlyo.jpg)';
            background.backgroundRepeat = 'no-repeat';
            background.backgroundSize = 'cover';
            background.backgroundAttachment = 'fixed';
        }
    }    
});
