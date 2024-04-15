import BlogImg1 from "../assets/blog/psychology.jpg";
import BlogImg2 from "../assets/blog/brandworks.jpg";
import BlogImg3 from "../assets/blog/relation.webp";
import BlogImg4 from "../assets/blog/principle.jpg";
import BlogImg5 from "../assets/blog/trust.jpg";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import gsap from "gsap";
import BlogDetail from "./BlogDetail";
import { useGSAP } from "@gsap/react";
// const BlogDetail = lazy(() => import("./BlogDetail"));
// Loading fallback component
// const LoadingFallback = () => <div>Loading...</div>;
function Blog() {
  const BlogData = [
    {
      img: BlogImg1,
      title: "Psychology of Personal Branding",
      intro:
        "At the core of personal branding lies the concept of self-perception. How you see yourself profoundly influences how others perceive you. Your beliefs, values, strengths, and weaknesses shape the essence of your personal brand. Understanding and aligning your self-perception with your desired brand image is crucial. It involves introspection, acknowledging your strengths, and addressing any areas for improvement. By cultivating a positive self-perception and embracing authenticity, you lay a solid foundation for building a compelling personal brand that resonates with your audience.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque veniam facere quo a nihil?",
      topic1: "Self-Perception and Identity Formation:",
      desc1:
        "Our self-perception forms the cornerstone of our personal brand. How we see ourselves influences the way we present ourselves to others. This topic delves into the psychological mechanisms behind self-perception, including self-concept, self-esteem, and self-efficacy. We'll explore how individuals develop their identity, how they reconcile their internal self-image with external perceptions, and the role of authenticity in personal branding.",
      topic2: "Brand Archetypes and Personality Traits:",
      desc2:
        "Just as brands have archetypes, individuals too embody certain archetypal traits that shape their personal brand. Drawing from Jungian psychology, this topic examines various archetypes such as the Hero, the Sage, the Explorer, and their manifestations in personal branding. We'll delve into how understanding these archetypes can help individuals align their personal brand with their core values, aspirations, and audience preferences.",
      topic3: "Influence of Perception and Social Cognition:",
      desc3:
        "Perception is reality in the realm of personal branding. How others perceive us significantly impacts our personal brand's effectiveness. This topic explores the psychology of perception and social cognition, including the halo effect, impression management, and attribution theory. We'll analyze how individuals can leverage these cognitive biases to enhance their personal brand's appeal and credibility in the eyes of their audience.",
      topic4: "Emotional Branding and Connection:",
      desc4:
        "Emotions play a pivotal role in personal branding, as they influence how individuals connect with and perceive a personal brand. This topic delves into the realm of emotional branding, exploring the psychological underpinnings of emotional resonance, empathy, and storytelling. We'll discuss how effectively communicating one's emotions and values can foster deeper connections with the audience, leading to greater brand loyalty and influence.",
      topic5: "",
      desc5: "",
      topic6: "",
      desc6: "",
      topic7: "",
      desc7: "",
      topic8: "",
      desc8: "",
      topic9: "",
      desc9: "",
      topic10: "",
      desc10: "",
      topic11: "",
      desc11: "",
      topic12: "",
      desc12: "",
      conclusion:
        "By delving into these psychological dimensions of personal branding, individuals can gain valuable insights into how they can authentically shape their personal brand, establish meaningful connections, and achieve their professional and personal objectives in today's competitive landscape.",
    },

    {
      img: BlogImg2,
      title: "How Personal Branding Works",
      intro:
        "Personal branding is not just about creating an image; it's about strategically managing how you're perceived by others. It involves a combination of conscious efforts to showcase your unique skills, experiences, and values to your target audience. Understanding how personal branding works requires insight into marketing principles, human psychology, and communication strategies. In this blog, we'll unravel the mechanisms behind effective personal branding and explore how individuals can leverage them to stand out in today's competitive landscape.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque veniam facere quo a nihil?",
      topic1: "Defining Your Unique Value Proposition:",
      desc1:
        "Effective personal branding starts with identifying and articulating your unique value proposition (UVP). This topic explores how individuals can pinpoint their strengths, experiences, and passions that set them apart from others in their field. We'll discuss techniques for crafting a compelling UVP that resonates with the target audience and communicates the benefits of engaging with your personal brand.",
      topic2: "Building an Authentic Online Presence:",
      desc2:
        "In today's digital age, an authentic online presence is essential for personal branding success. This topic delves into strategies for curating a cohesive and authentic online persona across various platforms, including social media, personal websites, and professional networks. We'll explore how individuals can use storytelling, visual branding, and content marketing to showcase their expertise and engage with their audience effectively.",
      topic3: "Networking and Relationship Building:",
      desc3:
        "Personal branding goes beyond self-promotion; it's about building genuine connections with others in your industry. This topic examines the importance of networking and relationship building in personal branding. We'll discuss strategies for expanding your professional network, nurturing meaningful relationships, and leveraging these connections to enhance your personal brand's visibility and credibility.",
      topic4: "Adapting and Evolving Your Brand:",
      desc4:
        "Personal branding is not static; it evolves over time as individuals grow and their goals change. This topic explores the importance of adaptability and flexibility in personal branding. We'll discuss how individuals can monitor industry trends, gather feedback, and pivot their brand messaging and strategies to stay relevant and competitive in dynamic market environments.",
      topic5: "",
      desc5: "",
      topic6: "",
      desc6: "",
      topic7: "",
      desc7: "",
      topic8: "",
      desc8: "",
      topic9: "",
      desc9: "",
      topic10: "",
      desc10: "",
      topic11: "",
      desc11: "",
      topic12: "",
      desc12: "",
      conclusion:
        "Understanding how personal branding works empowers individuals to take control of their professional identity and career trajectory. By defining their unique value proposition, building an authentic online presence, nurturing relationships, and remaining adaptable, individuals can effectively navigate the intricacies of personal branding and unlock opportunities for growth and success.",
    },
    {
      img: BlogImg3,
      title: "The Relationship Between Personal Branding and Business Growth",
      intro:
        "Personal branding isn't just beneficial for individuals; it can also significantly impact the growth of businesses. By aligning personal branding efforts with business goals and values, entrepreneurs and business owners can enhance brand visibility, credibility, and customer loyalty. In this blog, we'll explore the symbiotic relationship between personal branding and business growth, examining how investing in personal branding can drive success and expansion for both individuals and businesses.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque veniam facere quo a nihil?",
      topic1: "Building Trust and Credibility:",
      desc1:
        "Trust is the foundation of any successful business. This topic explores how a strong personal brand can enhance trust and credibility in the eyes of consumers. We'll discuss strategies for showcasing expertise, values, and authenticity to build trust with the audience. Additionally, we'll examine how personal branding efforts can humanize the brand and foster deeper connections with customers, ultimately driving business growth.",
      topic2: "Attracting and Retaining Customers:",
      desc2:
        "Personal branding can be a powerful tool for attracting and retaining customers. This topic delves into how a compelling personal brand can differentiate a business in a crowded marketplace, attracting the right audience and encouraging customer loyalty. We'll explore the role of storytelling, brand consistency, and personalized experiences in attracting and retaining customers, ultimately contributing to business growth.",
      topic3: "Expanding Business Opportunities:",
      desc3:
        "A strong personal brand can open doors to new business opportunities and partnerships. This topic examines how personal branding efforts can increase visibility and credibility within industry networks, leading to collaborations, speaking engagements, and other growth opportunities. We'll discuss strategies for leveraging personal branding to expand business networks and access new markets, ultimately driving business growth and diversification.",
      topic4: "Driving Innovation and Thought Leadership:",
      desc4:
        "Personal branding can position individuals and businesses as thought leaders within their industry, driving innovation and industry recognition. This topic explores how thought leadership can contribute to business growth by attracting top talent, fostering industry partnerships, and driving product innovation. We'll discuss strategies for establishing thought leadership through content creation, industry insights, and networking, ultimately driving business growth and market influence.",
      topic5: "",
      desc5: "",
      topic6: "",
      desc6: "",
      topic7: "",
      desc7: "",
      topic8: "",
      desc8: "",
      topic9: "",
      desc9: "",
      topic10: "",
      desc10: "",
      topic11: "",
      desc11: "",
      topic12: "",
      desc12: "",
      conclusion:
        "The relationship between personal branding and business growth is symbiotic and mutually beneficial. By investing in personal branding efforts that build trust, attract customers, expand opportunities, and drive innovation, individuals and businesses can achieve sustainable growth and success in today's competitive landscape.",
    },
    {
      img: BlogImg4,
      title: "The Seven Principles of Your Personal Brand",
      intro:
        "Your personal brand is more than just a logo or a tagline; it's the essence of who you are and what you stand for. By understanding and embodying the seven principles of personal branding, you can cultivate a strong and authentic brand identity that resonates with your audience and drives success in both your personal and professional life. In this blog, we'll explore these seven principles and how they form the foundation of a compelling personal brand.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque veniam facere quo a nihil?",
      topic1: "Authenticity:",
      desc1:
        "Authenticity is the cornerstone of your personal brand. It involves being genuine, transparent, and true to yourself in all your interactions and communications. By staying true to your values, beliefs, and personality, you build trust and credibility with your audience.",
      topic2: "Clarity:",
      desc2:
        "Clarity is essential for effectively communicating your personal brand. It involves clearly defining who you are, what you do, and what sets you apart from others. A clear and concise message helps your audience understand your unique value proposition and why they should engage with your personal brand.",
      topic3: "Consistency:",
      desc3:
        "Consistency is key to building a strong personal brand. It involves maintaining a cohesive and uniform image across all your platforms and interactions. Consistent branding helps reinforce your brand identity and makes it easier for your audience to recognize and remember you.",
      topic4: "Authenticity:",
      desc4:
        "Authenticity is the cornerstone of your personal brand. It involves being genuine, transparent, and true to yourself in all your interactions and communications. By staying true to your values, beliefs, and personality, you build trust and credibility with your audience.",
      topic5: "Relevance:",
      desc5:
        "Relevance is essential for keeping your personal brand current and engaging. It involves staying up-to-date with industry trends, audience preferences, and cultural shifts. By staying relevant, you ensure that your personal brand remains compelling and resonates with your audience.",
      topic6: "Differentiation:",
      desc6:
        "Differentiation sets your personal brand apart from others in your field. It involves identifying and highlighting what makes you unique and distinctive. By showcasing your unique skills, experiences, and perspectives, you stand out from the crowd and attract attention to your personal brand.",
      topic7: "Engagement:",
      desc7:
        "Engagement is crucial for building meaningful connections with your audience. It involves actively interacting with your audience, listening to their feedback, and responding to their needs and concerns. By fostering engagement, you cultivate loyal followers and advocates for your personal brand.",
      topic8: "",
      desc8: "",
      topic9: "",
      desc9: "",
      topic10: "",
      desc10: "",
      topic11: "",
      desc11: "",
      topic12: "",
      desc12: "",
      conclusion:
        "By embodying these seven principles of personal branding—authenticity, clarity, consistency, relevance, differentiation, and engagement—you can cultivate a strong and compelling personal brand that resonates with your audience and drives success in both your personal and professional life.",
    },
    {
      img: BlogImg5,
      title:
        "12 Ways Business Leaders Can Build Trust With Their Personal Brand",
      intro:
        "Building trust is essential for business leaders to establish credibility, foster loyalty, and drive success. Your personal brand plays a pivotal role in shaping how others perceive you and your business. By implementing specific strategies, business leaders can strengthen their personal brand and build trust with their audience. In this blog, we'll explore 12 actionable ways that business leaders can build trust through their personal brand.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque veniam facere quo a nihil?",
      topic1: "Lead with Authenticity:",
      desc1:
        "Authenticity is key to building trust. Business leaders should strive to be genuine, transparent, and consistent in their actions and communications. By leading with authenticity, leaders demonstrate integrity and build rapport with their audience.",
      topic2: "Demonstrate Expertise:",
      desc2:
        "Position yourself as an expert in your field by sharing valuable insights, knowledge, and experiences. Demonstrating expertise builds credibility and instills confidence in your audience, making them more likely to trust your advice and recommendations.",
      topic3: "Communicate Openly and Honestly:",
      desc3:
        "Effective communication is essential for building trust. Business leaders should communicate openly and honestly with their audience, addressing concerns transparently and providing accurate information. By fostering clear and honest communication, leaders build trust and credibility with their audience.",
      topic4: "Deliver Consistently High-Quality Work:",
      desc4:
        "Consistently delivering high-quality work reinforces your reputation and builds trust with your audience. Business leaders should strive for excellence in everything they do, whether it's delivering products, services, or content. By consistently exceeding expectations, leaders earn the trust and loyalty of their audience.",
      topic5: "Build Meaningful Relationships:",
      desc5:
        "Building meaningful relationships is essential for building trust. Business leaders should prioritize building connections with their audience, employees, customers, and industry peers. By investing time and effort into building relationships, leaders demonstrate care and commitment, earning the trust and loyalty of those around them.",
      topic6: "Act with Integrity and Ethics:",
      desc6:
        "Integrity and ethics are fundamental for building trust. Business leaders should conduct themselves with integrity, honesty, and ethical behavior in all their interactions and decisions. By acting with integrity, leaders demonstrate reliability and build trust with their audience.",
      topic7: "Listen and Respond to Feedback:",
      desc7:
        "Listening to feedback is crucial for building trust. Business leaders should actively seek feedback from their audience and stakeholders, listen attentively, and respond thoughtfully. By demonstrating a willingness to listen and adapt, leaders show that they value their audience's input and build trust and loyalty.",
      topic8: "Be Transparent About Mistakes and Failures:",
      desc8:
        "Transparency is essential for building trust, even when it comes to mistakes and failures. Business leaders should openly acknowledge their mistakes, take responsibility, and communicate transparently about how they plan to address them. By being transparent about mistakes and failures, leaders demonstrate humility and build trust with their audience.",
      topic9: "Embrace Authentic Storytelling:",
      desc9:
        "Storytelling is a powerful tool for building trust. Business leaders should embrace authentic storytelling to share their journey, values, and experiences with their audience. By sharing personal stories and insights, leaders create emotional connections and build trust with their audience.",
      topic10: "Demonstrate Empathy and Understanding:",
      desc10:
        "Empathy is essential for building trust. Business leaders should demonstrate empathy and understanding towards their audience, employees, and customers. By showing that they understand and care about their audience's needs and concerns, leaders build trust and loyalty.",
      topic11: "Consistently Deliver on Promises:",
      desc11:
        "Consistently delivering on promises is essential for building trust. Business leaders should make realistic promises and commitments to their audience and consistently deliver on them. By fulfilling promises and commitments, leaders demonstrate reliability and build trust with their audience.",
      topic12: "Be Accessible and Approachable:",
      desc12:
        "Accessibility and approachability are essential for building trust. Business leaders should make themselves accessible to their audience, employees, and stakeholders, whether it's through open communication channels, public events, or social media. By being approachable and accessible, leaders show that they value their audience's input and build trust and loyalty.",
      conclusion:
        "Building trust with your personal brand is a continuous process that requires dedication, authenticity, and integrity. By implementing these 12 strategies, business leaders can strengthen their personal brand and build trust with their audience, fostering loyalty and driving success for themselves and their businesses.",
    },
  ];
  const itemsPerPage = 4;
  const blogRef = useRef(null);
  const [visibleBlog, setVisibleBlog] = useState(
    BlogData.slice(0, itemsPerPage)
  );

  useEffect(() => {
    const blog = document.querySelectorAll(".blogs");
    blog.forEach(function (elem) {
      elem.addEventListener("mouseenter", function (e) {
        gsap.to(elem.childNodes[0], {
          opacity: 1,
          scale: 1,
          duration: 0.5,
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to(elem.childNodes[0], {
          opacity: 0,
          scale: 0,
        });
      });
      elem.addEventListener("mousemove", function (e) {
        gsap.to(elem.childNodes[0], {
          duration: 0.5,
          yoyo: true,
          x: e.clientX - elem.getBoundingClientRect().x,
          y: e.clientY - elem.getBoundingClientRect().y,
          ease: "power3.out",
        });
      });
    });
  }, []);
  const [blogDetail, setBlogDetail] = useState(false);
  const [clickedBlog, setclickedBlog] = useState([]);

  // Function to handle click on blog preview
  const handleBlogPreview = (index) => {
    // Toggle blogDetail state
    setBlogDetail(!blogDetail);

    // Get the clicked blog item
    const clickedBlog = visibleBlog[index];

    // Add the clicked blog to the clickedBlog array
    setclickedBlog((prevclickedBlog) => [...prevclickedBlog, clickedBlog]);
  };
  // console.log(clickedBlog);

  // loadm ore blog function
  const [noOfBlog, setNoOfBlog] = useState(4);
  const sliceBlog = BlogData.slice(0, noOfBlog);
  const handleLoad = () => {
    setNoOfBlog(noOfBlog + noOfBlog);
  };
  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth < 768; // Assuming mobile screen width is less than 768px
      setNoOfBlog(isMobile ? 2 : 4); // Set number of blogs based on screen width
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const scroll = useRef(null);
  useGSAP(() => {
    gsap.to(scroll.current, {
      repeat: -1,
      y: "7px",
      yoyo: true,
      duration: 0.8,
      ease: "linear",
    });
  });
  return (
    <>
      <div
        ref={blogRef}
        id="blog"
        className="w-full py-[6rem] flex justify-center items-center flex-col bg-[#FFFFFF]  px-[5vw] md:px-[15vw] overflow-hidden border-b-[1px] border-zinc-100 "
      >
        <div className="w-full flex flex-col justify-center items-start ">
          <span className="text-[13px] font-bold uppercase  text-zinc-400">
            Blog
          </span>
          <h1 className="font-bold text-[3rem] md:text-[3vw] text-black">
            Expert personal branding
          </h1>
          {/* content  */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[5rem] gap-y-1 justify-start items-center mt-[1rem] md:px-[5rem]">
            {sliceBlog.map((item, index) => (
              <div
                onClick={() => handleBlogPreview(index)}
                key={index}
                className="flex relative h-[35rem] cursor-pointer  blogs  justify-start  flex-col overflow-hidden  items-start"
              >
                {/* view circle  */}
                <div className="absolute top-0 left-0 scale-0 flex justify-center items-center translate-x-[-50%] translate-y-[-50%] text-center  rounded-full bg-zinc-100  text-black font-medium text-[12px] opacity-0 w-[4rem] h-[4rem]">
                  Read
                </div>
                <div className="w-full h-[30rem] ">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={item.img}
                    alt="blog"
                    loading="lazy"
                  />
                  <div className="flex flex-col justify-center items-start mt-[1rem] w-full ">
                    <h2 className="text-[15px] font-bold  text-zinc-700">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* loadmore bLog */}
          <div
            onClick={() => handleLoad()}
            className="mx-auto flex justify-center items-center flex-col text-sm font-bold  cursor-pointer text-zinc-600 hover:text-zinc-900"
          >
            <span className="font-bold tracking-widest text-[15px] ">
              Load more
            </span>
            <div ref={scroll} className="w-[1.5rem] h-[1.5rem] ">
              <Icon
                className="w-full h-full object-cover object-center"
                icon="mingcute:arrows-down-line"
              />
            </div>
          </div>
        </div>
      </div>

      {/* blog detail section  */}
      {blogDetail ? (
        // <Suspense fallback={<LoadingFallback />}>
        <BlogDetail
          blogDetail={blogDetail}
          setBlogDetail={setBlogDetail}
          clickedBlogData={clickedBlog}
          setClickedBlogData={setclickedBlog}
        />
      ) : (
        // </Suspense>
        ""
      )}
    </>
  );
}

export default Blog;
