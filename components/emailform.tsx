import Link from "next/link";
import { useState } from "react"; // Import useState hook

type Props = {
  extreme: boolean;
};

const EmailForm: React.FC<Props> = ({ extreme }) => {
  const [isSending, setIsSending] = useState(false); // State to track sending status

  const sendEmail = async (email: string, subject: string, message: string) => {
    setIsSending(true); // Set isSending to true when sending starts
    try {
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
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSending(false); // Set isSending back to false after sending completes
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const subject = `Oliver got a personal job request from ${event.target.name.value}`;
    const message = `MESSAGE: ${event.target.jobDescription.value} <br/> Respond to ${email}`;
    await sendEmail("omoscow15@gmail.com", subject, message);
  };

  return (
    <div>
      <div>
        <form className="flex flex-col font-bold pt-5" onSubmit={handleSubmit}>
          <label className="">YOUR NAME</label>
          <input
            className="rounded-md p-2 mb-3 text-black bg-gray-400"
            type="text"
            name="name"
            id="name"
            required
          />
          <label className="">YOUR EMAIL</label>
          <input
            className="rounded-md p-2 mb-3 text-black bg-gray-400"
            type="text"
            name="email"
            id="email"
            required
          />
          <label className="">YOUR MESSAGE</label>
          <textarea
            className="rounded-md p-2 mb-3 text-black bg-gray-400"
            name="jobDescription"
            id="jobDescription"
            cols={30}
            rows={10}
            required
          ></textarea>
          {extreme ? (
            <button
              className={`text-lg px-4 py-2 text-black rounded-md hover:bg-yellow-300 ${
                isSending ? "bg-gray-300 cursor-not-allowed" : "bg-yellow-400"
              }`}
              type="submit"
              aria-label="send message"
              disabled={isSending} // Disable button when isSending is true
            >
              {isSending ? "Sending..." : "SEND (I'LL REPLY BACK)"}
            </button>
          ) : (
            <button
              className={`text-lg px-4 py-2 text-black rounded-md hover:bg-gray-500 ${
                isSending ? "bg-gray-300 cursor-not-allowed" : "bg-gray-400"
              }`}
              type="submit"
              aria-label="send message"
              disabled={isSending} // Disable button when isSending is true
            >
              {isSending ? "Sending..." : "SEND (I'LL REPLY BACK)"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
