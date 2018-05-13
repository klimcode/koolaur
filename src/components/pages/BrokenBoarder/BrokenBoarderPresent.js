import React from 'react';
import img1 from './img.png';
import img2 from './img2.png';

export default class BrokenBoarderPresent extends React.Component {
  render() {
    return (
      <div className="BrokenBoarder">
        <h2>Flexbox</h2>
        <div className="br">
          <div className="br__side">
            <img src={img1} alt="" />
          </div>
          <div className="br__content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Harum quidem veritatis iste natus, quod cupiditate sequi
              voluptate? Dolores error aspernatur voluptate itaque aperiam
              debitis vero provident magni dicta. At, obcaecati?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Harum quidem veritatis iste natus, quod cupiditate sequi
              voluptate? Dolores error aspernatur voluptate itaque aperiam
              debitis vero provident magni dicta. At, obcaecati?
            </p>
          </div>
        </div>


        <h2>Display: table. For ie8+</h2>
        <div className="broken broken-left">
          <div className="broken__inner">
            <div className="broken__side">
              <div className="broken__side_table">
                <img src={img1} alt="" />
                <b />
              </div>
            </div>
            <div className="broken__text">Laudantium quae est facilis esse id laboriosam quasi ad nobis tenetur inventore accusamus maiores voluptatibus quam expedita debitis, sunt vero quis cupiditate, sit, explicabo perferendis! Perspiciatis reprehenderit eum soluta est. Modi voluptatum vel ducimus officiis, praesentium nemo, beatae impedit architecto laudantium, perspiciatis sit, sequi amet quaerat nihil. Ad adipisci incidunt fuga quibusdam veniam? Optio modi nulla cupiditate, dolores veritatis voluptates sit temporibus tempora consectetur aspernatur eveniet itaque praesentium dignissimos numquam ratione impedit, consequatur fugit quam provident ut quidem minima quasi perspiciatis ullam. Perspiciatis nulla ex sequi itaque reiciendis quisq!</div>
          </div>
        </div>

        <div className="broken broken-left">
          <div className="broken__inner">
            <div className="broken__side">
              <div className="broken__side_table">
                <img src={img2} alt="" />
                <b />
              </div>
            </div>
            <div className="broken__text">Dicta nesciunt ducimus quae dolorum ullam illo iste recusandae voluptas tenetur, exercitationem placeat beatae fugit quam provident ut quidem minima quasi perspiciatis ullam. Perspiciatis nulla ex sequi itaque reiciendis quisq!</div>
          </div>
        </div>

        <div className="broken broken-right">
          <div className="broken__inner">
            <div className="broken__text">Dicta nesciunt ducimus quae dolorum ullam illo iste recusandae voluptas tenetur, exercitationem placeat beatae fugit quam provident ut quidem minima quasi perspiciatis ullam. Perspiciatis nulla ex sequi itaque reiciendis quisq!</div>
            <div className="broken__side">
              <div className="broken__side_table">
                <img src={img1} alt="" />
                <b />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
