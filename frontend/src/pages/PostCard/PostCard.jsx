import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostCard = () => {
  const navigate = useNavigate();
  const [cardDetails, setCardDetails] = useState({
    title: "",
    description: "",
    link: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (cardDetails) {
      try {
        // for submitting form with data
        const response = await axios.post(
          "http://localhost:5000/cards",
          cardDetails
        );
        alert(response.data.message);

        navigate(`/`);
      } catch (error) {
        // if any error submitting form
        console.error("Error during posting event:", error);
        const axiosError = error; // ??? returns axiosError-object= {res,req,message}

        // Default error message
        let errorMessage = axiosError.response?.data.message;
        ("There was a problem with your posting event. Please try again."); // ???

        alert(errorMessage);
      }
    }
  };

  return (
    <div className="md:p-24 p-8">
      <h1 className="md:text-6xl text-3xl text-center py-4">Post a new Card</h1>
      <form
        onSubmit={handleFormSubmit}
        className="md:w-2/3 md:p-12 p-8 mx-auto grid grid-cols-1 gap-8"
      >
        <label className="input input-bordered flex items-center gap-2">
          <strong>Title</strong>
          <input
            type="text"
            className="grow"
            placeholder="here ..."
            onChange={(e) =>
              setCardDetails({ ...cardDetails, title: e.target.value })
            }
          />
        </label>
        <label className="md:flex items-center gap-2">
          <strong>Description</strong>
          <textarea
            className="grow input input-bordered flex items-center gap-2 md:mt-0 mt-4 p-2"
            placeholder="here ..."
            onChange={(e) =>
              setCardDetails({ ...cardDetails, description: e.target.value })
            }
          ></textarea>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <strong>Link</strong>
          <input
            type="text"
            className="grow"
            placeholder="here ..."
            onChange={(e) =>
              setCardDetails({ ...cardDetails, link: e.target.value })
            }
          />
          <span className="badge badge-info">Optional</span>
        </label>
        <div className="my-8 text-center">
          <button
            type="submit"
            className="w-1/2 bg-slate-900 text-white p-2 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCard;
