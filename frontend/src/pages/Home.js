import React, { useEffect, useState } from 'react';

function Home() {
	const [message, setMessage] = useState("");

	useEffect(() => {
		fetch('http://localhost:3001/api')
			.then(response => response.text())
			.then(message => {
				setMessage(message);
			});
	}, [])

	return (
		<div className="Home">
			<div className="Home-content">
				<p>
					{message}
				</p>
			</div>
		</div>
	);
}

export default Home;
