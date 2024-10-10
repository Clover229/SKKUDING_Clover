"use strict";
const PoketmonList = new Map();
PoketmonList.set('Bulbasaur', {
    height: '7',
    weight: '69',
    types: ['grass', 'poison'],
    'base-Experience': '64',
    abilities: ['overgrow', 'chlorophyll'],
    hp: '45',
    attack: '49',
    defense: '49',
    'special-attack': '65',
    'special-defense': '65',
    speed: '45',
})
    .set('Ivysaur', {
    height: '10',
    weight: '130',
    types: ['grass', 'poison'],
    'base-Experience': '142',
    abilities: ['overgrow', 'chlorophyll'],
    hp: '60',
    attack: '62',
    defense: '63',
    'special-attack': '80',
    'special-defense': '80',
    speed: '60',
})
    .set('Venusaur', {
    height: '20',
    weight: '1000',
    types: ['grass', 'poison'],
    'base-Experience': '236',
    abilities: ['overgrow', 'chlorophyll'],
    hp: '80',
    attack: '82',
    defense: '83',
    'special-attack': '100',
    'special-defense': '100',
    speed: '80',
})
    .set('Charmander', {
    height: '6',
    weight: '85',
    types: ['fire'],
    'base-Experience': '62',
    abilities: ['blaze', 'solar-power'],
    hp: '39',
    attack: '52',
    defense: '43',
    'special-attack': '60',
    'special-defense': '50',
    speed: '65',
})
    .set('Charmeleon', {
    height: '11',
    weight: '190',
    types: ['fire'],
    'base-Experience': '142',
    abilities: ['blaze', 'solar-power'],
    hp: '58',
    attack: '64',
    defense: '58',
    'special-attack': '80',
    'special-defense': '65',
    speed: '80',
})
    .set('Charizard', {
    height: '17',
    weight: '905',
    types: ['fire', 'flying'],
    'base-Experience': '240',
    abilities: ['blaze', 'solar-power'],
    hp: '78',
    attack: '84',
    defense: '78',
    'special-attack': '109',
    'special-defense': '85',
    speed: '100',
})
    .set('Squirtle', {
    height: '5',
    weight: '90',
    types: ['water'],
    'base-Experience': '63',
    abilities: ['torrent', 'rain-dish'],
    hp: '44',
    attack: '48',
    defense: '65',
    'special-attack': '50',
    'special-defense': '64',
    speed: '43',
})
    .set('Wartortle', {
    height: '10',
    weight: '225',
    types: ['water'],
    'base-Experience': '142',
    abilities: ['torrent', 'rain-dish'],
    hp: '59',
    attack: '63',
    defense: '80',
    'special-attack': '65',
    'special-defense': '80',
    speed: '58',
})
    .set('Blastoise', {
    height: '16',
    weight: '855',
    types: ['water'],
    'base-Experience': '239',
    abilities: ['torrent', 'rain-dish'],
    hp: '79',
    attack: '83',
    defense: '100',
    'special-attack': '85',
    'special-defense': '105',
    speed: '78',
})
    .set('Caterpie', {
    height: '3',
    weight: '29',
    types: ['bug'],
    'base-Experience': '39',
    abilities: ['shield-dust', 'run-away'],
    hp: '45',
    attack: '30',
    defense: '35',
    'special-attack': '20',
    'special-defense': '20',
    speed: '45',
});
//let cards = document.querySelectorAll('.card');
let index = 0;
let contentCard = document.querySelector(".content");
//����ǥ�� �ǹ�: content�� null�� �ݵ�� �ƴϴ�
//querySelector ��� getbyElementbyClassName�� ����� �ȵ���. ����/
PoketmonList.forEach((pokemon, name) => {
    let card = document.createElement('div');
    card.classList.add("card");
    let currentIndex = index + 1;
    card.addEventListener('click', () => {
        window.location.href = './detailJS.html';
        window.localStorage.setItem("pokemon", JSON.stringify(Object.assign({ id: currentIndex, name: name }, pokemon)));
    });
    const imgcard = document.createElement("img");
    imgcard.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`;
    let infoWrapper = document.createElement('div');
    infoWrapper.classList.add('info-wrapper');
    let nameElement = document.createElement('h1');
    nameElement.textContent = name;
    let heightElement = document.createElement('div');
    heightElement.textContent = 'Height: ' + pokemon.height;
    let weightElement = document.createElement('div');
    weightElement.textContent = 'Weight: ' + pokemon.weight;
    //innertext�� textContext ����? textContext�� ��Ÿ�ϱ��� �����´�
    let typesElement = document.createElement('div');
    typesElement.innerText = 'Types: ' + pokemon.types.join(', ');
    infoWrapper.append(nameElement, heightElement, weightElement, typesElement);
    card.append(imgcard);
    card.append(infoWrapper);
    contentCard.append(card);
    index++;
});
