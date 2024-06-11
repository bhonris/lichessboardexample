import { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { CustomSquareStyles, Square } from 'react-chessboard/dist/chessboard/types';
import { STARTING_POSITION } from './src/constants';

const CIRCLE_IMAGE = `url('./orange-circle-transparent.png')`;

const App: React.FC = () => {
  const [rightClickedSquares, setRightClickedSquares] = useState<CustomSquareStyles>({});

  function onSquareRightClick(square: Square) {
    setRightClickedSquares({
      ...rightClickedSquares,
      [square]:
        rightClickedSquares[square] &&
        rightClickedSquares[square]?.backgroundImage === CIRCLE_IMAGE
          ? undefined
          : { backgroundImage: CIRCLE_IMAGE, backgroundSize: "cover" },
    });
  }

  return (
    <div>
      <Chessboard 
        id="BasicBoard"
        position={STARTING_POSITION}
        boardWidth={700}
        customLightSquareStyle={{backgroundColor: '#D2AF91'}}
        customDarkSquareStyle={{backgroundColor: '#AA4042'}}
        onSquareRightClick={onSquareRightClick}
        customSquareStyles={{
          ...rightClickedSquares,
        }}
      />
    </div>
  );
}

export default App;