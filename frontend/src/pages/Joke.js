import React, { useEffect, useState } from 'react';

function Joke() {
	const [joke, setJoke] = useState("");

	useEffect(() => {
		fetch('https://official-joke-api.appspot.com/jokes/random')
			.then(response => response.json())
			.then(data => {
				setJoke(data.setup + ' ' + data.punchline);
			});
	}, [])

	return (
		<div className="Joke">
			<div className="Joke-content">
				<p>
					{joke}
				</p>
			</div>
		</div>
	);
}

export default Joke;
