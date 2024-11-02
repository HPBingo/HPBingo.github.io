function getCards(inVersion, inCardType, inSeed) {
    const opts = {
        seed: inSeed,
        mode: inCardType,
        lang: 'name',
        version: inVersion
    };

    const bingoFunc = bingoGenerator;

    let cards = bingoFunc(bingoList, opts).map(x => {
        return {
            id: x.id || null,
            name: x.name,
            amount: x.amount || 1,
            uniqueAmount: x.uniqueAmount || x.amount || 1,
            triggers: x.triggers || null
        };
    });
    return JSON.stringify(cards);
}