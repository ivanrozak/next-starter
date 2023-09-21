export const useFetch = async (url: string, revalidate = 0) => {
  const res = await fetch(process.env.BASE_URL + url, {
    next: {
      revalidate,
    },
  });
  return res.json();
};
