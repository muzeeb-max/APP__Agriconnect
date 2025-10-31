# 🌾 AgriConnect – Smart Farmer Connection Platform

AgriConnect is a Flask-based web application that helps **farmers connect with each other**, **manage their lands**, and **send requests for collaboration or trade**.  
It’s built with **Flask, SQLite, HTML, CSS, and JavaScript**.

---

## ⚙️ Setup Guide

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/AgriConnect.git
cd AgriConnect
```

### 2️⃣ Create a virtual environment
**Windows:**
```bash
python -m venv env
```

**macOS/Linux:**
```bash
python3 -m venv env
```

### 3️⃣ Activate the virtual environment

**Windows:**
```bash
env\Scripts\activate
```

**macOS/Linux:**
```bash
source env/bin/activate
```

### 4️⃣ Install dependencies
```bash
pip install -r requirements.txt
```

### 5️⃣ Run the application
```bash
python app.py
```
Then open in your browser:  
👉 http://127.0.0.1:5000/

---

## 🧠 Project Overview

### Features
- 🌱 Farmer registration and login  
- 🌾 Add, view, and delete lands  
- 🔗 Connect with other farmers  
- 📤 Send connection requests  
- 💬 Flash message notifications  
- 🗃️ SQLite database for persistent storage  

---

## 🧩 Folder Structure
```
AgriConnect/
│
├── app.py                 # Main Flask backend
├── requirements.txt       # All dependencies
├── README.md              # This file
│
├── templates/             # HTML templates
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── connectFarmers.html
│   └── success.html
│
└── static/                # CSS, JS, images
    ├── style.css
    └── script.js
```

---

## 🧰 Tech Stack
- **Backend:** Flask (Python)
- **Database:** SQLite
- **Frontend:** HTML, CSS, JavaScript
- **Environment:** Virtualenv (venv)
- **Version Control:** Git & GitHub

---

## ⚡ Quick Commands

| Action | Command |
|--------|----------|
| Create venv | `python -m venv env` |
| Activate venv (Windows) | `env\Scripts\activate` |
| Activate venv (Mac/Linux) | `source env/bin/activate` |
| Install requirements | `pip install -r requirements.txt` |
| Run app | `python app.py` |

---

## 🧑‍💻 Author
**Muzeeb Rahman Shaik , Yuvraj Nagaboine**  
Computer Science Engineer @ VIT-AP  
Passionate about Full Stack Development 🚀
