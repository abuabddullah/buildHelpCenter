import { useEffect, useState } from "react";
import SingleCard from "../components/home/SingleCard";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [dataFetchLoading, setDataFetchLoading] = useState(true);

  const [searchKey, setSearchKey] = useState("");
  const [filteredCards, setFilteredCards] = useState(cards);

  // Fetch the cards from the server
  useEffect(() => {
    fetch("http://localhost:5000/cards")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.data);
        setDataFetchLoading(false);
      });
  }, []);

  // Filter cards based on the searchKey
  useEffect(() => {
    setFilteredCards(
      cards.filter(
        (card) =>
          card.title.toLowerCase().includes(searchKey.toLowerCase()) ||
          card.description.toLowerCase().includes(searchKey.toLowerCase())
      )
    );
  }, [searchKey, cards]);

  if (dataFetchLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section>
      <div className="bg-[#DADBF0] md:p-20 p-10 grid gap-4 md:gap-8 items-center justify-center">
        <h1 className="md:text-6xl text-3xl text-center">How can we help?</h1>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)} // Update searchKey on input change
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        
      </div>
      <div className="md:p-20 p-10 grid md:grid-cols-2 gap-8 justify-items-center">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => <SingleCard card={card} key={card._id} />)
        ) : (
          <p>No results found</p>
        )}
      </div>
    </section>
  );
};

export default Home;
