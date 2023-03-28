export default function Hire() {
  const sendEmail = async (email: string, subject: string, message: string) => {
    const res = await fetch('/api/sendgrid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, subject, message })
    });
    if (res.status === 200) {
      alert('Your message has been sent! I will get back to you as soon as possible.');
    } else {
      alert('Something went wrong. Please try again later.');
    }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const subject = `Oliver got a personal job request from ${event.target.name.value}`;
    const message = `Job Description: ${event.target.jobDescription.value} <br/> Budget: ${event.target.budget.value} <br/> Respond to ${email}`;
    sendEmail("omoscow15@gmail.com", subject, message);
  };

  return (
    <div>
      <h1 className="text-2xl mt-10 mb-3 font-semibold text-pink-400">You Can Hire Me!</h1>
      <p>I build full-stack web and mobile aplications. Reach out for a custom quote!</p>
      <form className="flex flex-col font-semibold text-blue-700 py-5" onSubmit={handleSubmit}>
        <label className="text-white">Name</label>
        <input className="border-2 border-white rounded-md p-2 mb-3 bg-white bg-opacity-50" type="text" name="name" id="name" required/>
        <label className="text-white">Email</label>
        <input className="border-2 border-white rounded-md p-2 mb-3 bg-white bg-opacity-50" type="text" name="email" id="email" required/>
        <label className="text-white">Job Description</label>
        <textarea className="border-2 border-white rounded-md p-2 mb-3 bg-white bg-opacity-50" name="jobDescription" id="jobDescription" cols={30} rows={10} required></textarea>
        <label className="text-white">Budget</label>
        <input className="border-2 border-white rounded-md p-2 mb-3 bg-white bg-opacity-50" type="text" name="budget" id="budget" required/>        
        <button className="bg-orange-400 hover:bg-blue-400 text-white p-2 my-5 rounded-md bg-opacity-70" type="submit">Get A Custom Quote!</button>
      </form>
    </div>
  )
};
