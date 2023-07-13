import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <section>
      <h1>About Us</h1>
      <div className="container">
        <Accordion>
          <Card>
            <Card.Header>
              {/* Organization Name */}
            </Card.Header>
            <Accordion.Collapse>
              <Card.Body>
                {/* Organization details */}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          {/* Repeat the above Card structure for other details */}
        </Accordion>
      </div>
    </section>
  );
};

export default AboutUs;
