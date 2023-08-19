import requests
from bs4 import BeautifulSoup
import pyodbc
import configparser

# INI 파일 읽기
config = configparser.ConfigParser()
config.read("config.ini")

server_name = config.get('database', 'server_name')
db_name = config.get('database', "db_name")
user_id = config.get('database', "user_id")
password = config.get('database', "password")

# 연결 설정
conn = pyodbc.connect(
    f"DRIVER=ODBC Driver 17 for SQL Server;SERVER={server_name};DATABASE={db_name};UID={user_id};PWD={password}"
)
cursor = conn.cursor()


def get_newslist(category):
    url = f"https://news.daum.net/breakingnews/{category}"
    html = requests.get(url, headers={"User-Agent": "Mozilla/5.0" \
                                                    "(Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) " \
                                                    "Chrome/110.0.0.0 Safari/537.36"})
    soup = BeautifulSoup(html.text, 'html.parser')
    list_news2 = soup.find('ul', class_="list_news2 list_allnews")
    newslist = list_news2.find_all('div', class_="cont_thumb")
    get_news(newslist, category)
    return newslist

def get_news(newslist, category):
    for news in newslist:
        title_info = news.find('strong', class_="tit_thumb")
        title = title_info.find('a').text

        press_info = news.find('span', class_="info_news").text
        press = press_info.split()[0]
        date = press_info.split()[2]

        content_info = news.find('div', class_="desc_thumb")
        content = content_info.find('span', class_="link_txt").text

        news_info = {
            'title': title,
            'press': press,
            'content': content,
            'date': date,
            'newstype': category
        }
        save_news_to_db(news_info)


def save_news_to_db(news_info):
        title = news_info['title']
        press = news_info['press']
        content = news_info['content']
        date = news_info['date']
        newstype = news_info['newstype']

        # SQL 쿼리 작성
        query = f"INSERT INTO news (title, press, content, date, newstype) VALUES (?, ?,?, ?, ?)"

        # 쿼리 실행
        cursor.execute(query, (title, press, content, date, newstype))
        conn.commit()



####print(tag_lst = ex_tag(100, 1))
if __name__ == "__main__":
    categories = ['society', 'politics', 'economic']
    for category in categories:
        one_list = get_newslist(category)





