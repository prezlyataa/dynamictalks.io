import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './AboutUsSection.scss';
import {Heading} from 'src/components/Heading';

import meetUp from 'src/images/meetup.jpg';

export default class AboutUsSection extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,

    /**
     * config - configuration object
     */
    config: PropTypes.object.isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    autoBind(this);
  }


  render() {
    const {config} = this.props;




    return (
      <section className='about_us_section'>
        <div className='text-wrapper'>
          <Heading title={config.titles.about_us}/>

          <h2>dynamics talks</h2>

          <p>Dynamic JS Talks - це серія регулярних мітапів, де спеціалісти будуть ділитись своїм досвідом і розкривати актуальні теми, обговорювати поточні тренди та існуючі проблеми, шукати варіанти їх вирішення. Ми бачимо Dynamic Talks як платформу публічного обміну знаннями та досвідом. Якщо вам є чим поділитись і ви бажаєте це робити - зв'яжіться з нами, ми додамо вас в один з наступних мітапів.</p>

        </div>

        <div className='about_us_photo'>
          <img src={meetUp} alt=""/>
        </div>

      </section>
    );
  }
}
