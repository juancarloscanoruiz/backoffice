function showContentNav(content, itemNav, items, activeClass) {
  console.log(items);
  items.removeClass(activeClass);
  itemNav.addClass(activeClass);
  content.hide();

  var activeNav = itemNav.attr("rel");
  $("#" + activeNav).fadeIn();
}

export { showContentNav };
