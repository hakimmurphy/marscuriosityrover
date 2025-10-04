# Mars Curiosity Rover (Vue 3 + Vite)

A lightweight Vue 3 single-page app that fetches and displays images from NASA’s **Mars Rover Photos API** (Curiosity). Built with **Vue Router**, **Tailwind CSS**, and **Vite**. :contentReference[oaicite:1]{index=1}

---

## ✨ Features
- Fetch & render rover photos from NASA’s public API
- Modern SPA routing with **Vue Router**
- Utility-first styling with **Tailwind CSS**
- Fast dev experience via **Vite** :contentReference[oaicite:2]{index=2}

---

## 🧰 Tech Stack
- **Vue 3**, **Vue Router**, **Vite**
- **Tailwind CSS**
- Languages in repo: Vue, JS, CSS, HTML :contentReference[oaicite:3]{index=3}

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (LTS recommended)
- A NASA API key (free): https://api.nasa.gov/  → “Generate API Key” :contentReference[oaicite:4]{index=4}

### Setup
```bash
# clone
git clone https://github.com/hakimmurphy/marscuriosityrover.git
cd marscuriosityrover

# install deps
npm install
```

### Create a .env file in the project root (Vite reads vars prefixed with VITE_):
```
echo "VITE_NASA_API_KEY=YOUR_KEY_HERE" > .env
```

### Run the dev server:
```
npm run dev
```

### npm run dev
```
npm run build
npm run preview
```

## 🔗 API Reference (Mars Rover Photos)
Base docs: https://api.nasa.gov/
Example endpoint (Curiosity, by sol):
```
https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=YOUR_KEY
```

See NASA’s page for parameters like earth_date and camera.

## 📁 Project Structure (high-level)
```
.
├─ public/
├─ src/              # Vue 3 app source
├─ index.html
├─ package.json
├─ tailwind.config.js
└─ vite.config.js
```

## 🙏 Acknowledgments
- NASA Open APIs: Mars Rover Photos. Thanks for making space data accessible.

---

## 📄 License
MIT

---

## 🗣️ Author
Hakim Murphy
