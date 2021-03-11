import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
	return (
		<nav className="nav-bar">
			<div className="logo">
				<Image src="/logo.svg" width={100} height={100} />
			</div>
			<Link href="/"><a>Home</a></Link>
			<Link href="/about"><a>About</a></Link>
			<Link href="/users"><a>Users List</a></Link>
		</nav>
	);
};

export default NavBar;
