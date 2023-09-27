const HomePage = () => {
  const datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <h1>Home Pages</h1>
      <ul>
        {datas.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
