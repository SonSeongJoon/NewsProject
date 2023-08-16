import requests
from bs4 import BeautifulSoup

response = requests.get('https://search.naver.com/search.naver?where=news&sm=tab_jum&query=전자전기공학')
html = response.text
soup = BeautifulSoup(html,'html.parser')
links = soup.select(".news_tit")
for link in links:
    title = link.text
    url = link.attrs['href']
    print(title,url)
