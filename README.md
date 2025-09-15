
# 🎬 Yeetflix

Yeetflix is a fully functional Netflix-style streaming UI built with React.
It replicates Netflix’s look and feel while dynamically pulling real movie data from the TMDB API.

---

## 🚀 Features

- **Netflix-Style UI** – Built a fully functional streaming app interface with React.
- **TMDB API Integration** – Displays trending, top-rated, and genre-specific movies with posters & descriptions.
- **Responsive Design** – Optimized for desktop, tablet, and mobile devices.
- **Dynamic Content Rendering** – Updates automatically based on API data for a smooth user experience.
- **Live Deployment** – Hosted on **Google Firebase** and accessible online.

---

## 🛠 Tech Stack

| Layer       | Technology |
|------------|------------|
| **Frontend** | React + JSX |
| **Styling**  | CSS (Flexbox & Grid for layout) |
| **API**      | [TMDB API](https://developer.themoviedb.org/) |
| **Deployment** | Google Firebase |

---

## 🖼 Demo

🔗 **Live Site:** [https://yeetflex-1d350.web.app/](https://yeetflex-1d350.web.app/)
(*Replace with your actual deployed URL*)

---

## 📂 Project Structure

```

yeetflix/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Banner.jsx
│   │   ├── Row\.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   ├── App.jsx
│   ├── index.js
│   ├── requests.js
│   └── styles.css
├── package.json
└── README.md

````

---

## ⚡ Getting Started

### 1️⃣ Clone Repository
```bash
git clone https://github.com/yourusername/yeetflix.git
cd yeetflix
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up TMDB API Key

1. Get an API key from [TMDB](https://developer.themoviedb.org/).
2. Create a `.env` file in the root directory and add:

```env
REACT_APP_TMDB_API_KEY=your_api_key_here
```

### 4️⃣ Run Development Server

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see Yeetflix in action.

---

## 📦 Future Enhancements

* Add user authentication and profiles.
* Implement a watchlist/favorites feature.
* Build a video player to stream trailers or previews.
* Improve search functionality with autocomplete.


## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
