import { useRouter } from "next/router";

type CardProps = {
  headerText: string;
  contentText: string;
  company: string;
  date: string;
  href: string;
  imageSrc: string;
};

const ResumeCard: React.FC<CardProps> = ({
  headerText,
  contentText,
  company,
  date,
  href,
  imageSrc,
}) => {
  const router = useRouter();

  const navigate = () => {
    if (href !== "") {
      window.open(href, "_blank"); // Open the link in a new tab
    }
  };

  const cardStyle = {
    backgroundImage: `url('/images/${imageSrc}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    // filter: "grayscale(100%)", // Apply grayscale filter
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
      <div className="md:w-1/2 md:block hidden">
        <div
          className="h-[300px] w-full overflow-hidden cursor-pointer rounded-lg"
          //@ts-ignore
          style={cardStyle}
          onClick={navigate}
        ></div>
      </div>
      <div className="md:w-1/2">
        <h1 className="font-bold text-3xl">{headerText}</h1>
        <p className="pt-3 text-xl">{company} - {date}</p>
        <p className="py-3 text-lg text-slate-500">{contentText}</p>
        <button onClick={navigate} className="text-slate-500 hover:underline">SEE MORE...</button>
      </div>
      <div className="md:w-1/2 md:hidden block">
        <div
          className="h-[150px] w-full overflow-hidden cursor-pointer rounded-lg"
          //@ts-ignore
          style={cardStyle}
          onClick={navigate}
        ></div>
      </div>
    </div>
  );
};

export default ResumeCard;
