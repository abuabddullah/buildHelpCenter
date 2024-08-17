import { Link, useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const { data: card } = useLoaderData();
  console.log(card);
  return (
    <div className="md:p-24 p-8">
      <h1 className="md:text-6xl text-3xl text-center py-4">Card Details</h1>
      <h2 className="md:text-3xl text-lg text-center pb-8 text-green-400">
        <i>{card?.title}</i>
      </h2>
      <div className="mx-auto md:w-2/3 md:p-12 p-8 glass rounded-3xl">
        <p className="text-xl text-justify py-8">
          &quot;{card?.description}&quot;
        </p>
      </div>
      <div className="my-8 text-center">
        <Link to="/">
          <button className="w-1/2 bg-slate-900 text-white p-2 rounded-lg">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardDetails;
