export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="text-3xl font-bold">Check availability</h2>
      <p className="text-gray-600 mt-2">
        Tell us about your event. We will reply with open dates and a quote.
      </p>

      <form
        className="mt-8 bg-white border rounded-xl p-6 grid gap-4"
        action="https://formspree.io/f/your-id"
        method="POST"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input name="name" required placeholder="Your name" className="border rounded-md px-3 py-2" />
          <input name="email" required type="email" placeholder="Email" className="border rounded-md px-3 py-2" />
        </div>
        <input name="phone" placeholder="Phone" className="border rounded-md px-3 py-2" />
        <input name="date" type="date" className="border rounded-md px-3 py-2" />
        <textarea name="message" rows={5} placeholder="Event details, guest count, ideal time frame" className="border rounded-md px-3 py-2"></textarea>
        <button className="px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
          Send request
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-4">
        Prefer email or phone? info@thevalorvenue.com • (xxx) xxx-xxxx
      </p>
    </section>
  );
}
