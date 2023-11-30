import styles from "./Input.module.scss";

const Input = ( {labelText, onChange, type = "text", name, value, className, placeholder} ) => {
	return <div className={className}>
		<label htmlFor={name} className={styles.label}>{labelText}</label>
		<input name={name} id={name} type={type} value={value} onChange={onChange} className={styles.input} placeholder={placeholder ?? labelText}/>
	</div>
}

export default Input;