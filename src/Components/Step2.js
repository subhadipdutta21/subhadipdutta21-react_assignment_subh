import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import PlacesAutocomplete from 'react-places-autocomplete';
import commonStyles from './styles/commonStyles';


const Step2 = ({ xlData, setXlData, setErrorOnSecondPage, bedroomCount, setBedroomCount, bathroomCount, setBathroomCount, address, setAddress, desc, setDesc }) => {

  console.log(xlData)

  useEffect(() => {
    console.log(xlData)
    if (xlData.length > 0) {
      // filling data from xl
      setAddress(xlData[0])
      setBedroomCount(xlData[1])
      setBathroomCount(xlData[2])
      setDesc(xlData[3])
    }
  }, [xlData])

  useEffect(() => {
    console.log(address, bedroomCount, bathroomCount)
    if (!bedroomCount || !bathroomCount) {
      console.log('fileds missing')
      setErrorOnSecondPage(true)
    } else {
      setErrorOnSecondPage(false)
    }

  }, [address, bedroomCount, bathroomCount])

  const handleSelect = address => {
    console.log(address)
    setAddress(address)
  };

  return (
    <Form style={commonStyles.tl}>

      <PlacesAutocomplete value={address} onChange={(val) => setAddress(val)} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <Form.Label>Address</Form.Label>
            <br />
            <input style={commonStyles.customInput}
              {...getInputProps({ placeholder: 'Search Places ...', className: 'location-search-input' })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, idx) => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                // inline style for demonstration purpose
                const style = commonStyles.suggestionBg

                return (
                  <div key={idx} {...getSuggestionItemProps(suggestion, { className, style })}>
                    <span onClick={val => setAddress(val)}>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>


      <Form.Group controlId="formBasicEmail">
        <Form.Label>Bedroom</Form.Label>
        <Form.Control value={bedroomCount} type='number' max='10' placeholder='0' onChange={e => setBedroomCount(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Bathroom</Form.Label>
        <Form.Control value={bathroomCount} type='number' max='5' placeholder='0' onChange={e => setBathroomCount(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Description of property</Form.Label>
        <Form.Control value={desc} as="textarea" rows={3} placeholder="Enter Description of property" onChange={e => setDesc(e.target.value)} />
      </Form.Group>
    </Form>
  )
}

export default Step2;