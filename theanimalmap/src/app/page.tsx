import ImageCard from "@/components/ImageCard";


const images = [
  {
    src: "/imagens/acaradisco.jpg",
    alt: "Acará Disco",
    title: "Acará Disco",
    description: "O acará-disco pertence à família dos ciclideos e ...",
    time: "5 min",
    likes: 28
  },
  {
    src: "/imagens/axolote.jpg",
    alt: "Axolote",
    title: "Axolote",
    description: "Há vários anos que o axolote mexicano está na moda como animal doméstico. O seu aspeto simpático e as suas cores fazem dele o centro das atenções. Além disso, ter um axolote",
    time: "20 min",
    likes: 107
  },
  {
    src: "/imagens/camaraoamano.jpg",
    alt: "Camarão Amano",
    title: "Camarão Amano (caridina multidentata)",
    description: "O delicado Camarão Amano desempenha um papel crucial para o equilíbrio do ecossistema do aquário. Conheça as suas características e como cuidar dele.",
    time: "4 min",
    likes: 25
  },
  {
    src: "/imagens/camarões_de_aquário.jpg",
    alt: "Camarões de Aquário",
    title: "Camarões de Aquário",
    time: "3 min",
    likes: 13
  },
  {
    src: "/imagens/caracóis_maçã.jpg",
    alt: "Caracóis Maçã",
    title: "Caracóis Maçã",
    time: "4 min",
    likes: 36
  },
  {
    src: "/imagens/carpa_koi_de_véu.jpg",
    alt: "Carpa Koi de Véu",
    title: "Carpa Koi de Véu",
    time: "6 min",
    likes: 4
  },
];


export default function Home() {
  return (
      <div className="">
        <div className=" relative flex flex-wrap justify-center bg-slate-100/80 -mt-20 mx-8 border-0 rounded-md">
          {images.map((image, index) => (
            <ImageCard
              key={index}
              imageSrc={image.src}
              title={image.title}
              description={image.description}
              time={image.time}
              likes={image.likes}
            />
          ))}
        </div>
      </div>
  );
}
