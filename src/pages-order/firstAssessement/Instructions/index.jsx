import Button_w140_w383_Link from "../../../components/common/Button w140-OR-w383 Link";
import Text from "../../../components/common/Text/Text";
import Line from "../../../components/common/Line/Line";
import Movies from "../../../components/common/Movies";
import Title from "../../../components/common/Title/Title";
import styles from "./style.module.css";

// Creator : Team B - Motty
function Instructions() {
  return (
    <>
      {" "}
      <div className={styles.movies}>
        <Movies />
      </div>
      <div className={styles.titel}>
        <Title
          className={styles.titel}
          title="
    The standard Lorem Ipsum passage, used since the 1500
    
    "
        />
      </div>
      <div className={styles.line}>
        <Line />
      </div>
      <div className={styles.text}>
        <Text Text=" The standard Lorem Ipsum passage, used since the 1500 Consectetur fames feugiat interdum morbi placerat in. Leo commodo maecenas donec cursus aenean scelerisque eu. Ridiculus amet habitant gravida lobortis suscipit enim, consectetur quisque. Mauris nisi volutpat amet et. Id pretium urna tempor, augue lectus sit faucibus. Consequat ultricies lectus et est, semper vitae, varius lobortis " />
      </div>
      <div className={styles.button}>
        <Button_w140_w383_Link text="next" href="SetCameraFace" />
      </div>
    </>
  );
}

export default Instructions;
