Juspay Dashboard
Description
The Juspay Dashboard is a dynamic and interactive dashboard application designed for eCommerce management. It visualizes business metrics like revenue, sales, and product performance through a variety of charts and data tables. The dashboard is built with modern technologies like React, Framer Motion, Tailwind CSS, and Recharts. It supports both light and dark modes, offering a smooth and visually appealing user experience.

Features
Responsive Design: Adapts to various screen sizes, including mobile, tablet, and desktop.
Dark/Light Mode Toggle: Seamless transitions between dark and light modes.
Data Visualizations:
Bar charts, line charts, and pie charts to display revenue, sales, and projections.
Interactive map for visualizing revenue by location.
Animations: Smooth transitions using Framer Motion for enhanced user interaction.
Top-Selling Products: Displays a list of top-selling products with relevant data.
Revenue Projections vs. Actuals: Compares projected revenue against actual data.
Tech Stack
React.js: Frontend framework used for building user interfaces.
Tailwind CSS: Utility-first CSS framework for fast and responsive UI development.
Recharts: Library for building chart visualizations.
Framer Motion: Used for animations and smooth transitions.
React Router: For client-side routing within the dashboard.
Context API: To handle global state management, including dark mode toggle.
.
├── public               # Static assets
├── src
│   ├── assets           # Images, icons, and other static files
│   ├── components       # Reusable React components
│   ├── context          # Context API for global state (e.g., dark mode)
│   ├── pages            # Dashboard page and other page components
│   ├── constant.js      # Mock data and constants
│   └── App.js           # Main entry point for the React app
├── .gitignore           # Files to ignore in Git
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
Key Components
1. Dashboard
Displays the main dashboard with revenue projections, top-selling products, and charts for sales and revenue data.
2. Charts
Projections vs Actuals: A bar chart comparing revenue projections against actual values.
Revenue by Location: An interactive map displaying the revenue generated from different regions.
Total Sales: A pie chart showing the distribution of total sales by product categories.
3. Top Selling Products Table
A detailed table listing top-selling products, including product names, prices, and sales data.
Installation and Setup
Prerequisites
Node.js (>= 14.x)
npm or yarn
Steps to Install
Clone the repository:

bash
Copy code
git clone https://github.com/kaushikd207/juspay-dashboard.git
Navigate to the project directory:

bash
Copy code
cd juspay-dashboard
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Start the development server:

bash
Copy code
npm start
# or
yarn start
Open the app in your browser:

http://localhost:3000
Usage
The dashboard can be used to visualize eCommerce metrics like revenue projections, actual sales, and top-selling products. Switch between dark and light mode for a customized experience.

Screenshots
![d1](https://github.com/user-attachments/assets/192adafe-67dc-455e-9e1e-c263be18c466)
![d2](https://github.com/user-attachments/assets/600fd1f0-4717-4281-b746-1020fcdc7a3c)
![d3](https://github.com/user-attachments/assets/3d9cabc5-cc9d-4ae4-b44d-361122518422)
![d4](https://github.com/user-attachments/assets/b310b808-b888-4732-b988-0ceadcc91cb6)



2. Dark Mode

Customization
To customize the dashboard:

Modify data in the constant.js file to display different datasets.
Change the styling using Tailwind CSS classes in the respective components.
Add new components or routes using React Router.
License
This project is licensed under the MIT License - see the LICENSE file for details.
