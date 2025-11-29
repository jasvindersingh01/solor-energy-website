const Contact = require("../models/Contact");

exports.submitForm = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    const newLead = new Contact({ name, phone, email, message });
    await newLead.save();

    return res.status(201).json({
      success: true,
      message: "Form submitted successfully!",
      data: newLead
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};
