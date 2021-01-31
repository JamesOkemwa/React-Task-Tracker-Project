import PropTypes from 'prop-types'
import Button from './Button'


const Header = ( { title }) => {

    const onClick = () => {
        console.log('Click');
    }

    return (
        <header className='header'>
            <h1 style={{  }}>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    color : PropTypes.string,
    onClick : PropTypes.func,
}

Header.defaultProps = {
    title: 'Task Tracker'
}

//CSS in JS
// const HeadingStyle = {
//     color:'red', 
//     backgroundColor:'black'
// }

export default Header
