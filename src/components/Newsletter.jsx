export default function Newsletter() {
  return (
    <div>
      <div className="bg-accent2 py-10 md-2:px-20 px-5 text-left md-2:mx-10">
        <div className="text-2xl font-montserrat text-secondary">
          Subscribe to our newsletter
        </div>
        <div className="text-text font-openSans text-lg">
          Get the latest news and articles straight to your inbox
        </div>
        <div className="md-2:flex justify-center mt-5 md-2:space-y-0 space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 md-2:w-2/3 w-full"
          />
          <button className="bg-secondary text-primary p-2 md-2:ml-2 md-2:w-1/3 w-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
