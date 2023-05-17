import TeamsModel from '../models/TeamsModel';

class TeamsService {
  public static async findAll(): Promise<TeamsModel[]> {
    const teams = await TeamsModel.findAll();
    return teams;
  }

  public static async findById(id: number): Promise<TeamsModel> {
    const teamId = await TeamsModel.findOne({
      where: { id },
    });
    if (!teamId) {
      throw new Error('Team not found!');
    }

    return teamId.toJSON();
  }
}

export default TeamsService;
