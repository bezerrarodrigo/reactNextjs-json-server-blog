import React from "react";
import Link from "next/link";

const NavBar = () => {
	return (
		<nav className="nav-bar">
			<div className="logo">
				<h1>GamesList</h1>
			</div>
			<Link href="/"><a>Home</a></Link>
			<Link href="/about"><a>About</a></Link>
			<Link href="/games"><a>Games List</a></Link>
		</nav>
	);
};

export default NavBar;
