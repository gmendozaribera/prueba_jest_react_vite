import PropTypes from 'prop-types';

export const FirstApp = ( {title, subtitle} ) => {

    // title = title || 'My First App';
    return (
        <>
            <h1>{ title }</h1>
            <h2>{subtitle}</h2>
            <h2>{subtitle}</h2>
            <p>Soy un parrafo</p>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps={
    title: 'No hay titulo',
    name: 'german'
  }
