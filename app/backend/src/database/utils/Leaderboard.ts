// import { Op } from 'sequelize';
// import Matches from '../models/MatchesModel';
// import Teams from '../models/TeamsModel';

// class Leaderboard {
//   public name: string;
//   public totalPoints: number;
//   public totalGames: number;
//   public totalVictories: number;
//   public totalDraws: number;
//   public totalLosses: number;
//   public goalsFavor: number;
//   public goalsOwn: number;
//   public goalsBalance: number;
//   public efficiency: number;

//   constructor(name: string) {
//     this.name = name;
//     this.totalPoints = 0;
//     this.totalGames = 0;
//     this.totalVictories = 0;
//     this.totalDraws = 0;
//     this.totalLosses = 0;
//     this.goalsFavor = 0;
//     this.goalsOwn = 0;
//     this.goalsBalance = 0;
//     this.efficiency = 0;
//   }

//   // Pegar a lista de todos os times.
//   // Buscar as partidas finalizadas desse time.
//   public static async findMatchesByTeamId(id: number) {
//     const result = await Matches.findAll({
//       where: {
//         [Op.or]: [
//           { homeTeamId: id },
//           { awayTeamId: id },
//           { inProgress: false },
//         ],
//       },
//     });
//     console.log(result);

//     return result;
//   }

//   public static async findLeaderBoard(_req: Request, _res: Response): Promise<[]> {
//     const result = await Teams.findAll();
//     for (const team of result) {
//       const { id } = team.dataValues;
//     }
//   }
// }

// export default Leaderboard;

// com a lista dos jogos dos times, organizar os dados e contar quantas vitoria, derrotas e empates,
// gol feitos e gols tomados.
//
