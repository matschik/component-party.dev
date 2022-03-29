import PropTypes from 'prop-types';

export default function Hello({ name }) {
	return <p>Hello {name} !</p>;
}
Hello.propTypes = {
	name: PropTypes.string.isRequired
};
