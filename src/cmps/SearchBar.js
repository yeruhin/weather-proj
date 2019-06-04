import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Button } from 'react-bootstrap';

const SearchBar = React.forwardRef((props,ref) => {

    const SubmitInput = (ev) => {
        if (ev.nativeEvent.type === 'click' || ev.nativeEvent.key === "Enter"){
            props.SearchWheaterByInput(ref.current.value)
        }
    }

    return (
        <div className="search-bar">
            <FormControl ref={ref} type="text" placeholder="Enter City, Country" onKeyUp={SubmitInput} />
            <Button variant="light" onClick={SubmitInput}>Search</Button>
        </div>
    )
})

SearchBar.propTypes = {
    SearchWheaterByInput: PropTypes.func
}

export default SearchBar