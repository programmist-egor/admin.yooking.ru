import { DataTypes } from 'sequelize';
import {sequelizeAdmin} from '../config/db-connect.js';


const Statistic = sequelizeAdmin.define('Statistic', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    statsId: {
        type: DataTypes.STRING,
    },
    statisticData: {
        type: DataTypes.JSON,
        allowNull: false,
    },
});

export default Statistic;