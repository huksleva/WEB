import React, { useState, useEffect } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [translation, setTranslation] = useState('');

  useEffect(() => {
    // Устанавливаем заголовок страницы
    document.title = '1153307';
  }, []);

  useEffect(() => {
    if (!input.trim()) {
      setTranslation('');
      return;
    }

    const apiKey = 'dict.1.1.20251217T174903Z.382cd3382d59a127.5f324aee9d09d9e191f6f45e09d1cec720a7e86b';
    const url = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${apiKey}&lang=ru-en&text=${encodeURIComponent(input)}`;

    const fetchTranslation = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.def?.[0]?.tr?.[0]?.text) {
          setTranslation(data.def[0].tr[0].text);
        } else {
          setTranslation('Перевод не найден');
        }
      } catch (error) {
        setTranslation('Ошибка перевода');
      }
    };

    const timer = setTimeout(fetchTranslation, 500); // debounce
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите русское слово"
        style={{ fontSize: '18px', padding: '8px', width: '300px' }}
      />
      <h1 style={{ marginTop: '20px', fontSize: '24px' }}>{translation}</h1>
    </div>
  );
};

export default App;
