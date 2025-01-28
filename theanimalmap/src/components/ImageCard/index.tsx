import Image from "next/image";

const ImageCard = ({ imageSrc, title, description, time, likes }) => {
  return (
    <div className="m-4 bg-white rounded-lg shadow-lg p-2 max-w-80">
      <div className="relative h-48 w-full">
        <Image
          alt={title}
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="flex justify-between mt-2">
        <span className="text-sm text-gray-500">{time}</span>
        <span className="text-sm text-gray-500">{likes} likes</span>
      </div>
    </div>
  );
};

export default ImageCard;
