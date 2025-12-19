import React, { useEffect, useState } from "react";
import axios from "axios";

const doTranslation = async (input, languageCode) => {
    let y = 'https://dictionary.yandex.net/api/v1/dicservice.json';
    let url = `${y}/lookup?key=dict.1.1.20251218T113752Z.88cfae23595f08b6.b5ebcbe0dcc827e46a889a5001c9ab75d10c32e3&lang=ru-${languageCode}&text=${input}`;

    try {
      const { data } = await axios.post(url);
      return data.def[0].tr[0].text;
    } catch (err) {
      return ""
    }
};

export default ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!text) {
      return;
    }

    const cancelToken = axios.CancelToken.source();

    doTranslation(text, language, cancelToken).then(setTranslated);

    return () => {
      try {
        cancelToken.cancel();
      } catch (err) {}
    };
  }, [text, language]);

  return (
    <div>
      <label className="label">Output</label>
      <h1 className="title">{translated}</h1>
    </div>
  );
};
