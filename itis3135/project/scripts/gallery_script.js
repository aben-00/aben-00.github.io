document.addEventListener("DOMContentLoaded", function() { //Wait for the page to finish loading
    
    fetch("scripts/image_list.json").then((response) => response.json()) //Fetch the json file with all the image paths and descriptions
        .then((images) => {
            const imageList = document.getElementById("image-list");
            let imageListHTML = "";
            images.forEach((image, index) => {
            imageListHTML += `
            <figure class="gallery-item">
                <img src="${image.path}" alt="${image.caption}">
                <figcaption>Click to enlarge</figcaption>
            </figure>`;
            imageList.innerHTML = imageListHTML;

            // -- MODAL --
            const modal = document.getElementById("modal");
            const modalImage = document.getElementById("modal-image");
            const modalCaption = document.getElementById("modal-caption");
            const closeBtn = document.querySelector(".close");

            imageList.addEventListener("click", (event) => {
                const item = event.target.closest(".gallery-item"); //finds image onn click

                if (item) { //if image exists
                    const image = item.querySelector("img");
                    const caption = image.caption;

                    if (image) { 
                        //styling in modal.
                        modal.style.display = "flex";
                        modal.style.textAlign = "center";

                        //Set modal content
                        modalImage.src = image.src;

                        //Checks if the caption given is empty. If caption is empty, it will default.
                        modalCaption.textContent = caption && caption.textContent ? caption.textContent: "No description available.";
                    }
                }
            });


            // -- CLOSE MODAL --

            //Close Button.
            closeBtn.addEventListener("click", () => {
                modal.style.display = "none";
            });

            //Anywhere that is not the picture.
            modal.addEventListener("click", (event) => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        });
    });
});