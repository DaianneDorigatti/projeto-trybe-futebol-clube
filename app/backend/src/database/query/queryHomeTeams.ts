export default
// Somar gols tomados, gols feitos e total de pontos, pois será necessário
// pro cálculo dos pontos
`SELECT TRYBE_FUTEBOL_CLUBE.teams.team_name AS name,
SUM(goalOwn) AS goalsOwn,
SUM(goalFavor) AS goalsFavor,
SUM(totalPoints) AS totalPoints,

${/* Lógica dos pontos:
O time vitorioso: marcará +3 pontos;
O time perdedor: marcará 0 pontos;
Em caso de empate: ambos os times marcam +1 ponto.
Contar o total de Jogos: Usar o COUNT(*) para contar tudo o que estiver no total de jogos.
 - Quando o total de pontos for 3 então - vitória
 - Quando o total de pontos for 0 então - derrota
 - Quando o total de pontos for 1 então - empate
https://www.w3schools.com/sql/sql_case.asp */''}

COUNT(*) AS totalGames,
COUNT(CASE
     WHEN totalPoints = 3 
     THEN 1 
     END) AS totalVictories,
COUNT(CASE
     WHEN
     totalPoints = 0 
     THEN 1 
     END) AS totalLosses,
COUNT(CASE
     WHEN
     totalPoints = 1 
     THEN 1 END) AS totalDraws,


${/* Lógica do aproveitamento dos times(efficiency):
 fórmula: [P / (J * 3)] * 100, onde:
P: Total de Pontos;
J: Total de Jogos.
ROUND para fazer o arredondamento pra duas casas decimais
https://www.w3schools.com/sql/func_mysql_round.asp */''}

ROUND((SUM(totalPoints) / (COUNT(*) *3 ) ) * 100 , 2) AS efficiency,

${/* Lógica do saldo de gols(goalsBalance):
 Para calcular Saldo de Gols use a seguinte fórmula: GP - GC, onde:
GP: Gols marcados a favor;
GC: Gols sofridos. */''
}

SUM(goalFavor- goalOwn) AS goalsBalance

${/* Lógica dos pontos:
 - Quando o total de gols a favor for maior que gols tomados, então recebe 3 - Vitória.
 - Quando o total de gols a favor for menor que gols tomados, então recebe 0 - Derrota.
 - Quando o total de gols feitos forem iguais, então recebe 1 - Empate.
 */''}

FROM (
    SELECT home_team_id AS team_id,
        CASE 
            WHEN home_team_goals > away_team_goals THEN 3
            WHEN home_team_goals < away_team_goals THEN 0
            WHEN home_team_goals = away_team_goals THEN 1
            END
            AS "totalPoints",

    home_team_goals
    AS "goalFavor",
    away_team_goals
    AS "goalOwn"
    FROM TRYBE_FUTEBOL_CLUBE.matches
    ${/* Pegar somente as partidas finalizadas */''}
    WHERE TRYBE_FUTEBOL_CLUBE.matches.in_progress = 0)
    AS classificacao    
    ${/* Juntar com a tabela de teams, onde pega pelo id do time */''}
    INNER JOIN 
    TRYBE_FUTEBOL_CLUBE.teams ON classificacao.team_id = TRYBE_FUTEBOL_CLUBE.teams.id    
    ${/* Agrupar pelo nome dos times */''}
    GROUP BY TRYBE_FUTEBOL_CLUBE.teams.team_name
    ${/* Fazer a ordenação dos dados por ordem */''}
    ORDER BY totalPoints DESC, 
    totalVictories DESC, 
    goalsBalance DESC, 
    goalsFavor DESC,
    goalsOwn DESC `;
