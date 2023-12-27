function submitForm() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var subscribe = document.querySelector('input[name="subscribe"]:checked').value;
  
    
    if (!firstName || !lastName || !email || !subject || !message) {
        alert('Please fill in all required fields.');
    }
    else
    {
 
    var successMessage = `Thank you, ${firstName} ${lastName}! Your message has been submitted. `;
    if (subscribe === 'Yes') 
    {
      successMessage += 'You are subscribed to our newsletter.';
    } 
    else if(subscribe === 'No')
    {
      successMessage += 'You chose not to subscribe to our newsletter.';
    }
    
      showModal(successMessage);
      resetForm();
  }
}
  function showModal(message)
   {
    
    var modal = document.getElementById("myModal");
  
 
    var span = document.getElementsByClassName("close")[0];
  

    var modalContent = document.querySelector(".modal-content");

    document.getElementById("modalMessage").innerText = message;
  

    modal.style.display = "block";
  
   
    span.onclick = function () {
      modal.style.display = "none";
    };
  
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }