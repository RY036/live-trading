import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ContactModalProps {
  CloseFunc: () => void;
}

const ContactTemplate = ({ CloseFunc }: ContactModalProps) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-side only code
    }
  }, []);

  return (
    <div className="flex justify-center items-center fixed inset-0 z-[200] bg-black bg-opacity-50 p-4">
      <div className="flex flex-col bg-white px-6 pt-6 pb-8 w-full h-auto max-w-lg md:max-w-3xl lg:max-w-4xl max-h-[90vh] overflow-auto rounded-lg">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e0c5d3e08fe019bf0068deabd5c196a585fe229c603b3ec6e3a7f1ce6fbd25c?placeholderIfAbsent=true&apiKey=d324b045a78e41d09d8faa0621196924"
          className="object-contain self-end aspect-square w-10 cursor-pointer"
          alt="Close Icon"
          onClick={CloseFunc}
        />
        <div className="flex flex-col self-center text-center w-full">
          <h2 className="text-2xl md:text-3xl font-light text-neutral-800">Connect with our Team</h2>
          <p className="mt-4 md:mt-6 text-sm md:text-lg text-zinc-600">
            Got Questions? We've Got Answers—Connect with Us and Let's Make It Happen!
          </p>
        </div>
        <div className="mt-6 md:mt-8">
          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="flex flex-col w-full md:w-1/2">
              <div className="flex flex-col py-6 px-4 bg-green-400 rounded-md">
                <form className="flex flex-col text-sm md:text-lg text-center text-zinc-600">
                  <h3 className="text-lg md:text-2xl font-medium text-neutral-800 text-left">Get in Touch with Us</h3>
                  <input
                    type="text"
                    placeholder="Enter your Name *"
                    required
                    className="py-2 px-3 mt-4 bg-white border border-gray-800 rounded-md shadow-sm"
                  />
                  <input
                    type="email"
                    placeholder="Enter your E Mail ID *"
                    required
                    className="py-2 px-3 mt-4 bg-white border border-gray-800 rounded-md shadow-sm"
                  />
                  <textarea
                    placeholder="Submit your message here *"
                    required
                    className="py-2 px-3 mt-4 bg-white border border-gray-800 rounded-md shadow-sm"
                  ></textarea>
                  <button
                    type="submit"
                    className="self-start px-6 py-2 mt-4 text-sm font-semibold text-neutral-800 border border-neutral-800 rounded-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 mt-6 md:mt-0">
              <h3 className="text-lg md:text-2xl font-medium text-neutral-800">Contact Details</h3>
              <p className="mt-4 text-sm md:text-lg text-zinc-600">
                For Support or Trading Insights, Reach Out to Us Today! Let's work together to achieve trading excellence.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <img className="w-6" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fdc2f8d4890dbfef38076ec5c418eea0cf5e4835b9d93a4c3fae1115843feff" alt="Email icon" />
                  <a href="mailto:Algoatlasedge@gmail.com">Algoatlasedge@gmail.com</a>
                </div>
                
                <div className="flex items-center gap-3">
                  <img className="w-6" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b208d8c3053495c4b50a38a5d83fecc2a7cb9dcfae3aeb1cc1446fbc663112fe" alt="Location icon" />
                  <p>No:01, Dummy St, India</p>
                </div>
                
              </div>
              <div className=" flex justify-between items-center border-t border-zinc-600 pt-4 mt-20">
                  <p className="text-lg font-medium text-zinc-700 mt-2">Social Media:</p>
                  <div className="flex gap-8 items-center mt-4">
                    <a href="#" aria-label="Facebook">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e91c92e3717bc24c5af37c5f69fef61fc98906d547f6b856213e401142962575?placeholderIfAbsent=true&apiKey=d324b045a78e41d09d8faa0621196924"
                        className="w-6"
                        alt="Facebook"
                      />
                    </a>
                    <a href="#" aria-label="Twitter">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9ec5dbb46d0a19572a68e458d632671be8d4544af2d20caa6190947820aaf75?placeholderIfAbsent=true&apiKey=d324b045a78e41d09d8faa0621196924"
                        className="w-6"
                        alt="Twitter"
                      />
                    </a>
                    <a href="#" aria-label="Instagram">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2debe8b935ad052382daebf7b1ecd40ab95e279374496442adf04c54482c7116?placeholderIfAbsent=true&apiKey=d324b045a78e41d09d8faa0621196924"
                        className="w-6"
                        alt="Instagram"
                      />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/58f0e538034ca378e72296bd956278c6360d0fa1237c32f5498514b27abd191a?placeholderIfAbsent=true&apiKey=d324b045a78e41d09d8faa0621196924"
                        className="w-6"
                        alt="LinkedIn"
                      />
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTemplate;


