const Contact = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Me</h1>
      <div className="space-y-4 text-gray-700">
         <p>
          <strong>📞 Phone:</strong>{' '}
          <a href="tel:+918092305900" className="text-blue-600 hover:underline">+91-8092305900</a>
        </p>
        <p>
          <strong>📧 Email:</strong>{' '}
          <a href="mailto:amitanand809230@gmail.com" className="text-blue-600 hover:underline">amitanand809230@gmail.com</a>
        </p>
        <p>
          <strong>💼 LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/amitanand809230" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
            linkedin.com/in/yourlinkedin
          </a>
        </p>
        <p>
          <strong>💻 GitHub:</strong>{' '}
          <a href="https://github.com/amitanand809230" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
            github.com/yourgithub
          </a>
        </p>
        <p>
          <strong>📄 Resume:</strong>{' '}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
            Download Resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;