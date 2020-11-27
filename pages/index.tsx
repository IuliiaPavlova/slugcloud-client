/* eslint-disable no-alert */
import Button from '../components/button';
import FormWidget from '../components/formwidget';
import Heading from '../components/heading';

const Index = () => (
  <>
    <section sa-theme="white">
      <div className="slide slide-lg">
        <div className="slide-body">
          <div className="slide-box" sa-flex="column-start">
            <Heading title="More than just shorter links" level={1} fontSize="l" />
            <div className="slide-description">Slide description will be described vividly right here</div>
            <div>
              <Button type="button" priority="primary" label="Get started" action={{ type: 'action', cb: () => alert('You\'ve just started!') }} />
            </div>
          </div>
          <div className="slide-box image-box" sa-flex="column-start">
            <img src="/images/illustration-working.svg" alt="We work hard to make you happy!" />
          </div>
        </div>
      </div>
    </section>
    <section sa-theme="snow">
      <FormWidget />
    </section>
    <section sa-theme="snow">
      <div className="slide">
        <div className="slide-box" sa-flex="center">
          <Heading title="Advanced Statistics" level={2} fontSize="m" />
          <div className="slide-description">Track how your links are performing across the web with our advanced statistics dashboard.</div>
        </div>
        <div className="slide-box" sa-flex="center">
          Feature Cards
        </div>
      </div>
    </section>
    <section sa-theme="liquid">
      <div className="slide">
        <div className="slide-box" sa-flex="center">
          <Heading title="Boost your links today" level={2} fontSize="m" />
          <div>
            <Button type="button" priority="primary" label="Get started" action={{ type: 'action', cb: () => alert('You\'ve just started!') }} />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Index;
