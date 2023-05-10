import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css"

const page = async () => {

  await new Promise(resolve => setTimeout(resolve, 2000))

  const url = process.env.RAPID_URL;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.RAPID_API_HOST
    }
  };

  const res = await fetch(url, options)
  const data = await res.json()
  const main_data = data.titles;
  console.log(data);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Movies & Series</h1>
          <div className={styles.card_section}>
            {
              main_data.map((currEle) => {
                return <MovieCard key={currEle.id} {...currEle} />
              })
            }
          </div>
        </div>
      </section>

    </>
  );
};

export default page;