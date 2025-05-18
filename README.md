# 🌍 Translation App

The Translation App is a modern, modular, and intuitive web application developed with **React**. It enables users to input keywords and manage multilingual translations, offering a powerful drag-and-drop sorting system and persistent data storage in the browser. The app is tailored for efficient keyword management in localization workflows or multilingual content creation.

---

## ✨ Features

- 🔤 Add, view, and manage keywords for translation
- 📥 Drag-and-drop sorting of keywords using **dnd-kit**
- ✅ Form handling powered by **React Hook Form (RHF)**
- 🌐 Dynamic language selection and switching
- 💾 Persistent keyword storage using **localStorage**
- 🧩 Modular components for maintainability and scalability
- 🎨 Fully responsive UI styled with **TailwindCSS**
- ⚡ Lightning-fast development experience with **Vite**

---

## 🧱 Project Structure

```
src/
├── components/            # Reusable UI components
│   ├── dashboard/         # Includes AddKeywordForm and WordsList
│   ├── Header.jsx         # App header
│   ├── Modal.jsx          # Reusable modal component
│   └── TextField.jsx      # Custom input components
├── contexts/              # Global state providers (e.g. language)
├── hooks/                 # Custom React hooks
├── pages/                 # Entry pages
├── providers/             # Context providers
├── utils/                 # Utility functions (e.g. localStorage helpers)
├── App.jsx                # Root application component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

---

## 🧠 Design Decisions

### 🧩 Component Architecture

Each part of the UI is abstracted into small reusable components like `TextField`, `LanguageSelector`, and `Modal`. This structure keeps the codebase organized and allows for easy scalability.

### 🔃 Drag-and-Drop with dnd-kit

To allow users to reorder their list of keywords in the dashboard, we use **dnd-kit**, a powerful and extensible drag-and-drop toolkit. This provides a smooth and intuitive sorting experience without the complexity of traditional libraries.

### ✅ Form Management with React Hook Form

The keyword addition form is built using **React Hook Form (RHF)**, which simplifies form validation and state management while offering excellent performance.

### 💾 Local Persistence

All added keywords are stored in the browser’s **localStorage**, ensuring the data remains intact even after page reloads or browser restarts.

### 🎨 Styling with TailwindCSS

The app leverages **TailwindCSS** to style components in a utility-first manner. This ensures consistent, responsive, and modern UI design with minimal CSS overhead.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://your-repo-url
cd translation-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Visit `http://localhost:5173` to use the app.

---

## 🛠️ Build for Production

```bash
npm run build
npm run preview
```
