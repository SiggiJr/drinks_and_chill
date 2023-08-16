import { useParams } from "react-router-dom";

const Test = () => {

  const params = useParams()
  console.log(params);

  return ( 
    <>
    <h1>Dies ist eine Test Komponente</h1>
    </>
  );
}

// const ingredients = [
//   {
//     ingredientName: "Gin",
//     iPath: "/filter.php?i=Gin"
//   },
//   {
//     ingredientName: "Vodka",
//     iPath: "/filter.php?i=Vodka"
//   },
//   {
//     ingredientName: "Rum",
//     iPath: "/filter.php?i=Rum"
//   },
//   {
//     ingredientName: "Scotch",
//     iPath: "/filter.php?i=Scotch"
//   },
//   {
//     ingredientName: "Alkoholfrei",
//     iPath: "/filter.php?a=Non_Alcoholic"
//   },
//   {
//     ingredientName: "Zufall",
//     iPath: "/random.php"
//   },
// ]

export default Test;