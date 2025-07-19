import { useParams } from 'react-router-dom';

const productData = {
  1: {
    name: 'Wireless Headphones',
    desc: 'Experience premium sound with our Wireless Headphones. Features include noise cancellation, long battery life, and a sleek, comfortable design for all-day use.',
    image: '/images/product1.png'
  },
  2: {
    name: 'Smartwatch Pro',
    desc: 'Stay connected with the Smartwatch Pro. Track fitness, monitor heart rate, and get real-time notifications on a high-resolution display.',
    image: '/images/product2.png'
  },
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData[id];

  if (!product) return <p className="text-red-600 font-semibold">Product not found.</p>;

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-100 object-contain object-center rounded mb-4" />
      <p className="text-gray-700">{product.desc}</p>
    </div>
  );
};

export default ProductDetails;
