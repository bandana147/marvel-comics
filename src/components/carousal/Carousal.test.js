import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import Carousal from './Carousal';

const onSelectCharacter = jest.fn();
const onClickCarousel = jest.fn();

const props = {
  characters: [
    {
      "id": 1011334,
      "name": "3-D Man",
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
        "extension": "jpg"
      }
    },
    {
      "id": 1017100,
      "name": "A-Bomb (HAS)",
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        "extension": "jpg"
      }
    },
    {
      "id": 1009144,
      "name": "A.I.M.",
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
        "extension": "jpg"
      }
    },
    {
      "id": 1010699,
      "name": "Aaron Stack",
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        "extension": "jpg"
      }
    },
    {
      "id": 1009146,
      "name": "Abomination (Emil Blonsky)",
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
        "extension": "jpg"
      }
    },
    {
      "id": 1016823,
      "name": "Abomination (Ultimate)",
      "description": "",
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        "extension": "jpg"
      }
    }
  ],
  onSelectCharacter,
  onClickCarousel
}

test('renders correct carousel item', () => {
  render(<Carousal {...props} />);
  const characterElement = screen.getAllByRole('img');
  const iconLength = 2;
  expect(characterElement).toHaveLength(props.characters.length + iconLength);
});

test('if onSelectCharacter is called from props when charactor item is clicked', () => {
  const { container } = render(<Carousal {...props} />)
  const characterItem = container.querySelector('[data-charid="1011334"]');
  fireEvent.click(characterItem);
  expect(onSelectCharacter).toHaveBeenCalled();
});

test('if onClickCarousel is called from props when previous icon is clicked', () => {
  const { container } = render(<Carousal {...props} />)
  const carousalArrow = container.querySelector('[data-type="prev"]')
  fireEvent.click(carousalArrow);
  expect(onClickCarousel).toHaveBeenCalled();
});

test('if onClickCarousel is called from props when next icon is clicked', () => {
  const { container } = render(<Carousal {...props} />)
  const carousalArrow = container.querySelector('[data-type="next"]');
  fireEvent.click(carousalArrow);
  expect(onClickCarousel).toHaveBeenCalled();
});

test('if ticked icon is rendered when character is selected', () => {
  const activeCharacters = ['1011334']
  const { container } = render(<Carousal {...props} activeCharacters={activeCharacters}/>)
  const tickIcon = container.querySelectorAll('[data-type="tick"]');

  expect(tickIcon).toHaveLength(activeCharacters.length);
});

test('if carousel click is disabled when disableCarousel is passed true', () => {
  render(<Carousal {...props} disableCarousel={true}/>)
  const element = screen.getByTestId('wrapper-main');
  const styles = getComputedStyle(element);
  expect(styles.pointerEvents).toBe('none');
});


