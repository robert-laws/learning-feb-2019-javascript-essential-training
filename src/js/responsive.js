const IMAGES = document.querySelectorAll("img");
const SIZES = {
  showcase: "100vw"
}

function makeSrcset(imgSrc) {
  let markup = [];
  let width = 400;

  for (let i = 0; i < 5; i++) {
    markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
    width+=400;
  }

  return markup.join();
}

if(IMAGES) {
  for (let i = 0; i < IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src");
    imgSrc = imgSrc.slice(0, -8);
    let srcset = makeSrcset(imgSrc);
    IMAGES[i].setAttribute("srcset", srcset);
    console.log(srcset);

    let type = IMAGES[i].getAttribute("data-type");
    let sizes = SIZES[type];
    IMAGES[i].setAttribute("sizes", sizes);
    console.log(sizes);
  }
}
