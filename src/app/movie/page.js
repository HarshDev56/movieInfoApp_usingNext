const page = async () => {

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
  console.log(data);

  return (
    <>
      <h1>Hello from movie</h1>
    </>
  );
};

export default page;