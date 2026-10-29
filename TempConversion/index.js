
/* ========================================
   1. DOM ELEMENTS
======================================== */

const temperatureInput = document.getElementById("temperatureInput");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");

const result = document.getElementById("result");
const message = document.getElementById("message");
const inputHint = document.getElementById("inputHint");

const swapButton = document.getElementById("swapButton");
const resetButton = document.getElementById("resetButton");

const temperatureVisual = document.getElementById("temperatureVisual");
const visualTitle = document.getElementById("visualTitle");
const visualDescription = document.getElementById("visualDescription");

const exampleButtons = document.querySelectorAll(".example-button");

/* ========================================
   2. TEMPERATURE CONVERSION
======================================== */

// Convert any supported unit to Celsius.
function toCelsius(value, unit) {
    switch (unit) {
        case "C":
            return value;
        case "F":
            return (value - 32) * 5 / 9;
        case "K":
            return value - 273.15;
        default:
            throw new Error("Unsupported temperature unit.");
    }
}

// Convert Celsius to the selected unit.
function fromCelsius(value, unit) {
    switch (unit) {
        case "C":
            return value;
        case "F":
            return value * 9 / 5 + 32;
        case "K":
            return value + 273.15;
        default:
            throw new Error("Unsupported temperature unit.");
    }
}

// Keep the output readable without unnecessary trailing zeros.
function formatTemperature(value) {
    return Number(value.toFixed(2)).toString();
}

/* ========================================
   3. VALIDATION
======================================== */

function validateTemperature(value, unit) {
    if (temperatureInput.value.trim() === "") {
        return "Enter a temperature to begin.";
    }

    if (!Number.isFinite(value)) {
        return "Please enter a valid number.";
    }

    const celsiusValue = toCelsius(value, unit);

    // Allow for tiny floating-point rounding differences.
    if (celsiusValue < -273.15 - 1e-9) {
        return "That temperature is below absolute zero.";
    }

    return "";
}

/* ========================================
   4. UPDATE TEMPERATURE VISUAL
======================================== */

function updateTemperatureVisual(celsiusValue) {
    let profile;
    let title;
    let description;

    if (celsiusValue < 10) {
        profile = "cold";
        title = "A little on the chilly side.";
        description =
            "Cool temperatures call for a different kind of energy.";
    } else if (celsiusValue < 25) {
        profile = "mild";
        title = "Right in the comfortable zone.";
        description =
            "A moderate temperature, somewhere between cool and warm.";
    } else {
        profile = "hot";
        title = "Turning up the heat.";
        description =
            "Warm temperatures bring a little extra solar energy.";
    }

    temperatureVisual.dataset.temperature = profile;
    visualTitle.textContent = title;
    visualDescription.textContent = description;
}

/* ========================================
   5. UPDATE CONVERSION
======================================== */

function convertTemperature() {
    const rawValue = temperatureInput.value.trim().replace(",", ".");
    const value = Number(rawValue);
    const sourceUnit = fromUnit.value;
    const targetUnit = toUnit.value;

    const validationError = validateTemperature(value, sourceUnit);

    message.classList.remove("is-error", "is-success");

    if (validationError) {
        result.textContent = "—";
        message.textContent = validationError;
        message.classList.add("is-error");

        inputHint.textContent = "Check the value and try again.";
        temperatureVisual.dataset.temperature = "neutral";
        visualTitle.textContent = "A world of temperatures";
        visualDescription.textContent =
            "Enter a valid temperature to explore its thermal profile.";

        return null;
    }

    const celsiusValue = toCelsius(value, sourceUnit);
    const convertedValue = fromCelsius(celsiusValue, targetUnit);

    const unitLabel = targetUnit === "K" ? "K" : `°${targetUnit}`;

    result.textContent =
        `${formatTemperature(convertedValue)} ${unitLabel}`;

    message.textContent = sourceUnit === targetUnit
        ? "Same unit selected. The value remains unchanged."
        : "Conversion updated successfully.";

    message.classList.add("is-success");
    inputHint.textContent = "Your result updates automatically.";

    updateTemperatureVisual(celsiusValue);

    return convertedValue;
}

/* ========================================
   6. SWAP UNITS
======================================== */

function swapUnits() {
    const previousResult = convertTemperature();

    if (previousResult === null) {
        return;
    }

    const previousSourceUnit = fromUnit.value;

    fromUnit.value = toUnit.value;
    toUnit.value = previousSourceUnit;

    // Use the previous result as the new input.
    temperatureInput.value = formatTemperature(previousResult);

    convertTemperature();
    temperatureInput.focus();
}

/* ========================================
   7. RESET CONVERTER
======================================== */

function resetConverter() {
    temperatureInput.value = "";
    fromUnit.value = "C";
    toUnit.value = "F";

    result.textContent = "—";

    message.textContent = "Ready when you are.";
    message.classList.remove("is-error", "is-success");

    inputHint.textContent = "Enter a value to begin.";

    temperatureVisual.dataset.temperature = "neutral";
    visualTitle.textContent = "A world of temperatures";
    visualDescription.textContent =
        "Enter a value to explore its thermal profile.";

    temperatureInput.focus();
}

/* ========================================
   8. QUICK EXAMPLES
======================================== */

function loadExample(event) {
    const button = event.currentTarget;

    temperatureInput.value = button.dataset.value;
    fromUnit.value = button.dataset.unit;

    // Select a different unit for a useful conversion.
    toUnit.value = button.dataset.unit === "C" ? "F" : "C";

    convertTemperature();
}

/* ========================================
   9. EVENT LISTENERS
======================================== */

temperatureInput.addEventListener("input", convertTemperature);
fromUnit.addEventListener("change", convertTemperature);
toUnit.addEventListener("change", convertTemperature);

swapButton.addEventListener("click", swapUnits);
resetButton.addEventListener("click", resetConverter);

exampleButtons.forEach((button) => {
    button.addEventListener("click", loadExample);
});

/* ========================================
   10. INITIALIZE APPLICATION
======================================== */

convertTemperature();
