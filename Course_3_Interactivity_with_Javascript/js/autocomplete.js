

function billingFunction() {

    // Check if button is clicked
    if (document.getElementById('same').checked  == true) {
        
        // Copy the values in variables
        var name = document.getElementById('shippingName').value;
        var zip = document.getElementById('shippingZip').value;
        
        // Assign the values in the Billing Information Boxes
        document.getElementById('billingName').value = name;
        document.getElementById('billingZip').value = zip;
        
    }
    else {
        
        // Remove the information 
        document.getElementById('billingName').value = null;
        document.getElementById('billingZip').value = null;
        
    }
};













