const CardModel = require("../models/CardModel");

exports.postACard = async (req, res, next) => {
  const { title, description } = req.body;
  try {
    // Check if a card with the same title already exists
    const existingCard = await CardModel.findOne({ title });
    if (existingCard) {
      return res
        .status(400)
        .json({ message: "A card with this title already exists" });
    }

    // Create a new card if the title is unique
    const newCard = await CardModel.create({ title, description });
    res.status(200).json({
      success: true,
      message: "posted A Card",
      data: newCard,
    });
  } catch (error) {
    next(error);
    /* if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation error", details: error.message });
    }
    res.status(500).json({ message: "Server error" }); */
  }
};
exports.getAllCards = async (req, res, next) => {
  try {
    const cards = await CardModel.find();
    res.status(200).json({
      success: true,
      message: "getAllCards",
      data: cards,
    });
  } catch (error) {
    next(error);
  }
};
exports.getAllCardByTitle = async (req, res) => {
  const cardTitle = req.params.title;
  try {
    const card = await CardModel.findOne({ title: cardTitle });
    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "getAllCardByTitle",
      data: card,
    });
  } catch (error) {
    next(error);
    // res.status(500).json({ message: "Server error" });
  }
};
