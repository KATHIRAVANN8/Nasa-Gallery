# 🌠 NASA Astronomy Gallery

## 🚀 Project Overview

Welcome to the **NASA Astronomy Gallery**, a space-themed web application that showcases NASA’s stunning **Astronomy Picture of the Day (APOD)**. Users can browse, search, filter, and save their favorite space images and videos. This project leverages the **NASA APOD API** to provide high-quality celestial content. 🌌✨

---

## 🎯 Objectives

✅ Display a **gallery of astronomy images/videos** fetched from the NASA APOD API.  
✅ Allow users to **search images by title or date (YYYY-MM-DD)**.  
✅ Provide **filters** to sort by media type (**image/video**).  
✅ Show **detailed information** about each image, including high-resolution view, explanation, and copyright info.  
✅ Implement a **favorites feature** to save images locally for quick access.  
✅ Optimize performance with **lazy loading and efficient API calls**.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React.js
- **Styling:** CSS
- **Routing:** React Router DOM
- **State Management:** React Context API
- **API Integration:** NASA APOD API
- **Local Storage:** To save favorite images

---

## 🌍 API Information

- **NASA APOD API:** [Official API Documentation](https://api.nasa.gov/)
- **API Key:** Free (Sign up at [NASA API Signup](https://api.nasa.gov/#signUp))

---

## 📌 Features

### 📸 Image Gallery

✅ Fetch and display **10 random** astronomy images from NASA’s APOD API.  
✅ Show images/videos in a **grid layout** with:

- Image/video preview
- Title
- Date
- “View Details” button  
  ✅ Implement **lazy loading** for optimized performance.  
  ✅ Allow users to **search images by title or date**.  
  ✅ Provide a **dropdown filter** to sort by media type (**image/video**).

### 🔭 Image Details Page

✅ Fetch detailed information for a **selected image**.  
✅ Display:

- **High-resolution image/video**
- **Explanation**
- **Copyright details (if available)**
- **Date**  
  ✅ Include a **“❤️ Favorite” button** to save images to Local Storage.

### 💾 Favorites Page

✅ Display all **user-saved favorite images/videos**.  
✅ Allow users to **remove images** from favorites.  
✅ Clicking an image navigates to the **details page**.

---

## 📂 Project File Structure

````
📦 nasa-astronomy-gallery
 ┣ 📂 public
 ┃ ┗ 📜 index.html
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Navbar.js
 ┃ ┃ ┣ 📜 ImageCard.js
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 Home.js
 ┃ ┃ ┣ 📜 Favorites.js
 ┃ ┃ ┗ 📜 Details.js
 ┃ ┣ 📂 styles
 ┃ ┃ ┣ 📜 styles.css
 ┃ ┃ ┣ 📜 index.css
 ┃ ┃ ┣ 📜 Details.css
 ┃ ┃ ┗ 📜 Favorites.css
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 index.js
 ┣ 📜 .env
 ┣ 📜 package.json
 ┗ 📜 README.md


---

## ⚡ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/KATHIRAVANN8/NASA-Astronomy-Gallery.git
cd NASA-Astronomy-Gallery
````

### 2️⃣ Install Dependencies

```bash
npm install
npm install react-router-dom
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory and add your NASA API key:

```
REACT_APP_NASA_API_KEY=your_api_key_here
```

### 4️⃣ Run the Project

```bash
npm start  # or yarn start
```

Open [http://localhost:3000/](http://localhost:3000/) in your browser.

---

## 📌 Future Enhancements

🚀 **Pagination** for smoother browsing.  
🔐 **User Authentication** to save favorites persistently.  
🎨 **Dark Mode & Enhanced UI/UX** with animations.  
🌍 **Deployment** on Vercel/Netlify for global access.

---
