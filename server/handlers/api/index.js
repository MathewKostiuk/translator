export const translateText = async (text, targetLang) => {
  const params = new URLSearchParams(`auth_key=${process.env.DEEPL_API_KEY}&text=${text}&target_lang=${targetLang}`);
  const options = {
    method: 'POST',
    mode: 'cors',
    body: params,
  };
  const response = await fetch(process.env.DEEPL_TRANSLATE_URL, options);
  const json = await response.json();
  return json;
}
