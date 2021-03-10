import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";


export default function Home() {
	return (
		<div>
			<h1 className={styles.title}>Homepage</h1>
			<p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti soluta sapiente cum at possimus ea! Ipsum veniam voluptates sequi! Tempora, amet! Harum voluptas, necessitatibus accusantium eos esse impedit a!</p>
			<p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, obcaecati quo ipsum voluptatem eius quisquam ratione temporibus odio molestiae libero maxime quas ut? Nesciunt laboriosam inventore expedita animi saepe delectus?</p>
			<Link href="/games">
				<a className={styles.btn}>See games listing</a>
			</Link>
		</div>
	);
}
