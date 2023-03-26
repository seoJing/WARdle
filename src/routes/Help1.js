import { useNavigate } from 'react-router-dom';
import styles from '../css/Help.module.css';
import exitImg from '../img/exit.png';
import exImg from '../img/ex.png';

function Help1() {
  const navigate = useNavigate();

  function navigatorToMain() {
    navigate('/');
  }
  function navigateToNextHelp() {
    navigate('/Help2');
  }
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.text1}>
        기본적인 룰은 기존의 wordle과 같습니다
        {<br></br>} 위치O, 자소O = 초록색
        {<br></br>} 위치X, 자소O = 주황색
        {<br></br>} 포함되지 않는 자소 = 회색
      </div>
      <div className={styles.title}>
        WARdle은 2가지 Phase로 나누어 진행됩니다.
      </div>
      <div className={styles.head_text}>Phase1 Wordle</div>
      <img src={exImg} className={styles.ex} alt="ex"></img>
      <div className={styles.page}>Help 1/4</div>
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

export { Help1 };