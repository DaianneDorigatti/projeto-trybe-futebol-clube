import { QueryTypes } from 'sequelize';
import findAllTeamsHome from '../query/queryHomeTeams';
import sequelize from '../models';

// https://sequelize.org/docs/v6/core-concepts/raw-queries/
// Exemplo:
// const { QueryTypes } = require('sequelize'); => Importação
// const users = await sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT });
// We didn't need to destructure the result here - the results were returned directly

class LeaderboardService {
  public static async findAllHome() {
    const teams = await sequelize.query(findAllTeamsHome, { type: QueryTypes.SELECT });
    return teams;
  }
}

export default LeaderboardService;
