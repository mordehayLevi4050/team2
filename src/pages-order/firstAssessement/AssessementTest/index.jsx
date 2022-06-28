import StartFooter from '../../../components/common/StartFooter'
import styles from './style.module.css'
import img from './man.svg'
import img1 from './Vector.svg'
// Creator : Team2 - eliezer kott
// need to add header
function FirstAssement(){
    return <div>
        <img className={styles.manSitting} src={img} alt="manSittiyng" />
    <StartFooter title={"start"} icon={img1}/>
    </div>
}


export default FirstAssement