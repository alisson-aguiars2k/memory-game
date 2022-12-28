import { useEffect, useState } from "react";

import * as C from "./App.styles";

import logoImage from "./assets/images/logo.png";
import RestartIcon from "./assets/images/restart.svg";

import { Button } from "./components/Button";
import { InfoItem } from "./components/InfoItem";
import { GridItem } from "./components/GridItem";

import { GridItemType } from "./types/GridItemType";

import { items } from "./data/items";

import { formatTimeElapsed } from "./helpers/formatTimeElapsed";

function App() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElepsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => resetAndCreateGrid(), []);

  // time
  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setTimeElepsed(timeElapsed + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  // verify if opened are equal
  useEffect(() => {
    if (shownCount === 2) {
      let opened = gridItems.filter((item) => item.shown === true);
      if (opened.length === 2) {
        // verifying
        if (opened[0].item === opened[1].item) {
          //  verify one - se eles são iguais torná-los permanentes
          let tmpGrid = [...gridItems];
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            }
          }
          setGridItems(tmpGrid);
          setShownCount(0);
        } else {
          // verify two - Se eles não são iguais, feche todos.
          setTimeout(() => {
            let tmpGrid = [...gridItems];
            for (let i in tmpGrid) {
              tmpGrid[i].shown = false;
            }
            setGridItems(tmpGrid);
            setShownCount(0);
          }, 1000);
        }
        setMoveCount((moveCount) => moveCount + 1);
      }
    }
  }, [shownCount, gridItems]);

  const resetAndCreateGrid = () => {
    // Passo 1 - resetar o jogo
    setTimeElepsed(0);
    setMoveCount(0);
    setShownCount(0);

    // Passo 2 criar o grid e começar o jogo
    // 2.1 - criar um grid vazio
    let tpmGrid: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++)
      tpmGrid.push({
        item: null,
        shown: false,
        permanentShown: false,
      });
    // 2.2 - preencher o grid
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        while (pos < 0 || tpmGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tpmGrid[pos].item = i;
      }
    }
    // 2.3 - jogar no state
    setGridItems(tpmGrid);

    //  Passo 3 - começar o jogo
    setPlaying(true);
  };

  const handleItemClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let tmpGrid = [...gridItems];

      if (
        tmpGrid[index].permanentShown === false &&
        tmpGrid[index].shown === false
      ) {
        tmpGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }

      setGridItems(tmpGrid);
    }
  };

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink>
          <img src={logoImage} width="100" alt="" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label="Movimentos" value={moveCount.toString()} />
        </C.InfoArea>

        <Button
          label="Reiniciar"
          icon={RestartIcon}
          onClick={resetAndCreateGrid}
        />
      </C.Info>

      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            ></GridItem>
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
}

export default App;
