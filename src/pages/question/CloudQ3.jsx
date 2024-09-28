import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/question/CloudQ3.module.css';
import line from "/src/assets/images/question-line.svg";
import backBtn from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeBtn from "/src/assets/images/home-button.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";

const CloudQ3 = () => {
  const [selected, setSelected] = useState("");
  const backupOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();

  const handleClick = (cloudBackup) => {
    if (selected === cloudBackup) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(cloudBackup); // 클릭된 버튼을 선택
    }
  };

  const goNext = () => {
    if (selected) {
      navigate('/cloudq4');
    } else {
      alert('옵션을 선택해주세요.');
    }
  };

  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.back} onClick={goBack}>
          <img src={backBtn} alt="backbutton" className={styles.backbutton} />
        </button>
        <button className={styles.home}>
          <img src={homeBtn} alt="homebutton" className={styles.homebutton} />
        </button>
      </header>
      <div className={styles.questionStep}>
        <div className={styles.line}>
          <img src={line} alt="line" className={styles.line} />
        </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.activePage}>Step 3</div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>사진 및 동영상 저장을 위한 자동 백업<br/>기능이 필요하신가요?
        </p>
      </div>
      <div className={styles.backupOptions} ref={backupOptionsRef}>
      <button
          className={`${styles.cloudBackupBtn} ${selected.includes("yes") ? styles.selected : ""}`}
          onClick={() => handleClick("yes")}
        >
          네
        </button>
        <button
          className={`${styles.cloudBackupBtn} ${selected.includes("no") ? styles.selected : ""}`}
          onClick={() => handleClick("no")}
        >
          아니요
        </button>
      </div>
      <div>
        <button className={styles.next} onClick={goNext}>
          <img src={arrowIcon} alt="arrow" className={styles.arrow} />
        </button>
      </div>
    </div>
  );
};

export default CloudQ3;
