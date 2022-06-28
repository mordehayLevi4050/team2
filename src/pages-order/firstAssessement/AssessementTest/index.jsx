import StartFooter from '../../../components/common/StartFooter'
import styles from './style.module.css'
import img from './man.svg'
// Creator : Team2 - eliezer kott
// need to add header
function FirstAssement(){
    return <div>
        <img className={styles.manSitting} src={img} alt="manSittiyng" />
    <StartFooter/>
    </div>
}


export default FirstAssement