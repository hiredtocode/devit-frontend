import { Link } from 'react-router-dom';

const Public = () => {
	const content = (
		<section className='public'>
			<header>
				<h1>
					Welcome to <span className='nowrap'>Devit</span>
				</h1>
			</header>
			<main className='public__main'>
				<p>Find your mentor and learn!</p>

				<br />
			</main>
			<footer>
				<Link to='/login'>Login</Link>
			</footer>
		</section>
	);
	return content;
};
export default Public;
