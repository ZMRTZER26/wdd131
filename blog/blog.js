const articles = [
    {
        id: 1,
        title: 'Septimus Heap Book One: Magyk',
        date: 'July 5, 2022',
        description: 'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '****'
    },
    {
        id: 2,
        title: 'Magnus Chase Book One: Sword of Summer',
        date: 'December 12, 2021',
        description: 'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
        imgSrc: 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    }
];

const articlesContainer = document.getElementById('maincontent');


function createArticle(article) {
    const articleElement = document.createElement('article');
    
    const articleDetails = document.createElement('section');
    articleDetails.className = 'article-details';
    const bookDate = document.createElement('p');
    bookDate.className = 'book-date';
    bookDate.textContent = article.date;
    const ageRange = document.createElement('p');
    ageRange.textContent = `Ages: ${article.ages}`;
    const bookGenre = document.createElement('p');
    bookGenre.textContent = `Genre: ${article.genre}`;
    const bookRating = document.createElement('p');
    bookRating.textContent = `Rating: ${article.stars}`;

    articleDetails.appendChild(bookDate);
    articleDetails.appendChild(ageRange);
    articleDetails.appendChild(bookGenre);
    articleDetails.appendChild(bookRating);
    
    const articleContent = document.createElement('section');
    articleContent.className = 'article-content';
    
    const title = document.createElement('h2');
    title.textContent = article.title;
    
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = article.imgSrc;
    img.alt = article.imgAlt;
    figure.appendChild(img);
    
    const description = document.createElement('p');
    description.textContent = article.description;
    
    articleContent.appendChild(title);
    articleContent.appendChild(figure);
    articleContent.appendChild(description);
    
    articleElement.appendChild(articleDetails);
    articleElement.appendChild(articleContent);
    
    return articleElement;
}

articles.forEach(article => {
    const articleElement = createArticle(article);
    articlesContainer.appendChild(articleElement);
});



