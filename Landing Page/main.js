const name_Input = document.getElementById("name");
const email_Input = document.getElementById("email");
const message_Input = document.getElementById("message");
const btn = document.getElementById("btn");

document.querySelector('a[href^="#"]').addEventListener("click", function (e) {
  e.preventDefault();

  const targetId = this.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();

  var form_Info = {
    name: name_Input.value,
    email: email_Input.value,
    message: message_Input.value,
  };

  try {
    const { name, email, message } = form_Info;

    if (!name || !email || !message) {
      Swal.fire(`Please fill all the information`);
      //   return `Please fill all information`;
    } else {
      localStorage.setItem("userData", JSON.stringify(form_Info));
      let messageReturned = `You have submit your data successfully , We will contact you soon`;
      console.log(messageReturned);
      Swal.fire(messageReturned);
      name_Input.value = " ";
      email_Input.value = " ";
      message_Input.value = " ";
    }
  } catch (err) {
    console.log(err);
  }
});
