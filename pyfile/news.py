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


# Create a dictionary to map the original category to its Korean translation
category_translation = {
    '': '최신',
    'society': '사회',
    'politics': '정치',
    'economic': '경제',
    'foreign': '외국',
    'culture': '문화',
    'entertain': '엔터테인먼트',
    'sports': '스포츠',
    'digital': '디지털',
    'editorial': '사설',
    'press': '언론',
    'botnews': '봇뉴스'
}
def is_url_duplicate(address_url):
    query = "SELECT COUNT(*) FROM news WHERE address_url = ?"
    cursor.execute(query, (address_url,))
    count = cursor.fetchone()[0]
    return count > 0

# Modify the get_newslist function to translate the category before saving
def get_newslist(category):
    for page in range(1, 10):
        url = f"https://news.daum.net/breakingnews/{category}?page={page}"
        html = requests.get(url, headers={"User-Agent": "Mozilla/5.0" \
                                                        "(Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) " \
                                                        "Chrome/110.0.0.0 Safari/537.36"})
        soup = BeautifulSoup(html.text, 'html.parser')
        list_news2 = soup.find('ul', class_="list_news2 list_allnews")

        try:
            news_items = list_news2.find_all('li')
        except:
            print("page end")
            break

        for news_item in news_items:
            img_info = news_item.find('a', class_="link_thumb")
            if img_info:
                img_tag = img_info.find('img')
                img = img_tag['src']
            else:
                img = None

            title_info = news_item.find('strong', class_="tit_thumb")
            title = title_info.find('a').text

            press_info = title_info.find_next('span', class_="info_news").text
            press = press_info.split()[0]
            date = press_info.split()[2]

            content_info = news_item.find('div', class_="desc_thumb")
            content = content_info.find('span', class_="link_txt").text

            address_url_info = news_item.find('strong', class_="tit_thumb")
            address_url = address_url_info.find('a', class_="link_txt")['href']

            # Translate the category to Korean
            translated_category = category_translation[category]

            news_info = {
                'title': title,
                'press': press,
                'content': content,
                'date': date,
                'newstype': translated_category,
                'img': img,
                'address_url': address_url
            }

            save_news_to_db(news_info)

# Other parts of the code remain unchanged

def save_news_to_db(news_info):
    title = news_info['title']
    press = news_info['press']
    content = news_info['content']
    date = news_info['date']
    newstype = news_info['newstype']
    image = news_info['img']
    address_url = news_info['address_url']

    # SQL 쿼리 작성
    query = "INSERT INTO news (title, press, content, date, newstype, image, url) VALUES (?, ?, ?, ?, ?, ?, ?)"

    # 쿼리 실행
    cursor.execute(query, (title, press, content, date, newstype, image, address_url))
    conn.commit()


def main():
    categories = ['','society','politics','economic','foreign','culture','entertain','sports','digital','editorial','press','botnews']
    for category in categories:
        get_newslist(category)

if __name__ == "__main__":
    main()