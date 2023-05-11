import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Teams from './TeamsModel';

class Matches extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    type: INTEGER,
    allowNull: false,
    field: 'home_team_id',
    references: {
      model: 'teams',
      key: 'id',
    },
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeamId: {
    type: INTEGER,
    allowNull: false,
    field: 'away_team_id',
    references: {
      model: 'teams',
      key: 'id',
    },
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
    field: 'in_progress',
  },

}, {
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Matches.belongsTo(Teams, {
  foreignKey: 'homeTeamId',
  as: 'homeTeam',
});

Matches.belongsTo(Teams, {
  foreignKey: 'awayTeamId',
  as: 'awayTeam',
});

Teams.hasMany(Matches, {
  foreignKey: 'homeTeamId',
  as: 'homeTeam',
});

Teams.hasMany(Matches, {
  foreignKey: 'awayTeamId',
  as: 'awayTeam',
});

export default Matches;
