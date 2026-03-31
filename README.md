# VGOIRE TRADUÇÕES

A VGOIRE torna comunicação, viagens e aprendizado mais simples. Nosso aplicativo na Play Store oferece traduções juramentadas, técnicas e simples em 16 idiomas. Planeje viagens nacionais e internacionais, aproveite cruzeiros de luxo, reserve hotéis e alugue carros em qualquer lugar. Aprenda inglês ou espanhol com aulas personalizadas ou prepare-se para exames como TOEFL, IELTS, DELE e Duolingo. Também oferecemos legendagem em inglês, espanhol e português brasileiro. Honestos, humildes e comprometidos, na VGOIRE servimos com excelência. Baixe hoje!

Disponível na Play Store: https://play.google.com/store/apps/details?id=com.vgoire.travel

Online em: https://vgoire.github.io/VGOIRE-APP/

## Deep Links

O app aceita parâmetros de URL para abrir uma página específica já no idioma correto:

- `?service=translations&lang=pt`
- `?service=google_rates&lang=es`

O idioma selecionado também é salvo localmente para ser reaplicado nas próximas visitas.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
