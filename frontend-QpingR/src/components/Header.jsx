// import React, { useState } from 'react';
// import '../styles/Header.css';

// const Header = ({ isLoggedIn, setIsLoggedIn, userName, setIsModalOpen }) => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('userName');
//     setIsLoggedIn(false);
//   };

//   return (
//     <header>
//       <div className="container">
//         {/* Left Navigation */}
//         <nav className={`nav-left ${isNavOpen ? 'mobile-active' : ''}`}>
//           <a href="#home">Home</a>
//           <a href="#about">About</a>
//           <a href="#contact">Contact</a>
//           <a href="#features">Features</a>
//           <a href="#partners">Partners</a>
//           <a href="#testimonials">Testimonials</a>
//         </nav>

//         {/* Center Logo */}
//         <div className="logo">Vybes</div>

//         {/* Right Navigation (Profile) */}
//         <nav className={`nav-right ${isNavOpen ? 'mobile-active' : ''}`}>
//           {isLoggedIn ? (
//             <>
//               <span className="user-name">Hi, {userName}</span>
//               <button className="logout-btn" onClick={handleLogout}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <button className="profile-btn" onClick={() => setIsModalOpen(true)}>
//               Sign In
//             </button>
//           )}
//         </nav>

//         {/* Hamburger Menu */}
//         <button
//           className="hamburger"
//           onClick={() => setIsNavOpen(!isNavOpen)}
//         >
//           ☰ {/* Hamburger icon */}
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import '../styles/Header.css';

const Header = ({ user, setUser, setIsModalOpen }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5001/api/auth/google';
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      
      if (response.ok) {
        setUser(null);
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header>
      <div className="container">
        {/* Left Navigation */}
        <nav className={`nav-left ${isNavOpen ? 'mobile-active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#features">Features</a>
          <a href="#partners">Partners</a>
          <a href="#testimonials">Testimonials</a>
        </nav>

        {/* Center Logo */}
        <div className="logo">Vybes</div>

        {/* Right Navigation (Profile) */}
        <nav className={`nav-right ${isNavOpen ? 'mobile-active' : ''}`}>
          {user ? (
            <div className="profile-section">
              <img 
                src={user.avatar} 
                alt="Profile" 
                className="profile-pic"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29';
                }}
              />
              <span className="user-name">Hi, {user.displayName}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <button className="google-login-btn" onClick={handleGoogleLogin}>
              <svg
                className="google-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="24px"
                height="24px"
              >
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              Sign in with Google
            </button>
          )}
        </nav>

        {/* Hamburger Menu */}
        <button
          className="hamburger"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;