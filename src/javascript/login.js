export const eye = () => {
  const passwordInput = document.getElementById("password");
  const passwordEye = document.querySelector(".password-eye i");

  passwordEye.addEventListener("click", togglePasswordVisibility);

  function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordEye.classList.remove("fa-eye");
      passwordEye.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      passwordEye.classList.remove("fa-eye-slash");
      passwordEye.classList.add("fa-eye");
    }
  }
};
