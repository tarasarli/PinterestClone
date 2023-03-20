let pin_image_blob = null; /*we want to save the image dataa outside of the function. the blob is the type of data (a large string of characters) */ 

/*now, when we click on the "click to upload", we want the thing to popup (where we can choose the photo)
and then we want to save the data. we already worked out this logic in the pin_script.js
so well just copy and past ALL OF IT , then change it up a bit e*/
document.querySelector('#upload_img').addEventListener('change', event => { /*so we changed the query to upload_img instead of picture */
    if (event.target.files && event.target.files[0]) { /*exists*/
        if (/image\/*/.test(event.target.files[0].type)) { /*exists*/
            const reader = new FileReader(); /*exists*/

            reader.onload = function () { /*exists*/
                const new_image = new Image(); /* this is to generate a new image */

                new_image.src = reader.result; /*the reader.result is the image data*/
                pin_image_blob = reader.result; /*we will save the image data )reader.result into the variable we made at hte top of the file which is  pin_image_blob, so that we can save it in an object using a different function*/ 

                new_image.onload = function () { /* 1. when that new image has loaded, we want the following function to execute*/
                    const modals_pin = document.querySelector('.add_pin_modal .modals_pin'); /* 4. we will show the modals_pin (which is the image??), by doing 2 things.. this line and the line below it*/
                    new_image.classList.add('pin_max_width');

                    document.querySelector('.add_pin_modal .pin_image').appendChild(new_image);  /* 2. we are going to append the image tag to the pin_image. NOW, we have the image in there but the modals_pin pin_iamge is hidden????, so we are going to hide the label, which is the (reference to the grey stuff on left side on the live server), and we are going to show the actual image */
                    document.querySelector('#upload_img_label').style.display = 'none'; /* 3. to hide the image in terms of display, we will write this*/

                    modals_pin.style.display = 'block'; /* 5. now were gonna turn it on???? */

                    if ( 
                        new_image.getBoundingClientRect().width < new_image.parentElement.getBoundingClientRect().width ||
                        new_image.getBoundingClientRect().height < new_image.parentElement.getBoundingClientRect().height
                    ) {
                        new_image.classList.remove('pin_max_width');
                        new_image.classList.add('pin_max_height');
                    }

                    modals_pin.style.opacity = 1; /* 6.  were gonna turn on the opacity . now, were gonna go to modal_styles.css and comment out entire block for .pin_image img{}, and we wre gonig to add this in right underneath pin_image img that we commented out
                    
                    .pin_max_width {
                         max-width: 100%;
                    }
  
                    .pin_max_height {
                        max-height: 100%;
                    }
                     */
                }
            } /*exists*/

            reader.readAsDataURL(event.target.files[0]); /*exists*/
        } /*exists*/
    } /*exists*/

    document.querySelector('#upload_img').value = ''; /*exists BUT we changeed it to upload image instead of picture */
}); /*exists*/

document.querySelector('.save_pin').addEventListener('click', () => {
    const users_data = {
        author: 'Jack',
        board: 'default',
        title: document.querySelector('#pin_title').value,
        description: document.querySelector('#pin_description').value,
        destination: document.querySelector('#pin_destination').value,
        img_blob: pin_image_blob,
        pin_size: document.querySelector('#pin_size').value
    }

    console.log(users_data);
});


/* I LITERALLY HAVE NO IDEA WHATS GOING ON BESIDE ONLOAD ;<    */


/*left off 1.10 */