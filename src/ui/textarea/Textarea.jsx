import classNames from "classnames";
import styles from "./Textarea.module.scss";

const Input = ( {labelText, onChange, name, value, className, placeholder, fixedSize} ) => {
	return <div className={className}>
		<label htmlFor={name} className={styles.label}>{labelText}</label>
		<textarea name={name} id={name} value={value} onChange={onChange} className={ classNames( styles.textarea, {[styles.textareaFixed]: fixedSize} )} placeholder={placeholder ?? labelText}/>
	</div>
}

export default Input;