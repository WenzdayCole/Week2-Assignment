console.log("Test...this will be a shambles")

const images= [
    {src: "https://images.unsplash.com/photo-1733173523386-3006dec1a835?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "A picturesque scene of a sun set, with the sun raise bouncing of the side of a grand mountain range."},
    {src: "https://images.unsplash.com/photo-1732901812656-1e3c79d414f7?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "A lone hut on a thick blanket of snow, in front of a dense pine forest."}
]

//!commit your work!



//TODO: I want to create my thumbnail images
//STEP 1: Select the DOM element we are manipulating
//I need to select both the thumbnail container and the large image container

const thumbnailContainer = document.getElementById("Thumbnail-container");
const largeImgContainer = document.getElementById("Large-image-container");

//Since creating the thumbnail images takes more than one step, what is the best way to write a block of code? A function!
//I want to resuse this function for all my images --> I need parameters

function createThumbnails(imagesArray) {
  for(let i = 0; i < imagesArray.length; i++); {
    console.log(imagesArray[i])
    const thumbnail = document.createElement("img")
    thumbnail.width = 30;
    thumbnail.height = 30;
    thumbnail.src = [i];
    thumbnail.alt = [i];
    thumbnail.appendChild(thumbnailContainer);
    createThumbnails(imagesArray);
    // not my own work, basically copied from the several different screenshots on Discord.
    // Showed the intial one to my friend and he helped me fix it up a bit.
    //initial one looked like this:
    //function createThumbnails(imagesArray) {
  // for(let i = 0, i <= images.length, i++) {
  //   console.log(images[i])

  //!I DONT KNOW IF THIS DOES ANYTHING!! (crying emoji, crying emoji, crying emoji)
    }
   }

   //I need to create more than one thumbnail --> I can use a loop
    //You can use different ways to loop thorugh your array: for loop / forEach()
    //Inside the loop, we have a few steps to do:
    //create an image element
    //we need assign values to the image element properties
    //src = value
    //we also need to assign a value to the className property
    //we need add an event to the image elements we are creating here
    //we need to append the images to the thumbnail container
  
  
  
  //!commit your work!
  
  //TODO: I want to create my larger images
  //The larger images will be created when the user triggers the thumbnail images event
  //This function will be event handler for our images
  function createLargeImagesHandler(largeImage) {
    //I want to remove the image that's in the full screen, and create a new image with new properties
    // largeImageContainer.innerHTML = null / ""
    //create an image element
    //assign values to the image element
    //add a className to style the large image
    //append the image to the largeImageContainer
  }
  //!we don't call the createLargeImagesHandler in here. It is an event handler!
  
  //!commit your work!