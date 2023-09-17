import Link from "next/link";

type Props = {
  extreme: boolean;
};

const EmailForm: React.FC<Props> = ({ extreme }) => {
  const sendEmail = async (email: string, subject: string, message: string) => {
    const res = await fetch("/api/sendgrid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, subject, message }),
    });
    if (res.status === 200) {
      alert(
        "Your message has been sent! I will get back to you as soon as possible."
      );
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const subject = `Oliver got a personal job request from ${event.target.name.value}`;
    const message = `MESSAGE: ${event.target.jobDescription.value} <br/> Respond to ${email}`;
    sendEmail("omoscow15@gmail.com", subject, message);
  };

  return (
    <div>
      <div>
        <form className="flex flex-col font-bold pt-5" onSubmit={handleSubmit}>
          <label className="">YOUR NAME</label>
          <input
            className="rounded-md p-2 mb-3 text-black bg-gray-200"
            type="text"
            name="name"
            id="name"
            required
          />
          <label className="">YOUR EMAIL</label>
          <input
            className="rounded-md p-2 mb-3 text-black bg-gray-200"
            type="text"
            name="email"
            id="email"
            required
          />
          <label className="">YOUR MESSAGE</label>
          <textarea
            className="rounded-md p-2 mb-3 text-black bg-gray-200"
            name="jobDescription"
            id="jobDescription"
            cols={30}
            rows={10}
            required
          ></textarea>
          {extreme ? (
            <button
              className="text-lg px-4 py-2 text-black bg-yellow-400 rounded-md hover:bg-yellow-300"
              type="submit"
              aria-label="send message"
            >
              SEND (ILL REPLY BACK)
            </button>
          ) : (
            <button
              className="text-lg px-4 py-2 text-black bg-gray-400 rounded-md hover:bg-gray-500"
              type="submit"
              aria-label="send message"
            >
              SEND (ILL REPLY BACK)
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
