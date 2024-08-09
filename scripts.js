document.addEventListener("DOMContentLoaded", function() {
    // Get the modal and close button
    var modal = document.getElementById("orderModal");
    var closeButton = document.getElementsByClassName("close")[0];

    // Close the modal when the close button (x) is clicked
    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when clicking outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Get all "Buy Now" buttons
    var buyButtons = document.querySelectorAll(".buy-now");

    // Open the modal with product details when a "Buy Now" button is clicked
    buyButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var product = this.getAttribute("data-product");
            var price = this.getAttribute("data-price");

            // Populate the modal with product details
            document.getElementById("modal-product").value = product;
            document.getElementById("modal-price").value = price;

            // Display the modal
            modal.style.display = "block";
        });
    });

    // Handle form submission
    document.getElementById("orderForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Collect form data
        var name = document.getElementById("name").value;
        var address = document.getElementById("address").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var product = document.getElementById("modal-product").value;
        var price = document.getElementById("modal-price").value;

        // Display a confirmation alert
        alert(`Thank you, ${name}! You have successfully placed an order for ${product} ($${price}).
        \n\nDelivery will be made to:
        \n${address}
        \n\nWe will contact you at ${phone} or via email at ${email} for further details.`);

        // Close the modal
        modal.style.display = "none";

        // You can add additional logic here to send the form data to a server or service
        // For example, using Formspree:
        // var formData = new FormData(document.getElementById("orderForm"));
        // fetch("https://formspree.io/f/YOUR_FORM_ID", {
        //     method: "POST",
        //     body: formData
        // }).then(response => {
        //     if (response.ok) {
        //         alert("Order placed successfully!");
        //     } else {
        //         alert("There was a problem with your order.");
        //     }
        // }).catch(error => {
        //     alert("There was a problem with your order.");
        // });
    });
});