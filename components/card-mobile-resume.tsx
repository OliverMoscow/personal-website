import { useRouter } from "next/router";

type CardProps = {
  headerText: string;
  contentText: string;
  href: string;
  imageSrc: string;
  theme: string;
  subtheme: string;
};

const Card: React.FC<CardProps> = ({
  headerText,
  contentText,
  href,
  imageSrc,
  theme,
  subtheme
}) => {
  const router = useRouter();

  const navigate = () => {
    if (href !== "") {
      router.push(href);
    }
  };

  const cardStyle = {
    backgroundImage: `url('/images/${imageSrc}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  };
  return (
    <div
      className="w-[248px] h-[537px] rounded-lg overflow-hidden cursor-pointer"
      //@ts-ignore
      style={cardStyle}
      onClick={navigate}
    >
      <div className="flex-grow"></div>
      <div className="p-5">
        <div className={`block absolute -inset-1 -skew-y-3 lg:-skew-y-1 ${theme} relative inline-block w-full mb-5`}>
          <h1 className="relative m-2 text-xl font-bold text-gray-900">
            {headerText}
          </h1>
        </div>
        <div className={`block absolute -inset-1 -skew-y-3 lg:-skew-y-1 ${subtheme} relative inline-block w-full mb-5`}>
          <p className="relative m-2 text-mb font-medium text-gray-900">
            {contentText}
          </p>
        </div>
      </div>
    </div>
  );
  
};

export default Card;
