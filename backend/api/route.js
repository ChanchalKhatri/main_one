// export async function GET() {
//   const data = [
//     {
//       id: 1,
//       title: "HTML",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi, recusandae laboriosam eum accusamus mollitia fugit necessitatibus!",
//       path: "./assets/html.jpg",
//     },
//     {
//       id: 2,
//       title: "CSS",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi, recusandae laboriosam eum accusamus mollitia fugit necessitatibus!",
//       path: "./assets/css.jpeg",
//     },
//     {
//       id: 3,
//       title: "JavaScript",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi, recusandae laboriosam eum accusamus mollitia fugit necessitatibus!",
//       path: "./assets/javascript.png",
//     },
//   ];

//   return Response.json(data);
// }

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/data", (req, res) => {
  const data = [
    {
      id: 1,
      title: "HTML",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi, recusandae laboriosam eum accusamus mollitia fugit necessitatibus!",
      path: "./assets/html.jpg",
    },
    {
      id: 2,
      title: "CSS",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi, recusandae laboriosam eum accusamus mollitia fugit necessitatibus!",
      path: "./assets/css.jpeg",
    },
    {
      id: 3,
      title: "JavaScript",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi, recusandae laboriosam eum accusamus mollitia fugit necessitatibus!",
      path: "./assets/javascript.png",
    },
  ];

  if (res.statusCode === 200) {
    return res.json(data);
  } else {
    return res.json({ message: "Error" });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 3000");
});
