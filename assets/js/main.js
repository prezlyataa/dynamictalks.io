(function() {
    var tabs = document.getElementById('events-tabs');
    var tabsHead = tabs.firstElementChild;
    var tabsContent = tabs.lastElementChild;

    tabsHead.addEventListener('click', function($event) {
      var tab = $event.target;

      if (tab.classList.contains('tabs__item')) {
        var index = Array.prototype.slice.call(tabsHead.children).indexOf(tab);

        toggleContent(tabsHead, index);
        toggleContent(tabsContent, index);
      }
    });

    function toggleContent(tabsContainer, tabIndex) {
      var children = tabsContainer.children;

      for (var i = 0, len = children.length; i < len; i++) {
        children[i].classList.remove('active');
      }

      children[tabIndex].classList.add('active');
    }
})();
