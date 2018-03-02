import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { RegistrationButton } from '../RegistrationButton';
import { Anchor } from 'src/components/Anchor';
import pointerIconPath from 'src/images/header/pointer.svg';
import calendarIconPath from 'src/images/header/calendar.svg';
import snakeIconPath from 'src/images/header/snake.svg';
import menuBurgerClosePath from 'src/images/header/burger.svg';
import menuBurgerOpenPath from 'src/images/header/burger-close.svg';
import logoPath from 'src/images/dt-logo.svg';
import './Header.scss';


export const CN = 'header';
const NAV = 'navbar';


export default class Header extends Component {
  
  static propTypes = {
    
    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,
    
    /**
     * config - configuration object
     */
    config: PropTypes.object.isRequired,
  };
  
  static defaultProps = {};
  
  constructor(props) {
    super(props);
    
    this.state = {
      isMenuOpen: false
    };
    
    this.onMenuClick = this.onMenuClick.bind(this);
    
  }
  
  renderIcon(path, altText, content) {
    let img = ( <img
      alt={altText}
      src={path}/>);
    return content ? <span> {img} {content}</span> : img;
  }
  
  renderNavLinks() {
    const {config: {headerNavigationLinks}} = this.props;
    return headerNavigationLinks.map((link, i) => {
      return <Anchor
        className={cx(`${NAV}__link`)}
        id={link}
        key={i}
      >
        {link}
      </Anchor>;
    });
  }
  
  renderEventInfo() {
    const {config: {eventInformation: einfo}} = this.props;
    // const time = Date.parse(einfo.eventDate.time);
    return (
      <div className="event-info">
        <div className="event-info__top">
          {this.renderIcon(calendarIconPath, 'calendarIconPath', '10.03.2018')}
          {this.renderIcon(pointerIconPath, 'pointerIconPath', einfo.eventDate.place)}
        </div>
        <h1 className="event-info__title">{einfo.title}</h1>
        <h2 className="event-info__slogan">{einfo.slogan}</h2>
      </div>
    );
  }
  
  onMenuClick() {
    const {isMenuOpen} = this.state;
    this.setState((prevState) => {
      return {isMenuOpen: !prevState.isMenuOpen};
    });
    
    console.info(isMenuOpen);
  }
  
