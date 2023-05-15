import Matches from '../models/MatchesModel';
import Teams from '../models/TeamsModel';

class MatchesService {
  public static async findAll(inProgress: unknown): Promise<Matches[]> {
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

  public static async matchFinish(id: number): Promise<void> {
    const response = await Matches.findByPk(id);
    if (!response) { throw new Error('Match not found!'); }
    await response.update({
      inProgress: false,
    }, {
      where: { id },
    });
  }
}

export default MatchesService;
