# E-Commerce Product Page

This project is a responsive product page for an e-commerce website built using **NestJS 15**, **ReactJS**, **Next.js**, and **Tailwind CSS**. It aims to deliver a seamless user experience by integrating interactive features and adhering to frontend best practices.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Installation and Setup](#installation-and-setup)
4. [Project Structure](#project-structure)
5. [Features](#features)
6. [Styling and Responsiveness](#styling-and-responsiveness)

---

### Project Overview
**Objective**: To develop a responsive product page for an e-commerce platform utilizing React and Next.js. The page will feature interactive elements and implement best practices in frontend development for optimal user engagement.

### Technologies Used
- **NestJS 15** - Backend framework for API development
- **ReactJS** - JavaScript library for building user interfaces
- **Next.js** - Framework for server-side rendering of React applications
- **Tailwind CSS** - A utility-first CSS framework for styling

---

## Installation and Setup
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sogimoto-ecommerce-product-page.git
   cd sogimoto-ecommerce-product-page
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the application at `http://localhost:3000`.

---

### Project Structure
The directory structure of the project is organized as follows:

```
ecommerce-product-page/
│
├── components/            # Reusable UI components
│   ├── layouts
│   │   ├── HeaderLayout.tsx    # Component for displaying header included logo, menu, cart, wishlist, login
│   │   └── FooterLayout.tsx    # Component for displaying footer included some links
│   └── ProductDetails
│       ├── ProductDetail.tsx    # Component for displaying product details
│       ├── OptionsSelector.js  # Component for selecting product variants
│       ├── Reviews.js          # Component for displaying reviews and ratings
│       └── AddReview.js          # Component for add a review and rate
│
├── pages/                  # Next.js pages
│   ├── index.js            # Main product page
│   └──layout.js            # Main product page
│
├── styles/                 # CSS files and styles
│   └── globals.css
└── README.md               # Project documentation
```

---

### Features
1. **Product Detail Display**  
   - Users can view detailed product information, including images, price, and description in a responsive layout.

2. **Product Option Selector**  
   - Users can select product options (like size and color), which dynamically updates the displayed product details.

3. **Reviews and Ratings**  
   - Users can view existing reviews and ratings, as well as add new reviews to the product.

4. **Responsive Design**  
   - The layout is designed to be fully responsive across various devices, utilizing Tailwind CSS for styling.

---

### Styling and Responsiveness
This project employs **Tailwind CSS** for styling, ensuring a modern, attractive, and responsive design.

**Responsive Features**:
- All components are optimized for different devices (mobile, tablet, desktop).
- Focus on accessibility and user experience best practices.
