module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
  }, { tablename: 'Tasks', timestamps: false });
  return Task;
};