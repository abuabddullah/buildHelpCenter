import { useNavigate } from "react-router-dom";

const SingleCard = ({ card }) => {
  const navigate = useNavigate();
  const handleDetails = (link) => {
    if (link) {
      navigate(link);
    }
    navigate(`/cards/${card?.title}`)
  };
  return (
    <div
      onClick={() => handleDetails(card?.link)}
      className="bg-[#F4F6F8] rounded-xl border md:w-96 min-h-44 cursor-pointer"
    >
      <div className="px-6 pb-1 pt-4 text-xl">
        <strong>{card?.title}</strong>
      </div>
      <hr />
      <div className="px-6 py-3 text-lg">{card?.description}</div>
    </div>
  );
};

export default SingleCard;
