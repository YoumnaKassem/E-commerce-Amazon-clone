import './home.css'
import Product from './Product'
function Home() {
  return (
    <div className="home">
      <div className='container'>
      	<img className='home-bannar' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='bannar' />
      	<div className='home-row'>
      		<Product title='product 1' price='22.99' rating='2' image='https://img.pngio.com/women-dress-png-image-purepng-free-transparent-cc0-png-image-png-cloth-1300_1484.png' />
      	 	<Product title='product 2' price='12.59' rating='0' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Msq5LZlhk3U1uzDhVBJib1CEAwe4-u6d5Q&usqp=CAU'/>
      	</div>
      	<div className='home-row'>
      	 <Product title='product 3' price='42' rating='1' image='https://www.pngkit.com/png/full/805-8050678_dress-png-dress-skirt-fashion-outfits-womens-fashion.png'/>
      	</div>
      	<div className='home-row'>
      	 <Product title='product 4' price='5.99' rating='5' image='https://img.pngio.com/women-dress-png-image-purepng-free-transparent-cc0-png-image-png-cloth-1300_1484.png' />
      	 <Product title='product 5' price='10.59' rating='4' image='https://www.pngkit.com/png/full/805-8050678_dress-png-dress-skirt-fashion-outfits-womens-fashion.png'/>
      	 <Product title='product 6' price='7.00' rating='1' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Msq5LZlhk3U1uzDhVBJib1CEAwe4-u6d5Q&usqp=CAU'/>
		 <Product title='product 7' price='5.00' rating='4' image='https://img.pngio.com/women-dress-png-image-purepng-free-transparent-cc0-png-image-png-cloth-1300_1484.png'/>
      	</div>

      </div>

    </div>
  );
}

export default Home;