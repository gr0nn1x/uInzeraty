export const createPost = async (formData) => {
  const res = await fetch("http://localhost:3000/api/v1/post", {
    body: formData,
    method: "POST",
  });
  const data = await res.json();
  return {
    status: res.status,
    msg: data.msg,
  };
};

export const getUploads = async () => {
  const req = await fetch("http://localhost:3000/api/v1/post", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};

export type Post = {
  description?: string;
  postname?: string;
  password?: string;
  photo?: string;
  price?: string;
  contact?: string;
  createdAt?: string;
  updatedAt?: string;
};
