import React, { Component } from "react";

const categories = [
  "Wedding Venues", "Caterers", "Wedding Invitations", "Wedding Gifts",
  "Wedding Photographers", "Wedding Music", "Wedding Transportation", "Tent House",
  "Wedding Entertainment", "Florists", "Wedding Planners", "Wedding Videography",
  "Honeymoon", "Wedding Decorators", "Wedding Cakes", "Wedding DJ", "Pandits",
  "Photobooth", "Astrologers", "Party Places", "Wedding Choreographers",
  "Bridal Jewellery", "Bridal Makeup Artists", "Bridal Lehenga", "Mehndi Artists",
  "Makeup Salon", "Trousseau Packing", "Grooms", "Sherwani"
];

class InquiryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        contactNumber: "",
        location: "",
        category: "",
        requirement: ""
      },
      formSubmitted: false,
      submitMessage: "",
      isLoading: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  handleSubmitRequirement = async () => {
    const { name, contactNumber, location, category, requirement } = this.state.formData;

    if (!name || !contactNumber || !location || !category || !requirement) {
      alert("Please fill in all fields!");
      return;
    }

    this.setState({ isLoading: true });

    try {
      const response = await fetch("http://localhost:5000/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.formData)
      });

      const result = await response.json();

      if (response.ok) {
        this.setState({
          formSubmitted: true,
          submitMessage: `Thank you, ${name}! We have received your inquiry.`,
          isLoading: false
        });

        setTimeout(() => {
          this.setState({
            formData: {
              name: "",
              contactNumber: "",
              location: "",
              category: "",
              requirement: ""
            },
            formSubmitted: false,
            submitMessage: ""
          });
          if (this.props.onClose) this.props.onClose();
        }, 3000);
      } else {
        alert("Submission failed. Please try again.");
        this.setState({ isLoading: false });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { formData, formSubmitted, submitMessage, isLoading } = this.state;
    const { onClose } = this.props;

    return (
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        ></div>

        {/* Form Container */}
        <div className="relative w-full max-w-xl bg-white/90 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl z-50 animate-fade-in-up transition-all duration-300">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-700 hover:text-red-500 hover:rotate-90 transition-transform duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h3 className="text-2xl md:text-3xl font-bold text-center text-pink-600 mb-8">
            ✨ Tell Us What You Need ✨
          </h3>

          {formSubmitted ? (
            <div className="bg-green-500/90 text-white p-6 rounded-2xl text-center shadow-lg">
              <svg className="w-10 h-10 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="font-semibold text-lg">Submission Successful!</p>
              <p className="text-sm mt-2">{submitMessage}</p>
            </div>
          ) : (
            <div className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                value={formData.name}
                onChange={this.handleChange}
              />
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                value={formData.contactNumber}
                onChange={this.handleChange}
              />
              <select
                name="category"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                value={formData.category}
                onChange={this.handleChange}
              >
                <option value="">Select Vendor Category</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
              <input
                type="text"
                name="location"
                placeholder="Your City / Location"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                value={formData.location}
                onChange={this.handleChange}
              />
              <textarea
                name="requirement"
                placeholder="Describe Your Requirement..."
                className="w-full px-4 py-3 h-28 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none resize-none"
                value={formData.requirement}
                onChange={this.handleChange}
              />
              <button
                onClick={this.handleSubmitRequirement}
                className={`w-full text-white py-3 rounded-xl font-semibold transition duration-300 shadow-lg ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 hover:scale-105"
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Requirement"}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default InquiryForm;
