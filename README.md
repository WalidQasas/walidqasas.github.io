# Country Explorer 🌍

Country Explorer is a responsive React + TypeScript web application that allows users to explore information about countries worldwide. Users can search, filter by region, view country details, toggle between light and dark modes, and save their favorite countries.

This project was developed during my time at Harri.

---

## Features

* **Search and Filter:** Easily search countries by name and filter by region or favorites.
* **Country Details:** View detailed information including population, region, subregion, capital, top-level domain, currencies, languages, and bordering countries.
* **Favorites:** Mark countries as favorites and persist them across sessions using `localStorage`.
* **Dark/Light Mode:** Toggle between dark and light themes; the preference is saved for future visits.
* **Responsive Design:** Fully responsive layout optimized for mobile, tablet, and desktop.
* **Performance Optimizations:** Images are resized and optimized for web performance.

---

## Technologies Used

* **React** with **TypeScript**
* **React Router** for routing
* **Material UI (MUI)** for UI components
* **LocalStorage** for persisting user preferences and favorites
* **Custom CSS and styled-components** for layout and design

---

## API

Data is fetched from the [REST Countries API v3.1](https://restcountries.com/) using the `/all` endpoint with specified fields:

```
https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders,cca3
```

This ensures the application only requests the necessary fields and avoids API errors.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/WalidQasas/walidqasas.github.io.git
cd walidqasas.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Deployment

This project is deployed via GitHub Pages. Make sure to run:

```bash
npm run build
```

Then push the `build` folder to your GitHub repository for live hosting at:

```
https://walidqasas.github.io
```

---

## Future Improvements

* Add Lazy Loading.

