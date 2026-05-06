function validateForm() {
  clearErrors()

  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const phone = document.getElementById("phone").value.trim()
  const area = document.getElementById("area").value.trim()
  const weight = document.getElementById("weight").value.trim()
  const country = document.getElementById("country").value.trim()
  const purchaseCity = document.getElementById("purchaseCity").value.trim()
  const region = document.getElementById("region").value.trim()
  const deliveryCity = document.getElementById("deliveryCity").value.trim()

  let isValid = true

  if (name.length < 3 || name.length > 15) {
    showError("nameError", "От 3 до 15 символов")
    document.getElementById("name").classList.add("error")
    isValid = false
  }

  if (!email.includes("@") || email === "") {
    showError("emailError", "Ваш email (@)")
    document.getElementById("email").classList.add("error")
    isValid = false
  }

  const phoneDigits = phone.replace(/\D/g, "")
  if (phoneDigits.length !== 10) {
    showError("phoneError", "10 символов")
    document.getElementById("phone").classList.add("error")
    isValid = false
  }

  if (area === "" || isNaN(area) || parseFloat(area) <= 0) {
    showError("areaError", "Размер доставки")
    document.getElementById("area").classList.add("error")
    isValid = false
  }

  if (weight === "" || isNaN(weight) || parseFloat(weight) <= 0) {
    showError("weightError", "Вес доставки")
    document.getElementById("weight").classList.add("error")
    isValid = false
  }

  if (country.length < 3 || country.length > 30) {
    showError("countryError", "От 3 до 30 символов")
    document.getElementById("country").classList.add("error")
    isValid = false
  }

  if (purchaseCity.length < 3 || purchaseCity.length > 30) {
    showError("purchaseCityError", "От 3 до 30 символов")
    document.getElementById("purchaseCity").classList.add("error")
    isValid = false
  }

  if (region.length < 3 || region.length > 30) {
    showError("regionError", "От 3 до 30 символов")
    document.getElementById("region").classList.add("error")
    isValid = false
  }

  if (deliveryCity.length < 3 || deliveryCity.length > 30) {
    showError("deliveryCityError", "От 3 до 30 символов")
    document.getElementById("deliveryCity").classList.add("error")
    isValid = false
  }

  return isValid
}

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId)
  errorElement.textContent = message
  errorElement.classList.add("show")
}

function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message")
  errorMessages.forEach((error) => {
    error.classList.remove("show")
    error.textContent = ""
  })

  const inputs = document.querySelectorAll(
    ".calculatorFormInput, .calculatorFormInput2",
  )
  inputs.forEach((input) => {
    input.classList.remove("error")
  })
}

function handleFormSubmit(event) {
  if (event) {
    event.preventDefault()
  }

  const isValid = validateForm()

  if (isValid) {
    console.log("Форма успешно отправлена:", {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      area: document.getElementById("area").value.trim(),
      weight: document.getElementById("weight").value.trim(),
      country: document.getElementById("country").value.trim(),
      purchaseCity: document.getElementById("purchaseCity").value.trim(),
      region: document.getElementById("region").value.trim(),
      deliveryCity: document.getElementById("deliveryCity").value.trim(),
    })
    alert("Форма успешно отправлена!")
  }

  return false
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calculatorForm")
  const calculatorSubmitBtn = document.getElementById("calculatorSubmitBtn")

  if (calculatorSubmitBtn) {
    calculatorSubmitBtn.addEventListener("click", handleFormSubmit)
  }

  if (form) {
    form.addEventListener("submit", handleFormSubmit)
  }

  const inputs = document.querySelectorAll(
    ".calculatorFormInput, .calculatorFormInput2",
  )
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      this.classList.remove("error")
      const errorId = this.id + "Error"
      const errorElement = document.getElementById(errorId)
      if (errorElement) {
        errorElement.classList.remove("show")
      }
    })
  })
})
