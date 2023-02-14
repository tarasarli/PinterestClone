
document.querySelector('#picture').addEventListener('change', event => { //1 The Document method querySelector() 
                                                                            //returns the first Element within the document that
                                                                            // matches the specified selector, or group of selectors.
                                                                            //If no matches are found, null is returned.
                                                                            // the event listener is going to listen for 
                                                                            //a change in the picture. if picture gets 
                                                                            //changed then this event is going to be triggered//

    if (event.target.files && event.target.files[0]) { //2 if event target file exists and event raget file{0] exists //

        if (/image\/*/.test(event.target.files[0].type)) { //3  image/*  means that pictures that are .png,
                                                                // .jif,.jpeg will all be accepted. 
                                                                //The event.target.files[0].type is testing the 
                                                                //event (file). in that file, theres a type. so if the 
                                                                //type is a png, jif, jpeg, then we will: .//

            const reader = new FileReader(); //4 make a new file reader-- object containes methods for taking in image//

            reader.onload = function() { //7 once the image loads, then this function will execute//
                document.querySelector('.pin_image img').src = reader.result; //8 sfinding any pic that has class 
                                                                                    //of pin image and then its assigning
                                                                                    // the source of that class to the
                                                                                    // result of the image they uploaded //
            }

            reader.readAsDataURL(event.target.files[0]); //5 Read the file, the event.target.files[0] is the file//
        }
    }
                // 6 now go to pin.html at the bottom where says         <div class="pin_image"> and show
                    //underneath that it says img src = "". so now were going to make that source a data
                    // url so that the image shows up!//

    document.querySelector('#picture').value = ''; //9 we set the value to a blank because when we choose an image,
                                                        // its going to load and then if  we click choose file and
                                                        // choose the same image, that doesnt register as a change.
                                                        // So we are just making sure that if we pick the same image 
                                                        //over and over again, that it will register as a change!//
});

// now choose a picture to show . so now pin mockup is done. now gonna do add modal page mockup//

//now create modal.html, (styles folder) modal_styles.css, (scripts folder) modal_script.js. now go to modal.html//
