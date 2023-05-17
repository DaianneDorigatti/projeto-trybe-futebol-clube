import Matches from '../models/MatchesModel';
import Teams from '../models/TeamsModel';

class MatchesService {
  public static async findFinishedMatches(inProgress: unknown): Promise<Matches[]> {
    const matches = await Matches.findAll({
      include: [
        {
          model: Teams,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: Teams,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });

    if (inProgress === 'true') return matches.filter((match) => match.inProgress === true);
    if (inProgress === 'false') return matches.filter((match) => match.inProgress === false);

    return matches;
  }

  public static async updatingFinishMatches(id: number): Promise<void> {
    const matchId = await Matches.findByPk(id);
    if (!matchId) { throw new Error('Match not found!'); }
    // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-update-queries
    await matchId.update({
      inProgress: false,
    }, {
      where: { id },
    });
  }

  public static async updatingResultMatches(id: number, homeTeamGoals:number, awayTeamGoals:number):
  Promise<void> {
    const matchId = await Matches.findByPk(id);
    if (!matchId) { throw new Error('Match not found!'); }
    // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-update-queries
    await matchId.update({
      homeTeamGoals,
      awayTeamGoals,

    }, {
      where: { id },
    });
  }

  //   public static async createMatches(

  //     homeTeamId:number,
  //     awayTeamId:number,
  //     homeTeamGoals:number,
  //     awayTeamGoals:number,

//   ):
//     Promise<Matches> {
//     const newMatch = await Matches.create({ homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals });
//     return newMatch;
//   }
}

export default MatchesService;
