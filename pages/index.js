import path from "path";
import fs from "fs/promises";

function Home({products}) {
    return (
        <div>
            <ul>
                {products.map(product => <li key={product.id}>{product.title}</li>)}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath,'utf-8')
    const productsData = JSON.parse(jsonData)
     return {
            props: {
                products: productsData.products
            }
        }
}

export default Home;
