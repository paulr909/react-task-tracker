import PropTypes from 'prop-types';

const Tag = ({text}) => {
    return (
        <div>{text}</div>
    );
}

Tag.propTypes = {
    text: PropTypes.string
};

export default Tag;
