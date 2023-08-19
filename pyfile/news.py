import requests
from bs4 import BeautifulSoup
# ,
categories = ['society', 'politics', 'economic']
def get_newslist(category):
    url = f"https://news.daum.net/breakingnews/{category}"
    html = requests.get(url, headers={"User-Agent": "Mozilla/5.0" \
                                                    "(Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) " \
                                                    "Chrome/110.0.0.0 Safari/537.36"})
    soup = BeautifulSoup(html.text, 'html.parser')
    list_news2 = soup.find('ul', class_="list_news2 list_allnews")
    newslist = list_news2.find_all('div', class_="cont_thumb")
    return newslist

def get_news(newslist):
    for news in newslist:
        title_info = news.find('strong', class_="tit_thumb")
        title = title_info.find('a').text

        press_info = news.find('span', class_="info_news").text
        press = press_info.split()[0]
        date = press_info.split()[2]

        news_info = {
            'title': title,
            'press': press,
            'date': date,
            'newstype': category
        }
        print(news_info)


####print(tag_lst = ex_tag(100, 1))
if __name__ == "__main__":
    page = 1
    for category in categories:
        one_list = get_newslist(category)
        get_news(one_list)





