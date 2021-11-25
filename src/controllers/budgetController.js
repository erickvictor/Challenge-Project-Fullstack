const { Budget } = require("../models");

const budgetController = {
  async createBudget(req, res) {
    const { name, email, message } = req.body;

    try {
      const result = await Budget.create({
        name,
        email,
        message,
        createAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
      });
      console.log(result);
      return res.redirect("/");
    } catch (error) {
      console.log("error:" + error);
      return res.redirect("/");
    }
  },
};

module.exports = budgetController;