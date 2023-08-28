import useFetchNews from "../api/useFetchNews";
import NewsCard from "./NewsCard";
import {dashboard} from "./Categories";
const numberOfNewsPerCategory = 1; // 각 카테고리별로 가져올 뉴스 개수 설정

const Dashboard = () => {
    const { news, loading, error } = useFetchNews();

    const firstNewsByCategory = {};

    // 카테고리별로 뉴스 데이터를 구분하여 저장
    if (!loading && !error) {
        dashboard.forEach((cat) => {
            const newsInCategory = news.filter((item) => item.newstype === cat);
            if (newsInCategory.length >= numberOfNewsPerCategory) {
                firstNewsByCategory[cat] = newsInCategory.slice(0, numberOfNewsPerCategory);
            }
        });
    }
    return (
        <>
            {Object.keys(firstNewsByCategory).map((cat) => (
                <div key={cat}>
                    <h1 className='text-3xl font-bold text-gray-500 mb-3'>{cat}</h1>
                    {firstNewsByCategory[cat].map((newsItem) => (
                        <NewsCard key={newsItem.id} item={newsItem} />
                    ))}
                </div>
            ))}
        </>
    );
};

export default Dashboard;
