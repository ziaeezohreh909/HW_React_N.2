type carType = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  ctaText?: string;
  action: () => void;
};

export default function Card({
  name,
  price,
  description,
  image,
  ctaText = "Buy Now",
  action,
}: carType) {
  return (
    <div className="border w-1/4 m-2 p-2 flex flex-col justify-between gap-1 rounded-sm">
      <img src={image} alt="" />
      <h2 className="font-bold">{name}</h2>
      <h3 className="text-sm font-semibold">{price}</h3>
      <p className="text-gray-600 font-sans text-xs">{description}</p>
      <button
        className="bg-blue-500 text-white font-bold text-xs py-1 rounded-md"
        onClick={action}
      >
        {ctaText}
      </button>
    </div>
  );
}
