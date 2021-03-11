import React from "react";
import Head from "next/head";
import styles from "../../styles/Users.module.css";
import Link from "next/link";

// only runs at build time, do not use to run on browser
export async function getStaticProps() {

	// returns response object, not the data
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	// parse response object to data
	const data = await response.json(); // > array of objects

	return {
		props: { users: data }
	};

}

const Users = ({ users }) => {
	return (
		<>
			<Head>
				<title>Users List | List</title>
			</Head>
			<h2>Users List</h2>
			{users.map(user =>
				<Link key={user.id} href={`users/${user.id}`}>
					<a className={styles.single}>
						<h3>{user.name}</h3>
					</a>
				</Link>
			)}
		</>
	);
};

export default Users;
