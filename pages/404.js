import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NotFound = () => {

	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			// router.go(-1);
			router.push("/");
		}, 3000);
	}, []);


	return (
		<div className="not-found">
			<h2>Oooops...</h2>
			<p>That page cannot be found.</p>
			<p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
		</div>
	);
};

export default NotFound;
