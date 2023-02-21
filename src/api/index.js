

import md5 from 'js-md5';

const base = 'https://gateway.marvel.com:443/v1/public';
const PUBLIC_KEY = '95325aa111902ebfca44e3550d78161e';
const PRIVATE_KEY = 'a971d9c2e2eda9ff7a87e8165e3871bd34e80555';

const ts = Number(new Date());
const hash = md5.create();
hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);

export const getCharacters = function (limit, offset = 0) {
    return fetch(`${base}/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}&limit=${limit}&offset=${offset}`)
        .then(res=>res.json());
}

export const getComics = ({ characters = [], offset = 0, searchKey }) => {
    let url = `${base}/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}&limit=10&offset=${offset}`;
    
    if (characters.length > 0) {
        url += `&characters=${characters.join(',')}`;
    }

    if(searchKey) {
        url += `&titleStartsWith=${searchKey}`;
    }

    return fetch(url)
        .then(res=>res.json());;
}