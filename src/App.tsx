import Header from "./Elements/Header";
import Element from "./Elements/Element";
import Footer from "./Elements/Footer";

const App = () => {
  return (
    <main>
      <Header />
      <div className="py-[160px] px-[104px] flex flex-col gap-10">
        <Element
          h2="Grow Together"
          p="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
          img="illustration-grow-together.svg"
        />
        <Element
          h2="Flowing Conversations"
          p="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
          img="illustration-flowing-conversation.svg"
          isRight={true}
        />
        <Element
          h2="Your Users"
          p="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
          img="illustration-your-users.svg"
        />
      </div>
      <div className="h-[280px] max-w-[800px] shadow-2xl relative -bottom-[96px] rounded-xl mx-auto bg-white items-center justify-around flex flex-col">
        <h2 className="font-bold text-3xl text-very-dark-cyan ">
          Ready To Build Your Community?
        </h2>
        <button className="max-w-[400px] w-full h-20 bg-pink text-very-pale-cyan rounded-full hover:opacity-70 transition-opacity font-bold">
          Get Started For Free
        </button>
      </div>
      <Footer />
    </main>
  );
};

export default App;
