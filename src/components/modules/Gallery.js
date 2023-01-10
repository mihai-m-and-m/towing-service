import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original:
      "https://tractariauto-bucuresti.com/wp-content/uploads/2019/06/tractari-auto.jpg",
    thumbnail:
      "https://tractariauto-bucuresti.com/wp-content/uploads/2019/06/tractari-auto.jpg",
  },
  {
    original:
      "https://www.firmatractari.ro/wp-content/uploads/2020/12/mercedes-600-v2.png",
    thumbnail:
      "https://www.firmatractari.ro/wp-content/uploads/2020/12/mercedes-600-v2.png",
  },
  {
    original:
      "https://sos-tractari-auto.ro/wp-content/uploads/2020/10/tractari-bucuresti.jpeg",
    thumbnail:
      "https://sos-tractari-auto.ro/wp-content/uploads/2020/10/tractari-bucuresti.jpeg",
  },
  {
    original:
      "https://pbs.twimg.com/media/E39K1VoXwAAlEzN?format=jpg&name=large",
    thumbnail:
      "https://pbs.twimg.com/media/E39K1VoXwAAlEzN?format=jpg&name=large",
  },
  {
    original:
      "http://asistentatractariauto.ro/themes/demo/assets/images/tractari-auto-ieftin.jpeg",
    thumbnail:
      "http://asistentatractariauto.ro/themes/demo/assets/images/tractari-auto-ieftin.jpeg",
  },
  {
    original: "https://tractari-auto-ilfov.ro/content/driving/images/2.jpeg",
    thumbnail: "https://tractari-auto-ilfov.ro/content/driving/images/2.jpeg",
  },
  {
    original:
      "https://tractari-auto-dolj-craiova.ro/wp-content/uploads/2019/12/WhatsApp-Image-2019-12-03-at-19.17.07.jpeg",
    thumbnail:
      "https://tractari-auto-dolj-craiova.ro/wp-content/uploads/2019/12/WhatsApp-Image-2019-12-03-at-19.17.07.jpeg",
  },
  {
    original:
      "https://tractarioradea24.ro/wp-content/uploads/2021/03/tractari-auto-oradea-2.jpg",
    thumbnail:
      "https://tractarioradea24.ro/wp-content/uploads/2021/03/tractari-auto-oradea-2.jpg",
  },
  {
    original:
      "http://asistentatractariauto.ro/themes/demo/assets/images/asistenta-tractari.jpeg",
    thumbnail:
      "http://asistentatractariauto.ro/themes/demo/assets/images/asistenta-tractari.jpeg",
  },
  {
    original:
      "https://remorcaribrasov.ro/wp-content/uploads/2018/10/tractari-auto-brasov.jpg",
    thumbnail:
      "https://remorcaribrasov.ro/wp-content/uploads/2018/10/tractari-auto-brasov.jpg",
  },
];

function GalleryPhoto(props) {
  return <ImageGallery items={images} />;
}

export default GalleryPhoto;
