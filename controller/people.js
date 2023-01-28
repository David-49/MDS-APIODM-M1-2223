import PeopleModel from "../model/people.js";

export const getPeoples = async (req, res) => {
  try {
    const peoples = await PeopleModel.find();
    res.json(peoples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOnePeople = async (req, res) => {
  try {
    const people = await PeopleModel.findById(req.params.id);
    res.json(people);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOnePeople = async (req, res) => {
  try {
    const people = await PeopleModel.findByIdAndUpdate(req.params.id, {
      $set: { fields: { name: req.body.name } },
    });
    res.json(people);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
