import React from 'react';
import './App.css';

const pricingPlans = [
  {
    name: "FREE",
    price: "$0/month",
    features: [
      "✔ Single User",
      "✔ 50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports"
    ]
  },
  {
    name: "PRO",
    price: "$9/month",
    features: [
      "5 Users",
      "✔ 50GB Storage",
      "✔ Unlimited Public Projects",
      "✔ Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports"
    ]
  },
  {
    name: "PLUS",
    price: "$49/month",
    features: [
      "Unlimited Users",
      "✔ 50GB Storage",
      "✔ Unlimited Public Projects",
      "✔ Community Access",
      "✔ Unlimited Private Projects",
      "✔ Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports"
    ]
  }
];

const PricingCard = ({ name, price, features }) => (
  <div className="card">
    <h3>{name}</h3>
    <h4>{price}</h4>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button>BUTTON</button>
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pricing Plans</h1>
      </header>
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            name={plan.name}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
