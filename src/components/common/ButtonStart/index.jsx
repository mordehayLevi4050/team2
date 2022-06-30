import styles from "./style.module.css";
import { ImPlay3 } from "react-icons/im";
import {Link} from 'react-router-dom'
// Creator : Team 2 - eliezer
// to as props
function StartButton(props) {
  return (
    <div className={props.classButton ?? ""}>
      <Link to={props.to} onClick={props.onclick} className={styles.TheButton}>
        <div className={styles.ImPlay3}>
          <ImPlay3 />
        </div>
      </Link>
    </div>
  );
}

export default StartButton;
