import TeamsModel from '../models/TeamsModel';

class TeamsService {
  public static async findAll(): Promise<TeamsModel[]> {
    const teams = await TeamsModel.findAll();
    return teams;
  }
}

export default TeamsService;
