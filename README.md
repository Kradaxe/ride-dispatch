# AI-Powered Ride Dispatch Platform

A full-stack ride-hailing platform inspired by Uber, extended with intelligent ride dispatching and machine learning-based demand prediction.

This project began as a basic Uber clone and was gradually evolved into a more realistic dispatch system by introducing captain ranking, sequential ride allocation, earnings analytics, and demand forecasting.

---

## Features

### Authentication

* User and captain registration/login
* JWT-based authentication
* Protected routes for riders and captains

### Ride Lifecycle

* Ride creation and fare estimation
* Captain ride acceptance
* OTP verification before trip start
* Ride completion workflow
* Ride status tracking

### Real-Time Communication

* Live ride updates using Socket.IO
* Instant ride notifications for captains
* User notifications for ride acceptance, start, and completion

### Intelligent Dispatch System

* Captains ranked using:

  * Distance from pickup
  * Rating
  * Completed rides
  * Acceptance history
* Sequential dispatch:

  * Ride requests are sent to the highest-ranked captain first
  * If unanswered, requests automatically move to the next available captain

### Captain Analytics

* Total earnings tracking
* Completed ride statistics
* Accepted and cancelled ride counts
* Driver ratings

### Machine Learning

* Demand forecasting using Scikit-learn
* Demand predictions based on:

  * Time of day
  * Day of week
  * Average fare
  * Active captains
  * Pickup area
* Recommended high-demand areas for drivers

### Deployment

* Frontend deployed on Vercel
* Backend deployed on Render
* PostgreSQL hosted on Neon

---

## Tech Stack

### Frontend

* React.js
* TailwindCSS
* Socket.IO Client

### Backend

* Node.js
* Express.js
* Prisma ORM
* Socket.IO

### Database

* PostgreSQL
* Neon

### Machine Learning

* Python
* Scikit-learn
* Pandas
* Joblib

### Deployment

* Vercel
* Render

---

## System Architecture

User → Backend API → Database

Captain ↔ Socket.IO ↔ Backend ↔ User

ML Service → Demand Prediction → Dispatch Engine

Dispatch Engine → Captain Ranking → Sequential Ride Allocation

---

## Captain Ranking Algorithm

Captains are scored using a weighted ranking system:

* Distance from pickup location
* Acceptance rate
* Driver rating
* Completed rides
* Current demand multiplier

The highest-ranked captain receives the ride request first.

If no response is received within the timeout window, the request automatically moves to the next captain

---

## API Highlights

### User

* Register
* Login
* Create Ride
* Fare Estimation

### Captain

* Register
* Login
* Accept Ride
* Start Ride
* Complete Ride

### ML

* Demand Prediction Endpoint
* Best Area Recommendation

---

## Local Setup

### Clone repository

```bash
git clone https://github.com/Kradaxe/ride-dispatch.git
cd ride-dispatch
```

### Backend

```bash
cd Backend
npm install
npx prisma generate
npx prisma migrate deploy
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

### Backend

```env
DATABASE_URL=
JWT_SECRET=
PORT=
```

### Frontend

```env
VITE_BASE_URL=
```

---

## Future Improvements

* Dynamic surge pricing
* Geospatial database queries
* Redis-based captain availability cache
* ETA prediction models
* Ride recommendation engine
* Fraud detection and anomaly monitoring

---

## Live Demo

Frontend: https://ride-dispatch-ten.vercel.app/

Backend API: https://ride-dispatch.onrender.com/

---

## Project Motivation

Rather than building another CRUD-style clone, the goal of this project was to explore problems that real ride-hailing systems solve:

* Who should receive a ride request first?
* What happens if nobody accepts?
* Where should drivers position themselves?
* How can historical data improve dispatch efficiency?

The project evolved from a simple ride-booking application into an opportunity to experiment with dispatch algorithms, machine learning, and real-time system design.



<img width="563" height="805" alt="Screenshot (69)" src="https://github.com/user-attachments/assets/4ee16367-5ca0-46af-8e52-34f0f937cf89" />
<img width="539" height="800" alt="Screenshot (70)" src="https://github.com/user-attachments/assets/3f7c00ae-1986-4c45-9700-c67f815ab956" />
<img width="533" height="809" alt="Screenshot (71)" src="https://github.com/user-attachments/assets/06c616fd-06ad-4d00-a159-58e2ebc63aba" />

