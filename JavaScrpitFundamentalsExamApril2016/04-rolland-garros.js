function rollandGarros(matches) {
    let players = new Map();
    let pattern = /([A-Za-z]+)\s+([A-Za-z]+)\s*vs.\s*([A-Za-z]+)\s+([A-Za-z]+)\s*:\s*(([0-7]-[0-7]\s*){1,5})/;
    for (let tennisMatch of matches) {
        let match = pattern.exec(tennisMatch);
        let player1 = match[1] + ' ' + match[2];
        if (!players.has(player1)) {
            players.set(player1, {
                name: player1,
                matchesWon: 0,
                matchesLost: 0,
                setsWon: 0,
                setsLost: 0,
                gamesWon: 0,
                gamesLost: 0
            });
        }
        let player2 = match[3] + ' ' + match[4];
        if (!players.has(player2)) {
            players.set(player2, {
                name: player2,
                matchesWon: 0,
                matchesLost: 0,
                setsWon: 0,
                setsLost: 0,
                gamesWon: 0,
                gamesLost: 0
            });
        }
        let sets = match[5].split(/\s+/);
        let player1SetsWon = 0;
        let player2SetsWon = 0;
        for (let set of sets) {
            let [player1GamesWonThisSet, player2GamesWonThisSet] = set.split('-');
            player1GamesWonThisSet = Number(player1GamesWonThisSet);
            player2GamesWonThisSet = Number(player2GamesWonThisSet);
            if (player1GamesWonThisSet > player2GamesWonThisSet) {
                player1SetsWon++;
            } else if (player1GamesWonThisSet < player2GamesWonThisSet) {
                player2SetsWon++;
            }

            players.get(player1).gamesWon += player1GamesWonThisSet;
            players.get(player1).gamesLost += player2GamesWonThisSet;
            players.get(player2).gamesWon += player2GamesWonThisSet;
            players.get(player2).gamesLost += player1GamesWonThisSet;
        }

        players.get(player1).setsWon += player1SetsWon;
        players.get(player1).setsLost += player2SetsWon;
        players.get(player2).setsWon += player2SetsWon;
        players.get(player2).setsLost += player1SetsWon;
        if (player1SetsWon > player2SetsWon) {
            players.get(player1).matchesWon++;
            players.get(player2).matchesLost++;
        } else if (player1SetsWon < player2SetsWon) {
            players.get(player2).matchesWon++;
            players.get(player1).matchesLost++;
        }
    }

    let result = [];
    for (let [player, playerData] of players) {
        result.push(playerData);
    }

    result= result.sort((a, b) => {
        if (a.matchesWon == b.matchesWon) {
            if (a.setsWon == b.setsWon) {
                if (a.gamesWon == b.gamesWon) {
                    return a.name.localeCompare(b.name);
                }

                return b.gamesWon - a.gamesWon;
            }

            return b.setsWon - a.setsWon;
        }

        return b.matchesWon - a.matchesWon;
    });

    console.log(JSON.stringify(result));
}