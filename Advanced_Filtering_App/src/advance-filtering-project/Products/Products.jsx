import Card from '../components/Card';
import './Products.css';
function Products({result}) {
  return (
    <>
    <section className="card-container">
      {/* <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> */}
      {result}
    </section>
    </>
  )
}
  


export default Products;
