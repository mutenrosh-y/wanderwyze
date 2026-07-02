/**
 * WanderWyze Holidays - WhatsApp Enquiry Generator
 * Compiles user inputs into a gorgeous pre-filled message
 * and redirects directly to Ravinder (+91 9833834836)
 */

window.WanderWyzeEnquiry = {
    whatsappNumber: "919833834836",

    /**
     * Compiles customizer data into a beautiful, URL-safe message
     */
    sendInquiry: function(formData) {
        const name = formData.name || "Guest";
        const email = formData.email || "Not provided";
        const phone = formData.phone || "Not provided";
        const destination = formData.destination || "Bespoke Tour";
        const month = formData.month || "TBD";
        const travelers = formData.travelers || "1";
        const notes = formData.notes || "No special requests.";

        // Construct highly professional, beautifully spaced template
        const template = `✨ *NEW BESPOKE TRIP INQUIRY* ✨
----------------------------------
👤 *Traveler Name:* ${name}
📧 *Email:* ${email}
📞 *Phone:* ${phone}

🌍 *Destination:* ${destination}
📅 *Preferred Month:* ${month}
👥 *Number of Travelers:* ${travelers}

📝 *Additional Custom Requests & Notes:*
"${notes}"

----------------------------------
💬 _Compiled via WanderWyze Bespoke Travel Customizer._`;

        // Encode parameters safely
        const encodedText = encodeURIComponent(template);
        const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedText}`;

        // Print to console for debugging
        console.log("Compiling WanderWyze Inquiry:", template);
        
        // Open WhatsApp in a new window/tab
        window.open(whatsappUrl, "_blank");
    }
};