  render() {
    const {className, config} = this.props;
    const {isMenuOpen} = this.state;
    
    return (
      <div>
        <section className={cx(CN, className)}>
          <div className={cx(`${NAV}__wrapper`)}>
            <div className="container">
              <div className={cx(NAV)}>
                <Anchor id={'logo'}>
                  <img
                    src={logoPath}/>
                </Anchor>
                <nav className={cx(`${NAV}__menu`)}>
                  {this.renderNavLinks()}
                </nav>
                <RegistrationButton
                  className={cx(`${NAV}__btn`)}
                  config={config}
                />
                <div className={cx(`${NAV}__burger-icon`)}>
                  <img
                    alt="burger-icon"
                    onClick={this.onMenuClick}
                    src={isMenuOpen ? menuBurgerOpenPath : menuBurgerClosePath}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={cx(`${CN}__event-info`)}>
            {this.renderEventInfo()}
          </div>
          <div className="snake">
            {this.renderIcon(snakeIconPath, 'snakeIconPath-picture')}
          </div>
          <div className={cx({'collapse-menu': isMenuOpen})}>
            {isMenuOpen &&
            <div>
              <nav>{this.renderNavLinks()}</nav>
              <RegistrationButton
                className="collapse-menu__rbtn"
                config={config}
              />
            </div>
            }
          </div>
        </section>
        
        <div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eius, eos error fugiat fugit illo
            incidunt iusto nemo saepe sint? Autem blanditiis enim exercitationem facere laboriosam possimus quod saepe,
            veniam.
          </div>
          <div>Dolore doloremque unde voluptate! A ab accusamus atque autem blanditiis delectus dolorum ea enim error
            eum eveniet fugiat impedit, inventore iste, maiores perferendis placeat quidem ratione rem reprehenderit
            sequi voluptas?
          </div>
          <div>A commodi deleniti, deserunt dignissimos eum exercitationem facere fugit impedit iste molestias non,
            perferendis, possimus quae quidem quisquam saepe vitae. Cupiditate maxime nam officia optio placeat quia
            recusandae saepe voluptate.
          </div>
          <div>Ad alias amet, consequuntur corporis culpa dolorum ea eum exercitationem harum, inventore ipsum magnam
            minus nam nesciunt nulla obcaecati optio porro provident, quis quo repellat sapiente similique sint sunt
            suscipit.
          </div>
          <div>Quidem quisquam temporibus ut. Aliquid asperiores at cumque doloremque fugit iusto, libero molestiae,
            neque reprehenderit sed temporibus veritatis? Beatae, eligendi facere laborum molestias nesciunt
            perspiciatis provident repudiandae suscipit tenetur veniam!
          </div>
          <div>A accusantium perferendis quaerat quam quas repellendus saepe veritatis voluptate! Ad cupiditate
            dignissimos doloremque doloribus ea id iure labore maxime omnis quos reiciendis repellendus sint, soluta
            suscipit vero vitae voluptate?
          </div>
          <div>Accusamus dignissimos earum eum excepturi facere nemo non nulla provident? Aliquid, animi assumenda
            blanditiis culpa et itaque molestiae, nobis officiis perferendis placeat quia, quidem quo ratione rem sed
            tenetur voluptatibus?
          </div>
          <div>Aut beatae blanditiis debitis, ea exercitationem harum hic illo, magnam molestiae, nemo totam voluptatem
            voluptates. Accusantium, eius, eligendi enim ex exercitationem id illum inventore molestias non provident
            sint totam velit.
          </div>
          <div>A aspernatur consequuntur cum delectus dicta, doloribus eum fugit iste laudantium nemo repellendus
            reprehenderit temporibus, totam? Asperiores consequuntur culpa excepturi id nam necessitatibus possimus,
            tempora. Ducimus fugit necessitatibus repellendus voluptatum?
          </div>
          <div>Alias animi autem blanditiis culpa dicta dignissimos eos, explicabo illo illum itaque laboriosam
            laudantium magnam necessitatibus nulla odit praesentium quas repellendus reprehenderit rerum soluta sunt
            suscipit tempora temporibus velit voluptate.
          </div>
          <div>Architecto assumenda beatae, culpa cum dolor dolorem eos, esse et ex ipsam, laborum modi nemo quaerat sed
            sunt vero voluptas voluptate. Dolorem, eum ipsam iste itaque iusto quaerat tempora veniam?
          </div>
          <div>Asperiores aspernatur dignissimos dolorum earum error, est ex, impedit incidunt iusto labore laborum
            molestiae natus nemo non odit officiis optio pariatur quas quod rem repellendus sed sequi similique tempora,
            tempore!
          </div>
          <div>Aliquid deserunt dignissimos dolor facilis, fugiat omnis. Aspernatur consequatur debitis dolores enim est
            ex, fuga fugiat impedit inventore maiores modi neque nobis pariatur, quae repellat suscipit totam. Explicabo
            ipsa, odit?
          </div>
          <div>Amet architecto error nesciunt. Adipisci aut dolor doloremque ea eius eligendi impedit incidunt iste
            libero natus, necessitatibus nulla pariatur perferendis porro, quo repudiandae tempora temporibus, tenetur
            vitae voluptatem. Earum, fugit.
          </div>
          <div>Accusantium alias animi atque aut beatae deserunt dicta dignissimos distinctio dolore ea eligendi est
            magnam, nisi numquam provident quisquam quo quod rerum similique totam? Aliquam dicta dolorem laudantium
            molestias nulla!
          </div>
          <div>A accusamus aliquid, animi assumenda autem corporis cupiditate deleniti dolores illo nam quasi, qui
            tempore vitae. Aperiam facilis mollitia nostrum odio quo! A blanditiis ipsam libero minus non, placeat quod.
          </div>
          <div>Accusantium architecto, consequuntur cum cumque nulla odit provident repudiandae. Accusamus aspernatur
            autem blanditiis dignissimos distinctio doloremque eos error labore laboriosam libero, magnam molestias nisi
            officia porro recusandae reprehenderit saepe sunt!
          </div>
          <div>Aut cupiditate eius, ipsam ipsum quisquam recusandae ullam voluptatum. Ad adipisci assumenda at
            cupiditate debitis dolor, dolores hic impedit, itaque molestias non perspiciatis qui repellendus vel vero?
            Accusantium, excepturi quaerat.
          </div>
          <div>Accusantium, architecto, beatae dignissimos illo impedit iste iure maiores minus, natus necessitatibus
            officiis ut voluptatem voluptatum. Accusantium cupiditate error esse fuga hic molestiae mollitia nihil,
            nostrum omnis praesentium quo repellendus!
          </div>
          <div>Amet blanditiis, esse et facere facilis, ipsum maxime minima optio quo soluta suscipit unde voluptatum.
            Alias animi quam quos. Aliquid at consectetur est eum facilis itaque maxime quia recusandae! Possimus?
          </div>
        </div>
      
      </div>
    );
  }
}
