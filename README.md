# 🌡️ THERMO — The Art of Temperature

**THERMO** is an artistic temperature converter built with HTML, CSS, JavaScript, and Bootstrap 5. It transforms a simple conversion tool into an interactive experience with a warm, editorial design inspired by solar heat, cool air, and the science of temperature.

## ✨ Features

- **Three temperature scales:** convert between Celsius (°C), Fahrenheit (°F), and Kelvin (K).
- **Live conversion:** results update automatically when the input or selected units change.
- **Swap units:** reverse the source and target units with one click.
- **Input validation:** handles empty input, invalid numbers, and temperatures below absolute zero.
- **Quick examples:** explore common temperature values with preset buttons.
- **Dynamic visualizer:** the interface changes its visual appearance according to the converted temperature.
- **Responsive design:** adapts to desktop, tablet, and mobile screens.
- **Accessible controls:** semantic HTML, descriptive labels, keyboard focus indicators, and status messages.

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5.3.3
- Google Fonts

## 📁 Project Structure

```text
TemperatureConversionProgram/
├── TempConversion/
│   ├── index.html
│   ├── style.css
│   └── index.js
└── README.md
```

The project uses vanilla JavaScript for calculations and DOM interactions. No JavaScript framework or build tools are required.

## 🚀 Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Cameloasa/TemperatureConversionProgram.git
   ```

2. Open the project folder:

   ```bash
   cd TemperatureConversionProgram
   ```

3. Open `TempConversion/index.html` in your browser.

## 🧮 Conversion Examples

| From | To | Expected result |
|---|---|---:|
| 0 °C | Fahrenheit | 32 °F |
| 100 °C | Fahrenheit | 212 °F |
| 32 °F | Celsius | 0 °C |
| 0 K | Celsius | -273.15 °C |
| 20 °C | Kelvin | 293.15 K |

The converter uses standard temperature conversion formulas and displays results rounded to a maximum of two decimal places.

Temperatures below absolute zero are rejected.

## 🎨 Design Concept

THERMO combines warm terracotta, solar yellow, cool turquoise, and soft cream tones. CSS-generated geometric shapes create a visual temperature profile without requiring external image assets.

The interface is designed to feel expressive and approachable while keeping the conversion process clear and easy to use.

## 📚 Learning Goals

- Implementing mathematical conversion formulas in JavaScript.
- Working with functions, conditional logic, and event listeners.
- Validating user input.
- Updating the DOM dynamically.
- Using CSS custom properties and data attributes.
- Building responsive layouts with Bootstrap and custom CSS.
- Improving accessibility through semantic HTML and ARIA attributes.

## 🌐 Live Demo

The project can be published with GitHub Pages once the repository's deployment settings have been configured.

**Repository:** [TemperatureConversionProgram](https://github.com/Cameloasa/TemperatureConversionProgram)

**Live demo:** Add the published GitHub Pages URL after deployment has been verified.

## 👩‍💻 Author

**Camelia Ciuca**

- [GitHub](https://github.com/Cameloasa)
- [LinkedIn](https://www.linkedin.com/in/camelia-ciuca-217b242b/)

---

*Built with curiosity, a little science, and a lot of creativity.* ☀️
