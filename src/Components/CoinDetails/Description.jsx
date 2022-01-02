import parse from "html-react-parser";
const Description = ({ coinDetails }) => {
  const coin = coinDetails?.data?.coin;
  return (
    <article className="prose prose-zinc font-medium prose-base prose-headings:text-white prose-p:text-[#646B80] prose-strong:text-white prose-a:text-red-500 mt-4">
      <div className="text-white">What is {coin.name}?</div>
      <div>{parse(coin.description)}</div>
    </article>
  );
};

export default Description;
