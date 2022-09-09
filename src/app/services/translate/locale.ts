const locale = {
  "en-US": {
    "conflict-car": "Car already exists for plate: {{0}}"
  },
  "pt-BR": {
    "conflict-car": "Carro já existe com a placa: {{0}}"
  }
};

export default (language: 'en-US'|'pt-BR') => {
  return locale[language];
};
