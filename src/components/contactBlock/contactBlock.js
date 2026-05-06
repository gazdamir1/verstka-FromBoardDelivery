function validateForm() {
  clearErrors()

  const contactName = document.getElementById("contactName").value.trim()
  const contactEmail = document.getElementById("contactEmail").value.trim()
  const contactPhone = document.getElementById("contactPhone").value.trim()
  const contactQuestion = document
    .getElementById("contactQuestion")
    .value.trim()
  const contactMessage = document.getElementById("contactMessage").value.trim()

  let isValid = true

  if (contactName.length < 3 || contactName.length > 15) {
    showError("contactNameError", "От 3 до 15 символов")
    document.getElementById("contactName").classList.add("error")
    isValid = false
  }

  if (!contactEmail.includes("@") || contactEmail === "") {
    showError("contactEmailError", "Ваш email (@)")
    document.getElementById("contactEmail").classList.add("error")
    isValid = false
  }

  const phoneDigits = contactPhone.replace(/\D/g, "")
  if (phoneDigits.length !== 10) {
    showError("contactPhoneError", "10 символов")
    document.getElementById("contactPhone").classList.add("error")
    isValid = false
  }

  if (contactQuestion === "") {
    showError("contactQuestionError", "Напишите вопрос")
    document.getElementById("contactQuestion").classList.add("error")
    isValid = false
  }

  if (contactMessage === "") {
    showError("contactMessageError", "Напишите сообщение")
    document.getElementById("contactMessage").classList.add("error")
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

  const inputs = document.querySelectorAll(".contactFormInput")
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
      contactName: document.getElementById("contactName").value.trim(),
      contactEmail: document.getElementById("contactEmail").value.trim(),
      contactPhone: document.getElementById("contactPhone").value.trim(),
      contactQuestion: document.getElementById("contactQuestion").value.trim(),
      contactMessage: document.getElementById("contactMessage").value.trim(),
    })
    alert("Форма успешно отправлена!")
  }

  return false
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm")
  const contactSubmitBtn = document.getElementById("contactSubmitBtn")

  if (contactSubmitBtn) {
    contactSubmitBtn.addEventListener("click", handleFormSubmit)
  }

  if (form) {
    form.addEventListener("submit", handleFormSubmit)
  }

  const inputs = document.querySelectorAll(".contactFormInput")
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
