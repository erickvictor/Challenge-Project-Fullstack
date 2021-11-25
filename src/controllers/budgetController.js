const { Budget } = require("../models");

const budgetController = {
  async createBudget(req, res) {
    const { name, email, message } = req.body;

    try {
      const result = await Budget.create({
        name,
        email,
        message,
      });
      return res.redirect("/");
    } catch (error) {
      return res.redirect("/");
      console.log("error:" + error);
    }
  },
};

module.exports = budgetController;