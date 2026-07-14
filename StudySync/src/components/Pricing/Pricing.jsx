import "./Pricing.css";
import PricingCard from "./PricingCard";

const plans = [
  {
    title: "Free",
    price: "0",
    description: "Perfect for students getting started.",
    buttonText: "Get Started",
    features: [
      "Dashboard Access",
      "Task Manager",
      "Study Planner",
      "Basic Notes",
    ],
  },
  {
    title: "Pro",
    price: "299",
    description: "Best choice for serious learners.",
    buttonText: "Start Pro",
    popular: true,
    features: [
      "Everything in Free",
      "Analytics",
      "Calendar",
      "Course Progress",
      "Priority Support",
    ],
  },
  {
    title: "Premium",
    price: "599",
    description: "For teams and advanced learners.",
    buttonText: "Go Premium",
    features: [
      "Everything in Pro",
      "AI Study Assistant",
      "Unlimited Notes",
      "Cloud Backup",
      "Team Collaboration",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">

      <div className="pricing-header">

        <span>PRICING</span>

        <h2>
          Choose the Plan That
          <span> Fits Your Goals</span>
        </h2>

        <p>
          Flexible pricing designed for every student—from beginners to
          professionals preparing for exams and careers.
        </p>

      </div>

      <div className="pricing-container">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>

    </section>
  );
};

export default Pricing;