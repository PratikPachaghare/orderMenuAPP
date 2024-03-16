 <script>
        function addItem(name, type, price, imageUrl) {
            var cardContainer = document.getElementById("cardContainer");

            var cardDiv = document.createElement("div");
            cardDiv.className = "card";

            var upperDiv = document.createElement("div");
            upperDiv.className = "upper";

            var image = document.createElement("img");
            image.src = imageUrl;
            image.alt = name;

            upperDiv.appendChild(image);

            var lowerDiv = document.createElement("div");
            lowerDiv.className = "lower";

            var nameParagraph = document.createElement("p");
            nameParagraph.className = "nama";
            nameParagraph.textContent = name;

            var typeParagraph = document.createElement("p");
            typeParagraph.className = "type";
            typeParagraph.textContent = type;

            var priceButtonDiv = document.createElement("div");
            priceButtonDiv.className = "price_button";

            var priceParagraph = document.createElement("p");
            priceParagraph.className = "price";
            priceParagraph.textContent = "Rs." + price;

            var addButton = document.createElement("button");
            addButton.className = "add";
            addButton.textContent = "add+";
            addButton.onclick = function () {
                addItemToTotal(name, price);
            };

            priceButtonDiv.appendChild(priceParagraph);
            priceButtonDiv.appendChild(addButton);

            lowerDiv.appendChild(nameParagraph);
            lowerDiv.appendChild(typeParagraph);
            lowerDiv.appendChild(priceButtonDiv);

            cardDiv.appendChild(upperDiv);
            cardDiv.appendChild(lowerDiv);

            cardContainer.appendChild(cardDiv);
        }
        var totalitem = 0;
        var totalbill = 0;

        function addItemToTotal(name, price) {
            var totalItemsElement = document.getElementById("totalItems");
            var totalItems = parseInt(totalItemsElement.textContent);

            totalItems++;
            totalitem++;
            totalbill +=price;
            totalItemsElement.textContent = totalItems;

            // Update total bill
            var totalBillElement = document.getElementById("totalIBill");
            var totalBill = parseFloat(totalBillElement.textContent.replace('Rs.', '')) + price;
            totalBillElement.textContent = "Rs." + totalBill.toFixed(2);
        }
        
        let total = document.getElementById("totalIBill").innerText;
        var dataToSend = "" + total;
        localStorage.setItem("myData", JSON.stringify(dataToSend));

        // Example of calling the addItem function with some data
        addItem("Pizza", "veg tomato pizza", 80, "./acceat/Food/pizza1.jpg");
        addItem("Pizza", "veg tomato pizza", 80, "./acceat/Food/pizza1.jpg");
        addItem("Pizza", "veg fray pizza", 90, "./acceat/Food/pizzz2.jpg");
        addItem("Pizza", "veg paneer pizzz", 60, "./acceat/Food/pizzz3.png");
        addItem("Burger", "veg tomato Burger", 40, "./acceat/Food/burger1.jpg");
        addItem("Pizza", "veg fray pizza", 90, "./acceat/Food/pizzz2.jpg");
        addItem("Pizza", "veg panier pizzz", 60, "./acceat/Food/pizzz3.png");

       
        function basket() { 
    var dataToSend = 1000; // Example data to send
    
    // Set data to localStorage
    localStorage.setItem("myData", JSON.stringify(dataToSend));
    // Redirect to the second web page
    window.location.href = "total.html";
}

    </script>
