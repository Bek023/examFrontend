

// eslint-disable-next-line react/prop-types
const H = ({ tagName, children, cn }) => {
	switch (tagName) {
		case "h1":
			return <h1 className={cn} >{children}</h1>
		case "h2":
			return <h2 className={cn} >{children}</h2>;
		case "h3":
			return <h3 className={cn} >{children}</h3>;
		case "h4":
			return <h4 className={cn} >{children}</h4>;
		case "h5":
			return <h5 className={cn} >{children}</h5>;
		case "h6":
			return <h6 className={cn} >{children}</h6>;
		default:
			console.log("OOOPS");
	}
}

export default H;
