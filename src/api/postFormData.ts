export const postFormData = async <T>(data: FormData): Promise<T> => {
  try {
    // This takes about 2 mins to finally time out and fail
    const response = await fetch("https://test.com", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: data,
    });
    const result = (await response.json()) as T;
    return result;
  } catch (error) {
    return await Promise.reject({ error: true, message: error });
  }
};
