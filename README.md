# GSAP Animated Website

A modern, interactive website built with HTML, CSS, and JavaScript featuring smooth animations powered by GSAP (GreenSock Animation Platform).

## ✨ Features

- **Smooth Scroll Animations**: GSAP-powered scroll-triggered animations
- **Modern UI/UX**: Clean, responsive design with beautiful typography
- **Interactive Elements**: Engaging user interactions and micro-animations
- **Performance Optimized**: Efficient animations that don't impact performance
- **Cross-browser Compatible**: Works seamlessly across all modern browsers

## 🚀 Live Demo

Visit the live website: [GSAP Animated Website](https://smitkaneria.github.io/gsap-animated-website/)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with custom properties
- **JavaScript (ES6+)**: Interactive functionality
- **GSAP**: Professional-grade animation library
- **Custom Fonts**: NeueMachina-Regular for unique typography

## 📁 Project Structure

```
gsap-animated-website/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── NeueMachina-Regular.otf
│   │   └── images/
│   │       └── speaker.jpg
│   ├── index.html
│   ├── script.js
│   └── style.css
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser
- Node.js (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/smitkaneria/gsap-animated-website.git
   cd gsap-animated-website
   ```

2. **Install dependencies** (if using Node.js)
   ```bash
   npm install
   ```

3. **Open in browser**
   - Simply open `src/index.html` in your web browser
   - Or use a local server for development

### Development Server

If you want to run a local development server:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js
npx serve src

# Using Live Server extension in VS Code
# Right-click on index.html → "Open with Live Server"
```

## 🎨 Customization

### Adding New Animations

1. **Scroll-triggered animations**:
   ```javascript
   gsap.from(".element", {
       duration: 1,
       y: 100,
       opacity: 0,
       scrollTrigger: {
           trigger: ".element",
           start: "top 80%",
           end: "bottom 20%",
           toggleActions: "play none none reverse"
       }
   });
   ```

2. **Timeline animations**:
   ```javascript
   const tl = gsap.timeline();
   tl.from(".title", {duration: 0.8, y: -50, opacity: 0})
     .from(".subtitle", {duration: 0.6, y: 30, opacity: 0}, "-=0.4");
   ```

### Styling

- Modify `src/style.css` for custom styling
- Update color schemes, typography, and layout
- Add new CSS animations and transitions

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices
- All modern browsers

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Smit Kaneria** - [@smitkaneria](https://github.com/smitkaneria)

Project Link: [https://github.com/smitkaneria/gsap-animated-website](https://github.com/smitkaneria/gsap-animated-website)

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/gsap/) - The professional animation library
- [NeueMachina Font](https://www.fontspace.com/neuemachina-font-f1000) - Beautiful typography
- The open-source community for inspiration and tools

---

⭐ **Star this repository if you found it helpful!**
