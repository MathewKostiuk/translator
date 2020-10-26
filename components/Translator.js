import React, { useState, useCallback } from 'react';
import { TextField } from "@shopify/polaris";

export default function Translator() {
  const [value, setValue] = useState('');
  const [translation, setTranslation] = useState('');

  const handleChange = useCallback((newValue) => {
    setValue(newValue);
    callApi(newValue);
  }, []);

  const callApi = async (text) => {
    const options = {
      method: 'POST',
      mode: 'same-origin',
      body: text
    }
    const response = await fetch('/translate', options);
    const json = await response.json();
    setTranslation(json.translations[0].text);
    
  }

  return (
    <React.Fragment>
      <TextField
        label="Input"
        value={value}
        onChange={handleChange}
        multiline={4}
      />
      <TextField
        label="Output"
        value={translation}
        multiline={4}
      />
    </React.Fragment>
  );
}
