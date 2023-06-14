let news = [];
const getLatestNews = async () => {
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10`
  );
  let header = new Headers({
    'x-api-key': 'TBsxjuLbhi-2ON7d4-0XcWIe1GaiJG4EacsoPK7l2rE',
  });
  let response = await fetch(url, { headers: header });
  let data = await response.json();
  news = data.articles;
  console.log(news);
  render();
};

const render = () => {
  let newsHTML = '';
  newsHTML = news
    .map((news) => {
      return `<div class="row news">
    <div class="col-lg-4">
      <img
        class="news-img-size"
        src="https://images.hdqwalls.com/wallpapers/bthumb/cyberpunk-2077-game-2020-poster-4d.jpg"
      />
    </div>
    <div class="col-lg-8">
      <h2>CyberPunk 2077</h2>
      <p>새로운 패치가 나왔다</p>
      <div>2023-06-14</div>
    </div>
  </div>`;
    })
    .join('');
  console.log(newsHTML);

  document.getElementById('news-board').innerHTML = newsHTML;
};

getLatestNews();
