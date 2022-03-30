
// Wsb say we need to change to Next.js 55 
// import * as fs from 'fs'

// const ReadPhotoFile = () => {
//     const FolderPath = '/photography/'
//     fs.readdir(FolderPath, (err, files) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(files)
//             files.forEach(file => {
//             console.log(file)
//             })
//         }
//     })
// }

// ReadPhotoFile()

const photos = [
  {
    src: "https://source.unsplash.com/random/800x600",
    alt: "看个随机图片",
    caption: "Random Image",
  },
  {
    src: "photography/FINE_IMG1.jpg",
    alt: "新雪消融·硕博楼",
    caption: "新雪消融·硕博楼",
  },
  {
    src: "photography/FINE_IMG3.jpg",
    alt: "新雪消融·中教",
    caption: "新雪消融·中教",
  },
  {
    src: "photography/FINE_IMG4.jpg",
    alt: "玉兰",
    caption: "玉兰",
  },
  {
    src: "photography/FINE_IMG5.jpg",
    alt: "还是玉兰",
    caption: "还是玉兰",
  },
  {
    src: "photography/FINE_IMG6.jpg",
    alt: "依旧还是玉兰",
    caption: "依旧还是玉兰",
  },
  {
    src: "photography/IMG_0179.jpg",
    alt: "不是玉兰了，是小雏菊",
    caption: "不是玉兰了，是小雏菊",
  },

]

function PhotoFrame({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <div className="flex flex-col m-16 items-center">
      <div className="flex justify-center text-3xl font-bold">{alt}</div>
      <img
        className="border-orange-300 border-[16px] w-3/5 m-8 flex justify-center"
        src={src}
        alt={alt}
      />
    </div>
  );
}

export default function Gallery() {
  return <div className="w-full ml-16 mr-16">
      {photos.map(({src, alt, caption}) => <PhotoFrame key={src} src={src} alt = {alt} caption={caption}/>)}
  </div>;
}
