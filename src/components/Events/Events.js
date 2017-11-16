import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import logo from 'src/images/logo-gd1.svg';
import slack from 'src/images/slack_icon.png';
import facebook from 'src/images/facebook-logo.png';
import './Events.scss';


export const CN = 'events';


export default class Events extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    autoBind(this);
  }


  render() {
    const {className} = this.props;

    return (
      <section className={cx(CN, className)}
        id="section-events"
      >
        <div className="events">
          <div className="section-header">
            <div className="section-column-1">
              <a className="color_logo"
                data-gtag="gd-logo-details"
                href="https://www.griddynamics.com"
                id="gd-logo-details"
                target="_blank"
              >
                <img
                  alt="grid dynamics logo"
                  src={logo}
                />
                <span className="color_logo_name">Grid Dynamics</span>
              </a>
              <div className="events-date">
                <h3>Львів</h3>
                <time>21 жовтня, 2017</time>
              </div>
            </div>
            <div className="section-column-2">
              <h2>Meetup</h2>
              <span className="circle-icon"/>
            </div>
            <div className="section-column-3">
              <a className="btn btn--yellow"
                data-gtag="register-details"
                href="https://goo.gl/forms/CcWPa8ynuWIgZG5H2"
                id="register-details"
                target="_blank"
              >Реєстрація</a>
              <div className="events-place">
                <h3>Communa</h3>
                <h3>м. Львів, вул. Галицька 1, 2-й поверх</h3>
                <h3>(на розі Площі Ринок)</h3>
              </div>
            </div>
          </div>

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
                      <li><span className="line-timetable"><span className="time">10:30</span><span className="text">Реєстрація<span className="underline">_______</span></span></span>
                      </li>
                      <li><span className="line-timetable"><span className="time">11:00</span><span className="text">Відкриття, декілька слів про ідею івенту<span className="underline">_______</span></span></span>
                      </li>
                      <li><span className="line-timetable"><span className="time">11:15</span><span className="text">Доповідь «What skill set and experience required to be a Tech Lead on the project (front-end)» (Георгій Подсвєтов)<span className="underline">_______</span></span></span>
                      </li>
                      <li><span className="line-timetable"><span className="time">12:30</span><span className="text">Кава<span className="underline">_______</span></span></span>
                      </li>
                      <li><span className="line-timetable"><span className="time">12:45</span><span className="text">Доповідь «What you should know about logging when developing web-applications and preparing for production rollout. With examples based on Elastic Stack.» (Володимир Воєвідка)<span className="underline">_______</span></span></span>
                      </li>
                      <li><span className="line-timetable"><span className="time">14:00</span><span className="text">Напої та снеки<span className="underline">_______</span></span></span>
                      </li>
                      <li><span className="line-timetable"><span className="time">14:15</span><span className="text">Доповідь «Why navigation systems with all modern technologies still sucks sometimes in finding locations.» (Любомир Семків)<span className="underline">_______</span></span></span>
                      </li>
                      <li><span className="line-timetable"><span className="time">15:30</span><span className="text">Networking<span className="underline">_______</span></span></span>
                      </li>
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
        </div>

        <div className="section-controls">
          <a href="#section-main" />
          <a className="active"
            href="#section-events"
          />
          <a href="#section-speakers" />
          <a href="#section-organizers" />
        </div>
      </section>
    );
  }
}
