
// eslint-disable-next-line react/prop-types
export default function Button({ title, cn, fnc }) {
	return <button onClick={fnc} className={cn} >{title}</button>
}