import React from "react";

export async function getStaticPaths() {
	// fetch data
	const response = await fetch("https://jsonplaceholder.typicode.com/users/");
	const data = await response.json();

	const paths = data.map(user => {
		return {
			params: { id: user.id.toString() }
		};
	});

	return {
		paths: paths,
		fallback: false
	};
}

// fetch data based on an id
export async function getStaticProps(context) {
	const id = context.params.id;
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const data = await response.json();

	return {
		props: { user: data }
	};

}


const UserDetails = ({ user }) => {
	return (
		<div className="container">
			<h2>{user.name}</h2>
			<p><strong>E-mail:</strong> {user.email}</p>
			<p><strong>Website:</strong> {user.website}</p>
			<p><strong>From:</strong> {user.address.city}</p>
		</div>
	);
};

export default UserDetails;
