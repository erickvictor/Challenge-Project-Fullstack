module.exports = (conection, DataTypes) => {
  const Budget = conection.define(
    "Budget",
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(200),
      },
      email: {
        type: DataTypes.STRING(200),
      },
      message: {
        type: DataTypes.STRING(500),
      },
      create_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "Budgets",
      timestamps: false,
    }
  );

  return Budget;
};