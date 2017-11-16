import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { App } from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const newApp = require('./components/App');
    render(newApp);
  });
}


(function() {
  let tabs = document.getElementById('events-tabs');
  let tabsHead = tabs.firstElementChild;
  let tabsContent = tabs.lastElementChild;

  tabsHead.addEventListener('click', function($event) {
    let tab = $event.target;

    if (tab.classList.contains('tabs__item')) {
      let index = Array.prototype.slice.call(tabsHead.children).indexOf(tab);

      toggleContent(tabsHead, index);
      toggleContent(tabsContent, index);
    }
  });

  function toggleContent(tabsContainer, tabIndex) {
    let children = tabsContainer.children;

    for (let i = 0, len = children.length; i < len; i++) {
      children[i].classList.remove('active');
    }

    children[tabIndex].classList.add('active');
  }
})();
