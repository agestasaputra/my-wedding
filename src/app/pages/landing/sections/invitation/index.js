import React from "react";
import "./styles.scss";

const Invitation = ({ dataNewArrival, location }) => {
  return (
    <section className="container-invitation">
      <div className="columns columns-invitation-head">
        <div className="column">
          <h1 className="columns-invitation-head__title">INVITATION</h1>
          <hr />
        </div>
      </div>
      <div className="columns columns-invitation-body">
        <div className="column">
          {/* <h1 className="columns-invitation__title">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </h1> */}
          <h1 className="columns-invitation-body__title">
            السلام عليكم ورحمة الله وبركاته
          </h1>
          {/* <h1 className="columns-invitation-body__title">
            Assalamualaikum Warahmatullahi Wabarakatuh
          </h1> */}
          <p className="columns-invitation-body__desc">
            We are inviting you to celebrate the day when we take our next large
            step in the relationship. We promise you that the wedding will be
            magnificent. We would be incredibly grateful if you came to
            celebrate our love together with us!
            <br />
            <br />
            <br />
            <br />- Siska & Agesta -
          </p>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
