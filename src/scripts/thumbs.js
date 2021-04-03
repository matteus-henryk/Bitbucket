const startThumbs = () => {
  const thumbs = document.querySelectorAll(".thumbs button");
  const banner = document.querySelector('.block-about .banner img');

  console.log(banner)

  thumbs.forEach(item => {
    item.addEventListener('click', function() {
      const img = this.children[0].getAttribute('src');
      this.children[0].setAttribute('src', changeBanner(img, banner));
    });
  })
};

function changeBanner(newImg, banner) {
  const currentImgBanner = banner.getAttribute('src');
  banner.setAttribute('src', newImg);

  return currentImgBanner;
};
export default startThumbs;