// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import _get from 'lodash/get'
import Comics from '../comics/Comics';
import Carousal from '../carousal/Carousal';
import Pagination from '../pagination/Pagination';
import MarvelIcon from '../../icons/marvel-logo.svg';

import * as S from './styles';
import {
  getComics,
  getCharacters,
} from '../../api';

const limit = 6;
export default function HomePage() {
  const [activeCharacters, setActiveCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSearchResult, setShowSearchResult] = useState(false);

  useEffect(() => {
    getCharacters(limit, offset)
      .then(({ data }) => {
        setCharacters(data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [offset]);

  useEffect(() => {
      getComicsByCharacter([], 0);
  }, []);

  function getComicsByCharacter(characters, offset) {
    getComics({ characters, offset })
      .then(({ data }) => {
        setComics(data.results);
        setTotalCount(data.total);
      })
      .catch(err => {
        console.log(err);
      })
  }

  function fetchMoreComics(page) {
    setCurrentPage(page);
    getComicsByCharacter(activeCharacters, page * 10);
  }

  function onSelectCharacter(event) {
    if (showSearchResult) {
      return;
    }
    const charId = event.currentTarget.dataset.charid;
    const indexId = activeCharacters.indexOf(charId);
    const newCharacters = activeCharacters.slice();

    if (indexId === -1) {
      newCharacters.push(charId);
    } else {
      newCharacters.splice(indexId, 1)
    }

    setActiveCharacters(newCharacters);
    getComicsByCharacter(newCharacters);
  }

  function onClickCarousel(event) {
    const type = event.currentTarget.dataset.type;

    if (type === 'next') {
      setOffset(offset + limit);
    } else {
      if (offset == 0) {
        return;
      }
      setOffset(offset - limit);
    }
  }

  function onChangeSearch(event) {
    const { value } = event.currentTarget;
    getComics({ searchKey: value })
      .then(({ data }) => {
        setShowSearchResult(value !== '');
        setComics(data.results);
        setTotalCount(data.total);
      });
  }

  function clearFilter() {
    setActiveCharacters([]);
    setCurrentPage(0);
    getComicsByCharacter([], 0);
  }

  function onPageChange(page) {
    fetchMoreComics(page)
  }

  const activeCharacterNames = activeCharacters.map(item => {
    const curChar = characters.find(char => char.id == item) || {};
    return curChar.name;
  });

  return (
    <div className="homepage">
      <S.StyledHeader>
        <S.Logo src={MarvelIcon} />
        <S.SearchInput aria-label="search" placeholder='Search for comics' onChange={onChangeSearch} />
      </S.StyledHeader>
      <Carousal
        disableCarousel={showSearchResult}
        characters={characters}
        activeCharacters={activeCharacters}
        onSelectCharacter={onSelectCharacter}
        onClickCarousel={onClickCarousel}
      />
      <S.BodyWrapper className="comics-page">
        {
          !showSearchResult ? (
            <div>
              <S.FlexWrapper>
                <div>{`Explore - ${activeCharacterNames.join(', ')}`}</div>
                <button onClick={clearFilter}> Clear all filters </button>
              </S.FlexWrapper>
              <Comics
                comics={comics}
              />
            </div>
          ) : (
            <div>
              <header>Search result</header>
              <Comics
                comics={comics}
              />
            </div>
          )
        }
        <Pagination
          onPageChange={onPageChange}
          totalCount={totalCount}
          currentPage={currentPage}
          pageSize={10}
        />
      </S.BodyWrapper>
    </div>
  );
}
