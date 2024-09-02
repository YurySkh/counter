import s from '../styles/Styles.module.css'

type DisplayPropsType = {
	counter: number
	maxСounterValue: number
}

export function Display ({counter, maxСounterValue}: DisplayPropsType) {
	return (
	  <div className={s.display}>
		<span className={counter === maxСounterValue ? s.indicationInRed : ''}>{counter}</span>
	  </div>
	);
 }
