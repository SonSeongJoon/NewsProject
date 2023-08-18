import requests
from bs4 import BeautifulSoup 
from tqdm.notebook import tqdm

def ex_tag(sid, page):

    url = f"https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1={sid}"\
    "#&date=%2000:00:00&page={page}"
    html = requests.get(url, headers={"User-Agent": "Mozilla/5.0"\
    "(Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "\
    "Chrome/110.0.0.0 Safari/537.36"})
    soup = BeautifulSoup(html.text, 'html.parser')
    a_tag = soup.find_all("a")
    
    
    tag_lst = []
    for a in a_tag:
        if "href" in a.attrs:  
            if (f"sid={sid}" in a["href"]) and ("article" in a["href"]):
                tag_lst.append(a["href"])
                
    return tag_lst

####print(tag_lst = ex_tag(100, 1))
if __name__ == "__main__":
    sid = "100"
    page = 1
    links = ex_tag(sid, page)
    for link in links:
        print(link)
    
     # wowowowoww
     # 멍멍멍 가아쥐
     # 꾸엑 오리
     
    #fkfkfffffffff