import { useRouter } from 'next/router';

type CardProps = {
  headerText: string;
  contentText: string;
  href: string;
};

const Card: React.FC<CardProps> = ({ headerText, contentText, href }) => {
  const router = useRouter();

  const navigate = () => {
    router.push(href);
  };

  return (
    <div className="flex-auto w-full md:h-64 h-40 border border-gray-300 bg-gray-900 hover:bg-gray-600 rounded-lg " onClick={navigate}>
      <h1 className="m-5 mb-2 text-xl font-bold text-blue-400">{headerText}</h1>
      <p className="mx-5 md:my-5 text-md">{contentText}</p>
    </div>
  );
};

export default Card;
