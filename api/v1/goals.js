function getCards(inVersion, inCardType, inSeed) {
    const opts = {
        seed: inSeed,
        mode: inCardType,
        lang: 'name',
        version: inVersion
    };

    const bingoFunc = bingoGenerator;

    let cards = bingoFunc(bingoList, opts).map(x => { id = x.id, name = x.name });
    return JSON.stringify(cards);
}