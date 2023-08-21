import useFetchNews from "../api/useFetchNews";
import NewsCard from "./NewsCard";
import category from "./Category";

const categories = ["society", "politics", "economic"];
const Dashboard = () => {
    const { news, loading, error } = useFetchNews();

    const firstNewsByCategory = {};

    // 카테고리별로 첫 번째 뉴스 데이터를 구분
    if (!loading && !error) {
        categories.forEach((cat) => {
            const firstNewsInCategory = news.find((item) => item.newstype === cat);
            if (firstNewsInCategory) {
                firstNewsByCategory[cat] = firstNewsInCategory;
            }
        });
    }
    return (
        <>
            {Object.keys(firstNewsByCategory).map((cat) => (
                <div key={firstNewsByCategory[cat].id}>
                    <h1 className='text-3xl font-bold text-gray-500 mb-3'>{cat}</h1>
                    <NewsCard item={firstNewsByCategory[cat]} />
                </div>
            ))}
        </>
    );
};

export default Dashboard;
