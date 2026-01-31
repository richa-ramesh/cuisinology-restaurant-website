# Cuisinology - Restaurant Website

A full-stack restaurant website featuring 8 international cuisines with interactive menu display, customer feedback system, and responsive design built with React and Node.js.

![Cuisinology Homepage](screenshots/homepage.png)

## 🍽️ Features

- **Multi-Cuisine Menu**: Browse 8 international cuisines (Indian, Chinese, French, Italian, Thai, Lebanese, Mexican, Indonesian)
- **Interactive Navigation**: Smooth single-page application with React Router
- **Customer Feedback System**: Submit ratings for food, service, ambience, and overall experience
- **Responsive Design**: Mobile-friendly interface built with Bootstrap
- **Social Integration**: Connect via Instagram, YouTube, email, and phone
- **About Us**: Meet the team behind Cuisinology
- **Contact Page**: Multiple ways to reach out

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Bootstrap
- CSS3
- Axios (API calls)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS
- Body Parser

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (running locally or MongoDB Atlas account)

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/cuisinology-restaurant-website.git
cd cuisinology-restaurant-website
```

### 2. Backend Setup
```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your MongoDB connection string
# (Use your preferred text editor)

# Start the backend server
npm start
```

Backend will run on `http://localhost:8000`

### 3. Frontend Setup
```bash
# Open new terminal, navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start the React app
npm start
```

Frontend will run on `http://localhost:3000`

### 4. Access the Application

Open your browser and go to: `http://localhost:3000`

## 📁 Project Structure
```
cuisinology-restaurant-website/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── images/          # Image assets
│   │   ├── App.js           # Main app component
│   │   └── index.js         # Entry point
│   └── package.json
├── backend/                 # Express backend
│   ├── index.js            # Server & API routes
│   ├── package.json
│   └── .env.example        # Environment variables template
├── screenshots/            # App screenshots
└── README.md
```

## 🍜 Available Cuisines

1. **Indian** - Paneer Tikka, Butter Chicken, Masala Dosa, Gulab Jamun
2. **Chinese** - Spring Rolls, Fried Rice, Manchurian, Moon Cake
3. **French** - Cheese Tart, Beef Bourguignon, Macarons
4. **Italian** - Bruschetta, Pizza, Lasagna, Tiramisu
5. **Thai** - Pad Thai, Green Curry, Mango Sticky Rice
6. **Lebanese** - Hummus, Falafel, Kibbeh
7. **Mexican** - Nachos, Tacos, Burritos, Churros
8. **Indonesian** - Nasi Goreng, Satay, Klepon

## 📸 Screenshots

### Homepage
![Homepage](screenshots/homepage.png)

### Menu Page
![Menu](screenshots/menu.png)

### Feedback Form
![Feedback](screenshots/feedback.png)

## 🌐 API Endpoints

### POST /feedback
Submit customer feedback

**Request Body:**
```json
{
  "Food": "option1",
  "Service": "option2",
  "Ambience": "option1",
  "OverallValue": "option1"
}
```

**Response:**
```json
{
  "message": "Submitted!"
}
```

## 👥 Team

This project was developed as part of Web Technologies coursework by:

- **Richa Rameshkrishna** - [GitHub](https://github.com/richa-ramesh) | [LinkedIn](https://linkedin.com/in/richa-ramesh)
- Sejal Singhania
- Apoorva Sarvade

### My Contributions
- React Router implementation and navigation
- Feedback form frontend and backend integration
- Menu display system
- Responsive UI design
- API endpoint development

## 🚀 Future Enhancements

- [ ] User authentication (login/register)
- [ ] Online ordering system
- [ ] Payment gateway integration
- [ ] Admin dashboard for feedback analytics
- [ ] Search and filter functionality for menu
- [ ] User reviews and ratings
- [ ] Email confirmation for feedback submissions
- [ ] Mobile app version

## 🐛 Known Issues

- MongoDB connection string needs to be updated in `.env`
- Some images may need optimization for faster loading

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Richa Rameshkrishna**
- Email: richaramesh2002@gmail.com
- LinkedIn: [linkedin.com/in/richa-ramesh](https://linkedin.com/in/richa-ramesh)
- GitHub: [github.com/YOUR-USERNAME](https://github.com/YOUR-USERNAME)

## 🙏 Acknowledgments

- Bootstrap for responsive design framework
- MongoDB for database solution
- React community for excellent documentation
- Our instructors for guidance throughout the project

---

⭐ If you found this project helpful, please give it a star!
