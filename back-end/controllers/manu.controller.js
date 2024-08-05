import Manufacturer from "../models/manufacturer.model.js";

export const createManufacturer = async (req, res) => {
  try {
    const { name, location, contact, email, establishedYear, website } = req.body;

    // Validate required fields
    if (!name || !location || !contact || !email || !establishedYear) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the manufacturer already exists
    const existingManufacturer = await Manufacturer.findOne({ name });
    if (existingManufacturer) {
      return res.status(400).json({ error: "Manufacturer already exists" });
    }

    const newManufacturer = new Manufacturer({
      name,
      location,
      contact,
      email,
      establishedYear,
      website
    });

    const savedManufacturer = await newManufacturer.save();
    res.status(201).json(savedManufacturer);
  } catch (error) {
    console.log("Error in createManufacturer controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getManufacturers = async (req, res) => {
  try {
    const manufacturers = await Manufacturer.find();
    res.status(200).json(manufacturers);
  } catch (error) {
    console.log("Error in getManufacturers controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getManufacturerById = async (req, res) => {
  try {
    const { id } = req.params;

    const manufacturer = await Manufacturer.findById(id);
    if (!manufacturer) {
      return res.status(404).json({ error: "Manufacturer not found" });
    }

    res.status(200).json(manufacturer);
  } catch (error) {
    console.log("Error in getManufacturerById controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateManufacturer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, contact, email, establishedYear, website } = req.body;

    const updatedManufacturer = await Manufacturer.findByIdAndUpdate(
      id,
      { name, location, contact, email, establishedYear, website },
      { new: true }
    );

    if (!updatedManufacturer) {
      return res.status(404).json({ error: "Manufacturer not found" });
    }

    res.status(200).json(updatedManufacturer);
  } catch (error) {
    console.log("Error in updateManufacturer controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteManufacturer = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedManufacturer = await Manufacturer.findByIdAndDelete(id);
    if (!deletedManufacturer) {
      return res.status(404).json({ error: "Manufacturer not found" });
    }

    res.status(200).json({ message: "Manufacturer deleted successfully" });
  } catch (error) {
    console.log("Error in deleteManufacturer controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
