import styles from '../css/Help.module.css';
import exitImg from '../img/exit.png';
import exImg1 from '../img/ex.png';
import exImg2 from '../img/ex2.png';
import exImg3 from '../img/ex3.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Help({ buttonSound1, buttonSound2 }) {
  const [exImg, setExImg] = useState(0);
  const [contents, setContents] = useState(<></>);
  const [page, setPage] = useState(0);
  if (page > 3) setPage(0);
  if (exImg > 3) setExImg(0);

  const getImageSrc = () => {
    switch (exImg) {
      case 0:
        return exImg1;
      case 1:
        return exImg1;
      case 2:
        return exImg2;
      case 3:
        return exImg3;
      default:
        return '';
    }
  };

  useEffect(() => {
    if (page === 0) {
      setContents(
        <div className={styles.text}>
          Phase1은 한국어 단어 맞추기 입니다.
          {<br></br>} 6개의 자모로 이루어진 단어를 입력하여,
          {<br></br>} 정답 단어에 대한 힌트를 얻어보세요!
          {<br></br>}
          {<br></br>} 왼쪽 예시 처럼, 입력한 단어와
          {<br></br>} 정답 단어의 자모를 비교하여
          {<br></br>}
          {<br></br>} 정답과 위치, 자모가 일치한다면 초록
          {<br></br>} 위치는 다르지만, 자모가 포함하고 있다면 주황
          {<br></br>} 정답에 없는 자모라면 회색이 됩니다!
        </div>
      );
    } else if (page === 1) {
      setContents(
        <div className={styles.text}>
          또한, Phase1을 진행하면 스코어를 얻으며,
          {<br></br>} 초록 힌트는 + 10점, 주황 힌트는 + 5점입니다.
          {<br></br>}
          {<br></br>} Phase1에서 얻은 스코어는 Phase2에서
          {<br></br>} 목숨처럼 사용할 수 있습니다.
          {<br></br>} 얻은 스코어가 높다면,
          {<br></br>} Phase2에서의 제한시간이 늘어납니다.
          {<br></br>}
          {<br></br>} 하지만, Phase1에서 입력한 횟수가 많아지면,
          {<br></br>} Phase2의 난이도가 급격히 올라갑니다!
        </div>
      );
    } else if (page === 2) {
      setContents(
        <div className={styles.text}>
          Phase1 에서 나온 초록색, 주황색, 회색 힌트는
          {<br></br>} Phase2에서 발판과 장애물이 됩니다.
          {<br></br>}
          {<br></br>} 초록 힌트는 발판을 제공하고,
          {<br></br>} 주황 힌트도 발판을 제공하지만,
          {<br></br>} 발판 주위를 회전하는 장애물 또한 생성합니다.
          {<br></br>} 장애물에 부딪히면 10점이 줄어듭니다.
          {<br></br>}
          {<br></br>} 또한, 회색 발판은 좌우로 움직여
          {<br></br>} 이동을 방해합니다.
        </div>
      );
    } else if (page === 3) {
      setContents(
        <div className={styles.text}>
          스코어가 0이 되기 전에 제일 위로 올라가,
          {<br></br>} 게임을 클리어해 보세요!
          {<br></br>}
          {<br></br>} +) Phase1에서 입력 가능한 단어는
          {<br></br>} 어떤 '단어'라면 모두 가능합니다.
          {<br></br>} 사전에 등록되어 있지 않는 단어도
          {<br></br>} 가능하지만, 단어가 아니라면 입력이
          {<br></br>} 안됩니다.
          {<br></br>} +) 가급적 새로고침을 지향해 주세요
          {<br></br>} 새로고침 시 게임오버 판정입니다.
        </div>
      );
    }
  }, [page]);

  const navigate = useNavigate();
  const navigatorToMain = () => {
    buttonSound1.play();
    navigate('/');
  };
  const navigateToNextHelp = () => {
    buttonSound2.play();
    setPage((current) => current + 1);
    setExImg((current) => current + 1);
  };
  return (
    <>
      <div className={styles.background}></div>
      {contents}
      <div className={styles.title}>
        WARdle은 2가지 Phase로 나누어 진행됩니다.
      </div>
      <img src={getImageSrc()} className={styles.ex} alt="ex"></img>
      <div className={styles.page}>Help {page + 1}/4</div>
      <img
        src={exitImg}
        className={styles.exit_button}
        onClick={navigatorToMain}
        alt="exit_button"
      ></img>
      <div
        className={styles.next_help_button}
        onClick={navigateToNextHelp}
      ></div>
    </>
  );
}

export { Help };
