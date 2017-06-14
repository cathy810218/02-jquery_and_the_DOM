'use strict';

var articles = [];
// {
//   title:       'Bacon Ipsum',
//   category:    'food',
//   author:      'Kevin Bacon',
//   authorUrl:   'http://www.imdb.com/name/nm0000102/',
//   publishedOn: '2015-11-05',
//   body:        '<p>Bacon ipsum dolor amet do ex andouille minim, kielbasa consectetur t-bone. Ullamco alcatra deserunt, occaecat sed drumstick prosciutto. Cupim sed ullamco cow ham hock turkey pariatur. Officia landjaeger minim, tenderloin salami ribeye cupidatat. Consequat reprehenderit shank nostrud proident shoulder mollit flank. Excepteur quis occaecat kevin officia, ribeye sausage chuck et pig.</p><p><img src="http://baconmockup.com/600/300/" class="pull-right" > Cupidatat pancetta chuck fugiat shankle dolor drumstick excepteur spare ribs duis. Meatloaf beef ribs et picanha eu in qui dolore tongue enim spare ribs capicola est pork chop swine. Ipsum strip steak nostrud ham hock qui irure. <img src="http://baconmockup.com/300/400/" class="pull-right">Picanha occaecat prosciutto, rump tempor jerky proident voluptate short loin jowl.</p><p> Leberkas pariatur commodo ex adipisicing kevin magna meatball turducken id shoulder consectetur officia ham. Ribeye ullamco porchetta, velit fatback beef dolor pastrami swine salami tail. Turducken shoulder aliquip, biltong nostrud enim dolore chuck.</p><p> Jerky lorem consectetur tempor consequat pig magna incididunt filet mignon ullamco elit ea ut frankfurter. Andouille salami pig capicola. Short ribs cupim sirloin, in shank non landjaeger tri-tip. Hamburger cillum ground round, ham minim ex short ribs ribeye.</p><p> Prosciutto incididunt cow ball tip jowl ex. Nostrud reprehenderit tempor consequat sunt mollit ball tip salami kielbasa excepteur in est eiusmod. Corned beef ham hock cupidatat qui boudin filet mignon tempor, ut pork loin adipisicing doner t-bone short ribs pancetta. Swine veniam short ribs labore bresaola picanha ground round nostrud. Est turkey voluptate beef, fatback frankfurter pig in. Biltong bresaola salami short loin enim ut filet mignon.</p><p>Salami elit dolore sunt, in fatback porchetta est shankle ad boudin ea short loin. Velit cow prosciutto venison tri-tip laboris, magna sirloin. In corned beef eu magna dolore porchetta andouille. Chicken sunt occaecat pig.</p>'
// },
function Article (rawDataObj) {
  // DONE: Use the JS object passed in to complete this constructor function:
  // Save ALL the properties of `rawDataObj` into `this`
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  /* DONE: This cloned article still has a class of template.
  However, in our modules.css stylesheet, we gave all elements
  with a class of template a display of none. Let's make
  sure we're not accidentally hiding our cloned article! */

  // get this new article and remove the template class
  $newArticle.removeClass('template');

  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.data('category', this.category);

  /* DONE: Now use jQuery traversal and setter methods to fill in the rest
  of the current template clone with properties from this particular Article instance.
  We need to fill in:

    1. author name,
    2. author url,
    3. article title,
    4. article body, and
    5. publication date. */

    $newArticle.find('.byline a').html(this.author);
    $newArticle.find('.byline a').attr('href', this.authorUrl);
    $newArticle.find('h1:first').html(this.title);
    $newArticle.find('.article-body').html(this.body);
    $newArticle.find('time[pubdate]').attr('datetime',this.publishedOn);

  // Display the date as a relative number of 'days ago'
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.sort(function(a,b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(articleObject) {
  // REVIEW: Take a look at this forEach method; This may be the first time we've seen it.

  // because rawData is an array, so we use for each to iterate through each dictionary object and
  // pass dictionary object into Article constructor to create an Article object
  // then this line below adds Article object in the articles array.
  articles.push(new Article(articleObject));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
