export default function QuestionAndAnser() {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-12">
      <h1 className="text-3xl font-bold text-center text-gray-500 my-10">
        Quick Question & Answer
      </h1>
      <div className="join join-vertical max-w-7xl w-full ">
        {/* Question 1 */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What languages can I learn on this platform?
          </div>
          <div className="collapse-content">
            <p>
              You can learn a wide variety of languages, including Spanish,
              French, Mandarin, German, Japanese, and more. We offer over 50
              languages to choose from!
            </p>
          </div>
        </div>

        {/* Question 2 */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Are the lessons conducted by native speakers?
          </div>
          <div className="collapse-content">
            <p>
              Yes, most of our tutors are native speakers with professional
              teaching experience, ensuring an authentic and immersive learning
              experience.
            </p>
          </div>
        </div>

        {/* Question 3 */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Can I take lessons on my own schedule?
          </div>
          <div className="collapse-content">
            <p>
              Absolutely! Our platform allows you to schedule lessons at times
              that work best for you, making language learning flexible and
              convenient.
            </p>
          </div>
        </div>

        {/* Question 4 */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Is there a free trial available?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer a free trial lesson for new users so you can explore
              the platform and see if it’s the right fit for your learning
              needs.
            </p>
          </div>
        </div>

        {/* Question 5 */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            What is the cost of the lessons?
          </div>
          <div className="collapse-content">
            <p>
              The cost of lessons varies depending on the tutor and the length
              of the session. We offer competitive pricing starting at just $10
              per lesson.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
