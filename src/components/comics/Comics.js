import React, { useEffect, useState } from 'react';
import _get from 'lodash/get';

import * as S from './styles';

const Comics = ({
  comics = [],
}) => {
  return (
      <S.ComicsWrapper>
        {
          comics.map(item => {
            const currComicImg = _get(item, 'thumbnail', {});
            return (
              <S.ComicWrapper key={item.id}>
                <S.ComicImage data-charid={item.id} src={`${currComicImg.path}.${currComicImg.extension}`} />
                <S.Title>{item.title}</S.Title>
              </S.ComicWrapper>
            )
          })
        }
      </S.ComicsWrapper>
      
  );
}

export default Comics;