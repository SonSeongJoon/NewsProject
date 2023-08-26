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



def get_newslist(category, num_pages):
    newslist = []
    
    for page in range(1, num_pages + 1):
        url = f"https://news.daum.net/breakingnews/{category}?page={page}"
        html = requests.get(url, headers={"User-Agent": "Mozilla/5.0" \
                                                    "(Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) " \
                                                    "Chrome/110.0.0.0 Safari/537.36"})
        soup = BeautifulSoup(html.text, 'html.parser')
        list_news2 = soup.find('ul', class_="list_news2 list_allnews")
        news_items = list_news2.find_all('li')

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
            address_url = address_url_info.find('a',class_="link_txt")['href']

            news_info = {
                'title': title,
                'press': press,
                'content': content,
                'date': date,
                'newstype': category,
                'img': img,
                'address_url': address_url
            }
            newslist.append(news_info)
                
    return newslist

def save_news_to_db(news_info):
    title = news_info['title']
    press = news_info['press']
    content = news_info['content']
    date = news_info['date']
    newstype = news_info['newstype']
    image = news_info['image']
    address_url = news_info['url']

    # SQL 쿼리 작성
    query = "INSERT INTO news (title, press, content, date, newstype) VALUES (?, ?, ?, ?, ?)"

    # 쿼리 실행
    cursor.execute(query, (title, press, content, date, newstype))
    conn.commit()


            
def main():
    num_pages = 50
    categories = ['','society','politics','economic','foreign','culture','entertain','sports','digital','editorial','press','botnews']



    for category in categories:
        newslist = get_newslist(category, num_pages)

        for news in newslist:
            
            
            save_news_to_db(news_info)
            #wwwwww

if __name__ == "__main__":
    main()