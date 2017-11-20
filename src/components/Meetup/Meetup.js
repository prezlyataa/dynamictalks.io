import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import { Section, SHAPE, SECTION_THEME } from 'src/components/Section';
import { Tabs } from 'src/components/Tabs';
import slack from 'src/images/slack_icon.png';
import facebook from 'src/images/facebook-logo.png';
import './Meetup.scss';

const tabs = [
  {
    name: 'РОЗКЛАД',
    content: 'Content for 1'
  },
  {
    name: 'ПРО «DYNAMIC TALKS»',
    content: 'Content for 2'
  }
];

const TabComponent = (props) => {
  return (
    <Tabs selected={props.firstSelect || 0}>

      {props.tabs.map(tab =>
        <Pane
          className="tabs__head"
          label={tab.name}
        >
          {tab.content}
        </Pane>)
      }
    </Tabs>
  );
};

const Pane = (props) => {
  return <div>{props.children}</div>;
};

export const CN = 'line-meetup';

export default class Meetup extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,

    /**
     * config - configuration object
     */
    config: PropTypes.object.isRequired,

    /**
     * id - id of the section
     */
    id: PropTypes.string
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    autoBind(this);
  }

  renderAgenda() {
    const { config } = this.props;

    return config
      .agenda
      .map(({time, description}, index) => (
        <li key={index}>
          <span className="line-timetable">
            <span className="time">{time}</span>
            <span className="text">{description}
              <span className="underline">_______</span>
            </span>
          </span>
        </li>
      ));
  }

  render() {
    const {
      className,
      config,
      id
    } = this.props;

    return (
      <Section
        className={cx(CN, className)}
        config={config}
        id={id}
        shape={SHAPE.CIRCLE}
        showDateAndLocation
        theme={SECTION_THEME.WHITE}
        title="Meetup"
      >

        <div className="events__content">
          <div className="tabs"
            id="events-tabs"
          >
            <div className="tabs__head">
              <div className="tabs__item active">
                <span>Розклад</span>
              </div>
              <div className="tabs__item">
                <span>Про «Dynamic Talks»</span>
              </div>
            </div>
            <div className="tabs__content">

              <div className="tabs__text-content  active">
                <div className="tabs__content-container">
                  <ul className="schedule">
                    {this.renderAgenda()}
                  </ul>
                </div>
              </div>

              <div className="tabs__text-content">
                <div className="tabs__content-container">
                  <div className="tabs-info">
                    <p>JS Dynamic Talks - це серія регулярних мітапів, де спеціалісти будуть ділитись своїм
          досвідом і розкривати актуальні теми, обговорювати поточні тренди та існуючі проблеми,
          шукати варіанти їх вирішення. Ми бачимо Dynamic Talks як платформу публічного обміну знаннями
          та досвідом. Якщо вам є чим поділитись і ви бажаєте це робити - зв'яжіться з нами, ми додамо
          вас в один з наступних мітапів. Якщо треба, ми допоможемо пропрацювати презентацію та
          відточити доповідь.</p>
                    <p>Перші декілька мітапів плануються у форматі: дві доповіді по напрямку front-end, плюс один
          спеціальний гість, який не обов'язково пов'язаний з фронтендом, але може розповісти щось
          цікаве для всіх. Цього разу до нас прийде Любомир Семків, який займається розробкою
          одного з провідних геолокаційних сервісів. Любомир розповість багато цікавих фактів про
          поточний стан розвитку геолокаційних сервісів та існуючи проблеми.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TabComponent tabs={tabs} firstSelect={1}/>

        <div className="add_to_us">
          <h3>Приєднюйтесь до спільноти:</h3>
          <div className="add_to_us_links">
            <a className="slack_logo"
              data-gtag="join-slack-details"
              href="https://dynamictalks.slack.com/join/shared_invite/enQtMjU0OTkwNjY0MjYzLTQxZmJkNjk2OTZjNTQ1OTc4N2ExYmQwZDZjYTBlYWUyNzA2NmJjMDc0ZGIxZWQ3OTkyNmZjMDQxN2RmNzA2ODc"
              id="join-slack-details"
              target="_blank"
            >
              <img alt="slack-icon"
                src={slack}
              />
            </a>
            <a className="facebook_logo"
              data-gtag="join-facebook-details"
              href="https://www.facebook.com/dynamictalks/"
              id="join-facebook-details"
              target="_blank"
            >
              <img alt="facebook-logo"
                src={facebook}
              />
            </a>
          </div>
        </div>
      </Section>
    );
  }
}
