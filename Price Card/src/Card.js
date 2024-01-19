function Card({ features, name, price }) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <h6
        className="card-subtitle  text-body-secondary"
        style={{ margin: "0" }}
      >
        {name}
      </h6>
      <div class="card-body">
        <h1 class="card-title">{`$${price}/month`}</h1>
        {/* <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p> */}
        <ul class="list-group list-group-flush">
          {features.map((e) => {
            return (
              <li class="list-group-item">
                {name === "PRO"
                  ? `✅${e}`
                  : name === "PLUS"
                  ? e == "Monthly Status report"
                    ? `❌${e}`
                    : `✅${e}`
                  : name === "FREE"
                  ? e === "Dedicated Phone Support" ||
                    e === "Unlimited Private Project" ||
                    e === "Free subdomain" ||
                    e === "Monthly Status report"
                    ? `❌${e}`
                    : `✅${e}`
                  : ""}
              </li>
            );
          })}
        </ul>
        <a href="#" class="btn btn-primary">
          Button
        </a>
      </div>
    </div>
  );
}

export default Card;
