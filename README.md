🚀 MERN Backend Server – Premium Edition
Built with precision by Abhishek Pancheshwar
<p align="center"> <img src="https://img.shields.io/badge/Node.js-Backend-green?logo=node.js" /> <img src="https://img.shields.io/badge/Express.js-Framework-lightgrey?logo=express" /> <img src="https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb" /> <img src="https://img.shields.io/badge/Braintree-Payments-blue?logo=paypal" /> <img src="https://img.shields.io/badge/Status-Active-success" /> </p>
🎥 Project Demo

Click below to watch the full demo:

📘 Overview

This backend powers a full MERN stack application, featuring:

🔐 Secure user authentication

💳 Braintree payment integration

🛒 Product & order handling

⚡ Scalable API architecture

🌐 Fully deployable on Render

🛠️ Tech Stack
Technology	Purpose
Node.js	Backend runtime environment
Express.js	API framework
MongoDB + Mongoose	Database & ORM
Braintree	Payment Gateway
Dotenv	Environment configuration
Nodemon	Dev server auto-reload
📦 Project Setup
1️⃣ Prerequisites

Make sure you have installed:

Node.js (Latest LTS)

NPM / Yarn

MongoDB Atlas account (for production)

Braintree Sandbox account

🔧 Environment Variables (.env)

Inside server/.env, add your own credentials:

PORT=8080

DATABASE=mongodb://127.0.0.1:27017/ecommerce

BRAINTREE_MERCHANT_ID=your_id
BRAINTREE_PUBLIC_KEY=your_public_key
BRAINTREE_PRIVATE_KEY=your_private_key

JWT_SECRET=your_secret_key


⚠️ Do NOT commit this file to GitHub.
⚠️ Replace all values with your own keys.

🔑 Get Braintree API Keys
Steps:

Visit: https://www.braintreepayments.com/

Create Sandbox account: https://sandbox.braintreegateway.com/

Go to:
Account → Settings → API → API Keys

Generate a new key if needed.

Copy:

Merchant ID

Public Key

Private Key

Paste into .env file.

⚙️ Install Dependencies
Install client dependencies:
cd client && npm install

Install server dependencies:
cd server && npm install

🚀 Running the App Locally
Start Backend:
npm run start:dev

Start Frontend:
npm start


Your app will be available at:
👉 http://localhost:3000

🌐 Deploy Backend to Render (Step-by-Step)
1️⃣ Create an account

https://render.com/

2️⃣ Connect your GitHub repository
3️⃣ Create Web Service

Select the backend folder.

4️⃣ Switch to deployment branch

Use branch: render-deploy-backend

5️⃣ Change database to MongoDB Atlas

Replace local DB with this format:

DATABASE=mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority


📌 How to get this URL?
Go to MongoDB Atlas → Database → Connect → Drivers

6️⃣ Use cluster password (NOT account password)

Images for guidance:

7️⃣ Render configuration example:

8️⃣ Deploy

Render will automatically install and deploy.

🧩 Project Structure
server/
│── controllers/
│── models/
│── routes/
│── middlewares/
│── utils/
│── server.js
│── .env
│── package.json


Clean, modular, and scalable for future updates.

🛡️ Security Best Practices

✔ Use environment variables
✔ Never expose API keys
✔ Use strong JWT secret keys
✔ Enable IP whitelist in MongoDB Atlas
✔ Use HTTPS in production

🌍 Frontend Deployment

You can deploy the frontend using:

Vercel

Netlify

Surge

GitHub Pages

🙌 Credits
Built with ❤️ by Abhishek Pancheshwar