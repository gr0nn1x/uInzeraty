export const createPost = async (formData: Post) => {
  const res = await fetch("http://localhost:3000/api/v1/post", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    method: "POST",
  });
  const data = await res.json();
  return {
    status: res.status,
    msg: data.msg,
  };
};

//změnit název
/* export const signIn = async (formData: Post) => {
  const res = await fetch("http://localhost:3000/api/v1/post");
};
 */
export type Post = {
  email?: string;
  postname?: string;
  password?: string;
  photo?: string;
  createdAt?: string;
  updatedAt?: string;
};
