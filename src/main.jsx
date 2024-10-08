import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import styles from './index.css?inline'; // Import CSS as a string using Vite's inline query

// Check if we're in development mode
const isDevelopment = import.meta.env.DEV;
class MeetingRoomBookingWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });  // Attach the Shadow DOM
  }
  
  connectedCallback() {
    console.log('Development mode:', isDevelopment);
    // Create a mount point for React inside the Shadow DOM
    const mountPoint = document.createElement('div');
    this.shadowRoot.appendChild(mountPoint);

    this.style.position = 'fixed';
    this.style.bottom = '20px';
    this.style.right = '20px';
    this.style.zIndex = '49';
    if (isDevelopment) {
      // Development mode: Vite injects styles automatically, so we don't need to load CSS
      console.log('Development mode: styles are injected automatically by Vite.');
    } else {
      // Production mode: Load the CSS file using a relative path
      const style = document.createElement('style');
      style.textContent = styles;
      this.shadowRoot.appendChild(style);
    }

    // Render the React app into the Shadow DOM's mount point
    ReactDOM.createRoot(mountPoint).render(<App />);
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.shadowRoot);
  }
}

// Define the custom element 'meeting-room-widget'
customElements.define('meeting-room-widget', MeetingRoomBookingWidget);
