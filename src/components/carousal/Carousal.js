import React from 'react';
import _get from 'lodash/get';
import tick from '../../icons/tick.png'
import leftArrow from '../../icons/chevron-left.svg'
import rightArrow from '../../icons/chevron-right.svg'

import * as S from './styles';

const Carousal = ({
  characters = [],
  activeCharacters = [],
  onSelectCharacter,
  onClickCarousel,
  disableCarousel
}) => {
  return (
    <div>
      <S.FilterSection data-testid="wrapper-main" disableCarousel={disableCarousel}>
        <S.Arrow src={leftArrow} data-type="prev" onClick={onClickCarousel} />
        {characters.map(item => {
          const selected = activeCharacters.includes((item.id).toString());
          return (
            <S.IconWrapper key={item.id}>
              <S.CharactorImage
                selected={selected}
                data-charid={item.id}
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                onClick={onSelectCharacter}
                data-testid="character"
              />
              {selected && <S.TickIcon src={tick} data-type="tick" />}
            </S.IconWrapper>
          )
        })}
        <S.Arrow src={rightArrow} data-type="next" onClick={onClickCarousel} />
      </S.FilterSection>
    </div>
  );
}

export default Carousal;