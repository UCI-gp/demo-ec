const el = document.getElementById("#socialGiftCardNumber");

console.log("iframe内のinputHiddenの値", el.value);

el.addEventListener("change", () => {
  const companyNameElement = document.getElementById("#companyName");
  console.log("iframe内のinputの入力を検知", companyNameElement.value);
});
