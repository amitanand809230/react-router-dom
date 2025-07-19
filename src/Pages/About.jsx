const About = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Welcome to our mini React project! This application demonstrates the use of <strong>React Router</strong> for smooth navigation between pages,
        including a dynamic <strong>Product Details</strong> view. We've also integrated <strong>Tailwind CSS</strong> to ensure a modern, responsive design.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Built with love and attention to detail, this project is a small showcase of routing, reusable components, page structure, and UI styling.
        Whether you're exploring the products or checking out contact details, everything flows seamlessly. Thank you for visiting!
      </p>
    </div>
  );
};

export default About;